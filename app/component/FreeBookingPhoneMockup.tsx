import Image from "next/image";

export default function FreeBookingPhoneMockup() {
  const services = [
    { name: "Hair Cut & Styling", price: "$40", selected: true },
    { name: "Hair Color", price: "$70", selected: false },
    { name: "Spa & Treatment", price: "$80", selected: false },
  ];

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM"];
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const mayDays = [
    ...[28, 29, 30].map((d) => ({ day: d, muted: true })),
    ...Array.from({ length: 31 }, (_, i) => ({ day: i + 1, muted: false })),
  ];

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="relative rounded-[2rem] border-[3px] border-[#3D3AF3]/30 bg-white p-2 drop-shadow-xl">
        {/* Floating sparkle lines — top right */}
        <div className="pointer-events-none absolute -right-9 -top-12 z-20 w-10 h-26 -rotate-10">
          <Image src="/sparkle-line.webp" alt="Sparkle Lines" width={80} height={50} className="object-contain"/>
        </div>

        <div className="overflow-hidden rounded-[1.6rem] bg-neutral-50">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 text-xs text-neutral-500">
            <span>9:41</span>
            <div className="mx-auto h-4 w-16 rounded-full bg-neutral-900" />
            <span className="flex gap-0.5">
              <span className="h-2 w-2 rounded-sm bg-neutral-400" />
              <span className="h-2 w-2 rounded-sm bg-neutral-400" />
            </span>
          </div>

          <div className="space-y-4 px-3 pb-3">
            <p className="text-sm font-semibold text-neutral-800">Your Business</p>

            {/* Stepper */}
            <div className="flex flex-col gap-3">
              <div className="text-sm text-center font-semibold text-neutral-800">Book Your Appointment</div>
              <div className="flex items-center justify-between text-xs relative">
                {["Service", "Time", "Details", "Confirm"].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-0.5 relative z-10">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full font-bold ${
                        i === 0
                          ? "bg-[#3D3AF3] text-white"
                          : i < 2
                            ? "bg-neutral-200 text-neutral-400"
                            : "bg-neutral-200 text-neutral-400"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className={i === 0 ? "font-semibold text-[#3D3AF3]" : "text-neutral-400"}>
                      {step}
                    </span>
                  </div>
                ))}
                <div className="absolute top-2 z-1 left-1/2 -translate-x-1/2 border-b border-neutral-200 w-[calc(100%-25px)]"></div>
              </div>
            </div>

            {/* Services */}
            <div className="relative">
              <div className="mb-1.5 text-sm font-semibold text-neutral-800">Select a Service</div>
              <div className="space-y-2">
                {services.map((s) => (
                  <div
                    key={s.name}
                    className={`flex items-center justify-between rounded-md border drop-shadow-sm px-2 py-3 text-xs ${
                      s.selected
                        ? "border-[#3D3AF3] bg-[#3D3AF3]/5"
                        : "border-neutral-100 bg-neutral-50"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`h-2.5 w-2.5 rounded-full border-2 ${
                          s.selected ? "border-[#3D3AF3] bg-[#3D3AF3]" : "border-neutral-300"
                        }`}
                      />
                      <span className="font-medium text-neutral-700">{s.name}</span>
                    </span>
                    <span className="font-semibold text-neutral-600">{s.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-indigo-600">View More Services</div>
            </div>

            {/* Calendar */}
            <div className="rounded-lg bg-white p-2 drop-shadow-sm">
              <div className="mb-1 text-sm font-semibold text-neutral-800">Select Date &amp; Time</div>
              <div className="mb-1 flex items-center justify-between text-xs font-semibold text-neutral-700">
                <span>‹</span>
                <span>May 2024</span>
                <span>›</span>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center text-xs text-neutral-400">
                {days.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
              <div className="mt-0.5 grid grid-cols-7 gap-1 text-center text-xs">
                {mayDays.slice(0, 35).map((d, i) => (
                  <span
                    key={i}
                    className={`flex h-6 w-6 items-center justify-center rounded-full mx-auto ${
                      d.day === 16 && !d.muted
                        ? "bg-[#3D3AF3] font-bold text-white"
                        : d.muted
                          ? "text-neutral-300"
                          : "text-neutral-600"
                    }`}
                  >
                    {d.day}
                  </span>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="grid grid-cols-2 gap-1">
              {timeSlots.map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md py-3 text-xs text-center font-medium ${
                    i === 0
                      ? "bg-[#3D3AF3] text-white"
                      : "border border-neutral-200 bg-white text-neutral-600"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating confirmation card */}
      <div className="absolute -bottom-2 -right-4 z-10 flex items-center gap-2 rounded-xl border border-neutral-100 bg-white p-3 drop-shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <span className="absolute h-13 w-13 rounded-full bg-emerald-100" aria-hidden />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
          <div className="text-center">
            <div className="text-sm font-bold text-neutral-900">Booking Confirmed!</div>
            <div className="text-xs text-neutral-500">You&apos;re all set.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
