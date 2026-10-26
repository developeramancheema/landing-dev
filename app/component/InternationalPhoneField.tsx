"use client";

import { useEffect, useState } from "react";
import {
  CountrySelector,
  usePhoneInput,
  type CountryIso2,
} from "react-international-phone";
import "react-international-phone/style.css";
import {
  getVisitorLocation,
  getVisitorLocationSync,
  getCurrencyForCountry,
  getTimezoneForCountry,
  saveVisitorLocation,
} from "@/app/visitorLocation";

const FALLBACK_COUNTRY: CountryIso2 = "in";
const GEO_API_URL = "/api/geo";

export function isValidInternationalPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8;
}

function toCountryIso2(code: string | null | undefined): CountryIso2 {
  if (!code || code.trim().length !== 2) return FALLBACK_COUNTRY;
  return code.trim().toLowerCase() as CountryIso2;
}

export type PhoneFieldVariant = "contact" | "demo" | "booking";

type InternationalPhoneFieldProps = {
  value: string;
  onChange: (phone: string) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  variant?: PhoneFieldVariant;
  "aria-label"?: string;
};

const shellClass: Record<PhoneFieldVariant, string> = {
  contact: "intl-phone-shell flex w-full items-stretch rounded-xl border border-slate-200/80 bg-white/80 focus-within:ring-2 focus-within:ring-indigo-600",
  demo: "intl-phone-shell flex w-full items-stretch rounded-lg border border-neutral-200 bg-white focus-within:border-[#3D3AF3] focus-within:ring-2 focus-within:ring-[#3D3AF3]/20",
  booking: "intl-phone-shell flex w-full items-stretch rounded-lg border border-neutral-200 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20",
};

const inputClass: Record<PhoneFieldVariant, string> = {
  contact:
    "min-w-0 flex-1 border-0 bg-transparent py-3 pl-2 pr-4 text-neutral-800 placeholder-gray-600 outline-none focus:ring-0",
  demo: "min-w-0 flex-1 border-0 bg-transparent py-2.5 pl-2 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:ring-0",
  booking:
    "min-w-0 flex-1 border-0 bg-transparent py-2.5 pl-2 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:ring-0",
};

type PhoneFieldInnerProps = InternationalPhoneFieldProps & {
  defaultCountry: CountryIso2;
};

function PhoneFieldInner({
  value,
  onChange,
  id,
  name,
  placeholder = "Phone",
  required,
  className = "",
  variant = "contact",
  "aria-label": ariaLabel = "Phone number",
  defaultCountry,
}: PhoneFieldInnerProps) {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry,
      value,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <div className={`${shellClass[variant]} ${className}`.trim()}>
      <CountrySelector
        selectedCountry={country.iso2}
        onSelect={(c) => {
          setCountry(c.iso2);
          const sync = getVisitorLocationSync({ defaultCountry: "IN" });
          const dial = c.dialCode?.startsWith("+")
            ? c.dialCode
            : `+${c.dialCode ?? ""}`;
          const country = c.iso2.toUpperCase();
          saveVisitorLocation({
            ...sync,
            country,
            phoneCode: dial || sync.phoneCode,
            currency: getCurrencyForCountry(country),
            timezone: getTimezoneForCountry(country) ?? sync.timezone,
            source: "browser",
          });
        }}
        preferredCountries={[defaultCountry, "in", "us", "gb", "ae", "sg", "au", "ca"]}
      />
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel}
        value={inputValue}
        onChange={handlePhoneValueChange}
        className={inputClass[variant]}
      />
    </div>
  );
}

export default function InternationalPhoneField(props: InternationalPhoneFieldProps) {
  const [defaultCountry, setDefaultCountry] = useState<CountryIso2 | null>(null);

  useEffect(() => {
    let cancelled = false;

    // Instant UI from cache / browser locale, then refine via /api/geo
    const sync = getVisitorLocationSync({ defaultCountry: "IN" });
    setDefaultCountry(toCountryIso2(sync.country));

    getVisitorLocation({
      geoApiUrl: GEO_API_URL,
      defaultCountry: "IN",
    })
      .then((loc) => {
        if (cancelled) return;
        setDefaultCountry(toCountryIso2(loc.country));
      })
      .catch(() => {
        if (cancelled) return;
        setDefaultCountry((prev) => prev ?? FALLBACK_COUNTRY);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!defaultCountry) {
    return (
      <div
        className={`${shellClass[props.variant ?? "contact"]} ${props.className ?? ""} px-4 py-3 text-sm text-neutral-500`.trim()}
        aria-hidden
      >
        Detecting your country…
      </div>
    );
  }

  return (
    <PhoneFieldInner
      key={defaultCountry}
      {...props}
      defaultCountry={defaultCountry}
    />
  );
}
