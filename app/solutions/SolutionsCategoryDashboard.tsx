import type { CategoryDashboardPreview } from "@/lib/solutions-data";

type Props = {
  dashboard: CategoryDashboardPreview;
  side?: "left" | "right";
};

const statusStyles = {
  Confirmed: "bg-indigo-100 text-indigo-700",
  Pending: "bg-amber-100 text-amber-700",
  Paid: "bg-emerald-100 text-emerald-700",
} as const;

export default function SolutionsCategoryDashboard({ dashboard, side = "left" }: Props) {

  return (
    <div className={`h-full overflow-hidden bg-white rounded-2xl shadow-sm`}>
      <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400 sm:h-3 sm:w-3" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 sm:h-3 sm:w-3" />
        </div>
        <div className="text-[10px] font-medium text-neutral-500 sm:text-xs">{dashboard.label}</div>
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-medium text-neutral-600 sm:text-xs">Live</span>
        </div>
      </div>

      <div className="space-y-3 p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-2">
          {dashboard.stats.map((stat) => (
            <div key={stat.label} className={`rounded-lg border p-2 sm:rounded-xl sm:p-3 ${stat.bg}`}>
              <div className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500 sm:text-xs">
                {stat.label}
              </div>
              <div className={`mt-0.5 text-lg font-bold sm:text-xl ${stat.accent}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-neutral-100 bg-neutral-50/50 p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-800 sm:text-sm">Today&apos;s schedule</span>
            <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white sm:text-xs">
              + Book
            </span>
          </div>
          <div className="space-y-2">
            {dashboard.bookings.map((booking) => (
              <div
                key={`${booking.time}-${booking.client}`}
                className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white p-2 sm:gap-3 sm:rounded-xl sm:p-2.5"
              >
                <div className="flex h-9 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-neutral-50 text-center ring-1 ring-neutral-100 sm:h-10 sm:w-14">
                  <span className="text-[9px] font-medium uppercase text-neutral-400 sm:text-[10px]">
                    {booking.period}
                  </span>
                  <span className="text-xs font-bold text-neutral-800 sm:text-sm">{booking.time}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-semibold text-neutral-800 sm:text-sm">{booking.client}</div>
                  <div className="truncate text-[11px] text-neutral-600 sm:text-xs">{booking.service}</div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold sm:text-[10px] ${statusStyles[booking.status]}`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
