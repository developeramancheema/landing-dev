import { NextResponse } from "next/server";

const FALLBACK_COUNTRY = "in";

function normalizeCountry(code: string | null | undefined): string | null {
  if (!code) return null;
  const normalized = code.trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(normalized) || normalized === "xx") return null;
  return normalized;
}

function getClientIp(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-client-ip") ||
    null
  );
}

function isPrivateOrLocalIp(ip: string): boolean {
  return (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip) ||
    ip.startsWith("fc") ||
    ip.startsWith("fd")
  );
}

async function fetchJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

/** Prefer providers that correctly classify VPN exit nodes (e.g. Canada vs US). */
async function lookupCountryByIp(ip: string | null): Promise<{
  country: string | null;
  source: string | null;
}> {
  const publicIp = ip && !isPrivateOrLocalIp(ip) ? ip : null;

  // 1) ipwho.is — accurate for this Calgary VPN IP (CA)
  const whoUrl = publicIp
    ? `https://ipwho.is/${encodeURIComponent(publicIp)}`
    : "https://ipwho.is/";
  const who = await fetchJson(whoUrl);
  if (who && who.success !== false) {
    const country = normalizeCountry(
      (who.country_code as string) || (who.country as string)
    );
    if (country) return { country, source: "ipwho.is" };
  }

  // 2) ip-api.com (HTTP) — also accurate for CA VPN exits
  const apiUrl = publicIp
    ? `http://ip-api.com/json/${encodeURIComponent(publicIp)}?fields=status,countryCode`
    : "http://ip-api.com/json/?fields=status,countryCode";
  const ipApi = await fetchJson(apiUrl);
  if (ipApi && ipApi.status === "success") {
    const country = normalizeCountry(ipApi.countryCode as string);
    if (country) return { country, source: "ip-api.com" };
  }

  // 3) country.is
  const countryIsUrl = publicIp
    ? `https://api.country.is/${encodeURIComponent(publicIp)}`
    : "https://api.country.is/";
  const countryIs = await fetchJson(countryIsUrl);
  if (countryIs) {
    const country = normalizeCountry(countryIs.country as string);
    if (country) return { country, source: "country.is" };
  }

  return { country: null, source: null };
}

export async function GET(req: Request) {
  try {
    const headerCountry = normalizeCountry(
      req.headers.get("x-vercel-ip-country") ||
        req.headers.get("cf-ipcountry") ||
        req.headers.get("x-country-code")
    );

    if (headerCountry) {
      return NextResponse.json({ country: headerCountry, source: "header" });
    }

    const ip = getClientIp(req);
    const { country, source } = await lookupCountryByIp(ip);

    return NextResponse.json({
      country: country || FALLBACK_COUNTRY,
      source: source || "fallback",
      ip: ip && !isPrivateOrLocalIp(ip) ? ip : undefined,
    });
  } catch {
    return NextResponse.json({ country: FALLBACK_COUNTRY, source: "fallback" });
  }
}
