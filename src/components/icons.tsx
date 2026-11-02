function CheckMark({ className = "h-[42%] w-[42%]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 10" className={className} fill="none" aria-hidden="true">
      <path
        d="M1.2 5.1 4.3 8.2 10.8 1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BenefitCheck({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#d1fae5] text-[#16a34a] ${className}`}
      aria-hidden="true"
    >
      <CheckMark className="h-[46%] w-[46%]" />
    </span>
  );
}

export function PinkCrossBadge({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#ff4e94] text-white ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" className="h-[42%] w-[42%]" fill="none" aria-hidden="true">
        <path d="M2 2 10 10M10 2 2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Stars({ value, id }: { value: number; id: string }) {
  const safeId = id.replace(/[^a-z0-9]+/gi, "");
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const amount = Math.min(1, Math.max(0, value - index));
        const gradientId = `star-${safeId}-${index}`;
        return (
          <svg key={index} viewBox="0 0 15 14" className="h-3.5 w-[15px]" aria-hidden="true">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset={`${amount * 100}%`} stopColor="#ffa42d" />
                <stop offset={`${amount * 100}%`} stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#${gradientId})`}
              d="M7.2.3c.15-.25.55-.25.7 0l1.9 3.2c.08.13.21.22.36.25l3.5.74c.39.08.54.55.28.84l-2.4 2.7a.5.5 0 0 0-.12.4l.36 3.5c.04.39-.36.68-.71.53L7.6 11.2a.5.5 0 0 0-.42 0l-3.3 1.46c-.35.15-.75-.14-.71-.53l.36-3.5a.5.5 0 0 0-.12-.4L1 5.33c-.26-.29-.11-.76.28-.84l3.5-.74a.5.5 0 0 0 .36-.25L7.2.3Z"
            />
          </svg>
        );
      })}
    </span>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#5c5f65]" aria-hidden="true">
      <path
        d="M8 1.4 13 3.2v4.4c0 3.1-2.1 5.2-5 6.6-2.9-1.4-5-3.5-5-6.6V3.2L8 1.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M5.6 8.1 7.2 9.6 10.5 6.4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function GiftIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#5c5f65]" aria-hidden="true">
      <rect x="2.2" y="7" width="11.6" height="6.6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.2 7h11.6M8 7v6.6M8 7c0-2.4-3.4-3.2-3.4-1.2S8 7 8 7Zm0 0c0-2.4 3.4-3.2 3.4-1.2S8 7 8 7Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function TruckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-[#5c5f65]" aria-hidden="true">
      <path d="M1.5 4.5h8.2v6.2H1.5V4.5Zm8.2 1.6h2.6l2.2 2.1v2.5h-4.8V6.1Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="4.4" cy="12" r="1.1" fill="currentColor" />
      <circle cx="11.6" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function WarningIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#f97316]" aria-hidden="true">
      <path d="M10 2.4 18.2 17H1.8L10 2.4Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M10 8v4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="14.6" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function TrustpilotMark() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex h-5 w-5 items-center justify-center bg-[#00b67a]">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
          <path fill="#fff" d="M8 1.2 9.7 6h5l-4 3.1 1.5 4.9L8 11.2 3.8 14l1.5-4.9-4-3.1h5L8 1.2Z" />
        </svg>
      </span>
      <span className="text-[12px] font-bold leading-none text-[#24354c]">Trustpilot</span>
    </span>
  );
}
