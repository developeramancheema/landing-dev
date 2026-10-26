import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ClaimFreeLinkResponse = {
  available?: boolean;
  redirectUrl?: string;
  error?: string;
};

function siteOrigin(req: Request): string | null {
  const hostHeader = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const host = hostHeader?.split(",")[0]?.trim();
  if (!host) return null;

  const forwardedProto = req.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    forwardedProto ||
    (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

  return `${proto}://${host}`.replace(/\/$/, "");
}

/** Only the landing site itself may call this route. No cross-origin access. */
function isSameSiteRequest(req: Request): boolean {
  const site = siteOrigin(req);
  if (!site) return false;

  const origin = req.headers.get("origin")?.trim();
  if (origin && origin !== "null") {
    return origin.replace(/\/$/, "") === site;
  }

  const referer = req.headers.get("referer");
  if (!referer) return false;

  try {
    return new URL(referer).origin === site;
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  if (!isSameSiteRequest(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const linkUrl = process.env.CLAIM_FREE_LINK_URL?.trim();
  const token = process.env.CLAIM_FREE_MINT_BEARER_TOKEN?.trim();
  if (!linkUrl || !token) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const origin = siteOrigin(req);
  try {
    const upstream = await fetch(linkUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        ...(origin ? { Origin: origin } : {}),
      },
    });

    const data = (await upstream.json().catch(() => ({}))) as ClaimFreeLinkResponse;

    if (!upstream.ok || !data.redirectUrl) {
      const spotsFull = data.available === false;
      return NextResponse.json(
        {
          ...(spotsFull ? { available: false } : {}),
          error: spotsFull
            ? "Free booking spots are full right now."
            : "Could not open your free booking page. Please try again.",
        },
        { status: spotsFull ? 200 : upstream.status || 502 }
      );
    }

    return NextResponse.json(
      { available: true, redirectUrl: data.redirectUrl },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("Claim-free link request failed:", err);
    return NextResponse.json(
      { error: "Could not open your free booking page. Please try again." },
      { status: 502 }
    );
  }
}
