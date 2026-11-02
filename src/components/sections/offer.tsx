import { OfferCountdown } from "@/components/countdown";
import { CroppedPhoto } from "@/components/cropped-photo";
import { CtaButton } from "@/components/cta-button";
import { TrustpilotMark, WarningIcon } from "@/components/icons";

export function Offer() {
  return (
    <section id="offer" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <div className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#ff006a] via-[#ff4e94] to-[#e45a91] px-4 py-3.5 text-white sm:gap-4 sm:px-6 lg:rounded-full">
          <span aria-hidden="true">✦</span>
          <p className="text-center text-[13px] leading-5 font-bold tracking-[1.5px] sm:text-[18px] sm:tracking-[2.5px]">
            LABOUR DAY SALE — SAVE UP TO 50% OFF
          </p>
          <span aria-hidden="true">✦</span>
        </div>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="overflow-hidden rounded-2xl">
            <CroppedPhoto name="offerBundle" alt="JawGlow bundle offer" className="h-[320px] sm:h-[440px] lg:h-[520px]" />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-[22px] leading-7 font-bold text-[#24354c]">Limited Time Offer:</p>
            <p className="mt-1 text-[32px] leading-9 font-bold tracking-[-0.9px] text-[#24354c]">Save Up To 50% Off</p>
            <div className="mt-3">
              <OfferCountdown hours={12} minutes={25} seconds={45} />
            </div>
            <p className="mt-3 text-[16px] leading-6 font-bold text-[#3c3c3c]">Choose Your Savings!</p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[15px] leading-6 text-[#6a7282]">
              <span className="font-bold text-[#24354c]">2,118</span>
              reviews on <TrustpilotMark />
            </p>
            <div className="mt-3">
              <CtaButton>Try 90 Days Risk Free</CtaButton>
            </div>
            <p className="mt-3 rounded-lg bg-[#f9fafb] px-4 py-2 text-[12px] leading-4 font-semibold text-[#4a5568]">
              FREE SHIPPING Over $100 <span className="mx-3 text-[#e5e7eb]">|</span> 90 Days Guarantee
            </p>
            <CroppedPhoto name="checkoutBadges" alt="Guaranteed safe checkout" className="mx-auto mt-3 h-[56px] w-[200px]" />
            <p className="mt-3 flex w-full items-start gap-3 rounded-xl border border-[#fed7aa] bg-[#fff7ed] px-4 py-3 text-left text-[13px] leading-4 font-bold text-[#9a3412]">
              <WarningIcon />
              <span>
                Limited stock due to supply chain disruptions!
                <br />
                Order early to avoid disappointment.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
