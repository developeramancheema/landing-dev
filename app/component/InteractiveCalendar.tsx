"use client";
import { useMemo, useState } from "react";
import Heading from "./Heading";
import { CheckListItem } from "./CheckList";

type CalendarCell = {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
};

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const FEATURES = [
  "Customise scheduling to match your business flow.",
  "Set availability, buffer time, and booking limits instantly.",
  "Automate reminders, confirmations, and follow-ups beautifully.",
];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildCalendarCells(viewDate: Date): CalendarCell[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const startWeekday = firstDayOfMonth.getDay();

  const cells: CalendarCell[] = [];

  for (let i = startWeekday - 1; i >= 0; i -= 1) {
    const dayNumber = daysInPrevMonth - i;
    cells.push({
      date: new Date(year, month - 1, dayNumber),
      dayNumber,
      isCurrentMonth: false,
    });
  }

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    cells.push({
      date: new Date(year, month, dayNumber),
      dayNumber,
      isCurrentMonth: true,
    });
  }

  let nextMonthDay = 1;
  // Always render 6 rows (42 cells) so every month keeps equal height.
  while (cells.length < 42) {
    cells.push({
      date: new Date(year, month + 1, nextMonthDay),
      dayNumber: nextMonthDay,
      isCurrentMonth: false,
    });
    nextMonthDay += 1;
  }

  return cells;
}

function CalendarMonthPanel() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(today);

  const cells = useMemo(() => buildCalendarCells(viewDate), [viewDate]);
  const weeks = useMemo(() => {
    const rows: CalendarCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
    return rows;
  }, [cells]);

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPrevMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleDateSelect = (cell: CalendarCell) => {
    setSelectedDate(cell.date);
    if (!cell.isCurrentMonth) {
      setViewDate(new Date(cell.date.getFullYear(), cell.date.getMonth(), 1));
    }
  };

  return (
    <div className="rounded-xl bg-white p-3 drop-shadow-xl">
      <div className="mb-4 flex items-center justify-between text-neutral-900">
        <button type="button" onClick={goToPrevMonth} className="cursor-pointer rounded-md bg-indigo-600 px-1 py-1 text-white transition-colors hover:brightness-110" aria-label="Show previous month">
          <svg className="h-4 w-4 text-white transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="px-2 text-sm text-center font-medium">{monthLabel}</div>
        <button type="button" onClick={goToNextMonth} className="cursor-pointer rounded-md bg-indigo-600 px-1 py-1 text-white transition-colors hover:brightness-110" aria-label="Show next month">
          <svg className="h-4 w-4 text-white transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-xs text-neutral-600">
        {WEEK_DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="space-y-2">
        {weeks.map((row, rowIndex) => (
          <div key={`${monthLabel}-${rowIndex}`} className="grid grid-cols-7 gap-1">
            {row.map((cell) => {
              const isSelected = isSameDay(cell.date, selectedDate);
              const isMuted = !cell.isCurrentMonth;

              return (
                <button
                  key={cell.date.toISOString()}
                  type="button"
                  onClick={() => handleDateSelect(cell)}
                  className={`flex aspect-square items-center justify-center rounded-lg text-xs text-slate-500 transition-all cursor-pointer sm:rounded-md ${
                    isSelected
                      ? "bg-indigo-600 text-white drop-shadow-lg drop-shadow-indigo-900/20"
                      : isMuted
                        ? "bg-white/10 text-slate-50 hover:bg-slate-100"
                        : "bg-white/15 text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100"
                  }`}
                >
                  {cell.dayNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InteractiveCalendar() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 20);
  const futureDateLabel = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] py-14 sm:py-20">
      
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid container px-4 sm:px-6 lg:px-8 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: Interactive Calendar */}
        <div className="order-2 lg:order-1 relative xl:pb-12">
          <div className="relative rounded-xl bg-white drop-shadow-xl p-4">
            <div className="relative z-10 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 sm:h-3 sm:w-3" />
                  <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-red-400 sm:h-3 sm:w-3" />
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-600 sm:h-3 sm:w-3" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600 sm:h-2 sm:w-2" />
                <span className="text-[10px] font-medium text-neutral-600 sm:text-xs">LIVE</span>
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4">
              <div className="mb-3 flex items-center justify-between text-white">
                <div className="text-sm font-medium tracking-widest text-white">LIVE SCHEDULE</div>
              </div>

              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <CalendarMonthPanel />

                <div className="space-y-3 sm:space-y-4 hidden sm:block">
                  <div className="relative rounded-xl bg-white/15 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-white">Automation</div>
                      <span className="rounded-full bg-white text-emerald-700 px-2 py-0.5 text-xs font-medium">Active</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                        <span>Instant confirmation</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-600" />
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                        <span>Reminder sequence</span>
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                        <span>Meeting routing</span>
                        <span className="h-2 w-2 rounded-full bg-sky-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-float mt-4 rounded-xl bg-white hidden lg:block drop-shadow-xl p-4 absolute -bottom-0 right-10 w-64 lg:-bottom-0 lg:-right-5">
              <div className="mb-3 text-sm font-medium text-neutral-900">Upcoming booking</div>
              <div className="space-y-2">
                <div className="rounded-xl pb-1">
                  <div className="text-xs font-medium text-neutral-900">Consultation Call</div>
                  <div className="text-xs text-neutral-600">with Julia Walker</div>
                </div>

                <div className="space-y-2 text-xs text-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-600">Date</span>
                      <span className="font-semibold text-neutral-900">{futureDateLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-600">Time</span>
                    <span className="font-semibold text-neutral-900">10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-600">Status</span>
                    <span className="rounded-full text-emerald-700 px-2 py-0.5 text-xs font-semibold">Confirmed</span>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 relative space-y-3">
          <Heading
            badge="Real-Time Scheduling"
            title="Smart Scheduling,"
            highlightText="Maximum Efficiency"
            description="Turn this section into a premium live experience instead of a flat illustration. Show a real calendar, active time slots, automation status, and booking flow so visitors instantly understand how powerful your platform feels."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            {FEATURES.map((feature) => (
              <CheckListItem key={feature} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}