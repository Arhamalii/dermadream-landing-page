import type { ReactNode } from "react";

export function CtaButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#offer"
      className={`inline-flex h-[63px] w-full items-center justify-center rounded-lg border border-white bg-gradient-to-r from-[#ff006a] to-[#ff4e94] text-[18px] font-bold tracking-[0.5px] text-white shadow-[0_8px_24px_rgba(255,0,106,0.28)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff006a] ${className}`}
    >
      {children}
    </a>
  );
}
