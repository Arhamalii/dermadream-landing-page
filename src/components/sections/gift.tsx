import { CroppedPhoto } from "@/components/cropped-photo";
import { RichText } from "@/components/rich-text";
import { gummyPoints } from "@/data/content";

function GiftBell({ className = "h-10 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 32" className={`shrink-0 text-white ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 1.4c4.8 3.6 8.2 8.2 8.2 15.2 0 2.2.8 3.8 2.2 4.8.6.4.8 1 .5 1.6-.3.5-.8.8-1.4.8H4.5c-.6 0-1.1-.3-1.4-.8-.3-.6-.1-1.2.5-1.6 1.4-1 2.2-2.6 2.2-4.8C5.8 9.6 9.2 5 14 1.4Z"
      />
      <path fill="currentColor" d="M11.2 25.2h5.6a2.8 2.8 0 0 1-5.6 0Z" />
    </svg>
  );
}

export function Gift() {
  return (
    <section className="bg-gradient-to-br from-[#f75d83] to-[#dc6582] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <div className="text-center">
          <p className="flex items-center justify-center gap-4 text-[12px] leading-4 font-semibold tracking-[2.4px] uppercase">
            <span className="h-px w-10 bg-white/80" />
            Bonus Gift — Today Only
            <span className="h-px w-10 bg-white/80" />
          </p>
          <p className="mt-3 flex items-center justify-center gap-3 text-[36px] leading-none font-extrabold tracking-[-1px] sm:gap-4 sm:text-[56px] lg:gap-5 lg:text-[80px] lg:tracking-[-2px]">
            <GiftBell className="h-8 w-6 sm:h-9 sm:w-7 lg:h-12 lg:w-9" />
            FREE GIFT
            <GiftBell className="h-8 w-6 sm:h-9 sm:w-7 lg:h-12 lg:w-9" />
          </p>
          <p className="mt-3 text-[16px] leading-6 font-normal tracking-[0.4px] lg:text-[18px]">
            Worth $39 — Included At No Cost
          </p>
        </div>
        <div className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-[30px] leading-[38px] font-bold">Strawberry Collagen Peptide Gummies</h2>
            <div className="mt-4 h-px w-10 bg-white" />
            <p className="mt-6 max-w-[520px] text-[17px] leading-7 font-normal">
              Fuel Your Beauty From The Inside Out With These Collagen Boosting Gummies!
            </p>
            <ul className="mt-6 space-y-3">
              {gummyPoints.map((point) => (
                <li key={point[0]?.text} className="flex gap-3 text-[17px] leading-[26px] font-normal">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center text-white">
                    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                      <path d="M3 8.2 6.2 11.4 13 4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    <RichText segments={point} boldClass="font-bold" />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 lg:overflow-hidden lg:rounded-2xl lg:bg-[#ffe7ed] lg:text-[#24354c]">
              <div className="lg:hidden">
                <div className="mb-3 flex items-center justify-between px-1 text-[13px] font-semibold text-white">
                  <span className="tracking-[0.8px]">RETAIL VALUE</span>
                  <span className="line-through">$39.00</span>
                  <span className="text-[16px] font-extrabold">FREE</span>
                </div>
                <div className="rounded-2xl bg-[#ffe7ed] px-4 py-5 text-center text-[#111827]">
                  <p className="flex items-center justify-center gap-3 text-[22px] leading-7 font-extrabold">
                    <span aria-hidden="true">✨</span>
                    <span>
                      Yours FREE Only
                      <br />
                      Today
                    </span>
                    <span aria-hidden="true">✨</span>
                  </p>
                  <p className="mt-2 text-[14px] leading-5 text-[#7b8794]">
                    With the purchase of best value bundle while supplies last!
                  </p>
                </div>
              </div>
              <div className="hidden items-center gap-5 px-6 py-5 lg:flex">
                <div className="grid h-20 w-[115px] place-items-center rounded-xl bg-[#e45a91] text-center text-white">
                  <span>
                    <span className="block text-[12px] line-through">$39.00</span>
                    <span className="block text-[30px] leading-none font-extrabold">FREE</span>
                  </span>
                </div>
                <div>
                  <p className="text-[18px] leading-6 font-bold">Yours FREE Only Today ✨</p>
                  <p className="mt-1 text-[14px] leading-[23px] text-[#758293]">
                    With the purchase of best value bundle while supplies last!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CroppedPhoto name="giftGummies" alt="Strawberry collagen peptide gummies" className="order-1 h-[320px] rounded-2xl sm:h-[420px] lg:order-2 lg:h-[519px]" />
        </div>
      </div>
    </section>
  );
}
