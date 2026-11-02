"use client";

import { useEffect, useState } from "react";

function parts(total: number) {
  const safe = Math.max(0, total);
  return {
    hours: String(Math.floor(safe / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((safe % 3600) / 60)).padStart(2, "0"),
    seconds: String(safe % 60).padStart(2, "0"),
  };
}

export function CompactCountdown({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const [left, setLeft] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = parts(left);

  return (
    <div className="flex flex-nowrap items-center justify-center gap-1 text-[11px] lg:justify-start lg:gap-4 lg:text-[14px]">
      <p className="font-semibold whitespace-nowrap text-[#6a7282]">⏰ 50% Labor Day Sale Ends:</p>
      <p className="flex items-center gap-0.5 lg:gap-1">
        {[time.hours, time.minutes, time.seconds].map((unit, index) => (
          <span key={index} className="flex items-center gap-0.5 lg:gap-1">
            {index > 0 ? <span className="text-[#364153]">:</span> : null}
            <span className="inline-flex h-5 min-w-7 items-center justify-center rounded bg-[#2dc8c2] px-1 font-medium text-white lg:h-[22px] lg:min-w-[34px] lg:px-1.5">
              {unit}
            </span>
          </span>
        ))}
      </p>
    </div>
  );
}

export function OfferCountdown({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const [left, setLeft] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = parts(left);
  const units = [
    [time.hours, "Hours"],
    [time.minutes, "Minutes"],
    [time.seconds, "Seconds"],
  ] as const;

  return (
    <div>
      <p className="mb-2 text-center text-[13px] font-bold tracking-[1.4px] text-[#ff006a] uppercase">
        Sale Ends Soon
      </p>
      <div className="flex justify-center gap-2">
        {units.map(([value, label]) => (
          <div
            key={label}
            className="flex h-16 w-[72px] flex-col items-center justify-center rounded-xl bg-[#f5f7fa]"
          >
            <span className="font-sans text-[28px] leading-none font-bold text-[#24354c]">{value}</span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.5px] text-[#9ca3af] uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
