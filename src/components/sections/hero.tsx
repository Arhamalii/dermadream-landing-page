import { CompactCountdown } from "@/components/countdown";
import { CroppedPhoto } from "@/components/cropped-photo";
import { CtaButton } from "@/components/cta-button";
import { GiftIcon, ShieldIcon, TruckIcon } from "@/components/icons";

function HeroDetails() {
  return (
    <>
      <div className="border-l-[3px] border-[#ff006a] bg-[#fff5f9] px-3 py-3 text-center text-[13px] leading-[18px] font-semibold text-[#24354c] lg:px-4 lg:py-4 lg:text-left lg:text-[16px] lg:leading-[19px]">
        <p>Fixes Appearance of Jowls • Reduces Sagging</p>
        <p className="mt-1 lg:mt-2">Smooths out Marionette Lines</p>
      </div>
      <div className="mt-3 lg:mt-4">
        <CtaButton>SNATCH MY JAWLINE</CtaButton>
      </div>
      <div className="mt-3 lg:mt-4">
        <CompactCountdown hours={9} minutes={14} seconds={52} />
      </div>
      <ul className="mt-3 flex flex-col items-center gap-1.5 rounded-lg border border-[#c4eae8] bg-[#eef9f8] px-3 py-2.5 text-[13px] leading-5 font-medium text-[#5c5f65] lg:mt-4 lg:flex-row lg:justify-between lg:px-4 lg:py-3 lg:text-[12px]">
        <li className="flex items-center gap-1.5">
          <ShieldIcon /> 90 Day Guarantee
        </li>
        <li className="hidden h-4 w-px bg-[#c4eae8] lg:block" aria-hidden="true" />
        <li className="flex items-center gap-1.5">
          <GiftIcon /> 2 FREE GIFTS
        </li>
        <li className="hidden h-4 w-px bg-[#c4eae8] lg:block" aria-hidden="true" />
        <li className="flex items-center gap-1.5">
          <TruckIcon /> Free Shipping Over $100
        </li>
      </ul>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#c9f4f8]">
      <CroppedPhoto name="heroBackdrop" alt="" className="absolute inset-0" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-0 px-4 pt-0 pb-8 lg:grid lg:min-h-[685px] lg:grid-cols-[minmax(0,592px)_minmax(0,1fr)] lg:items-center lg:gap-6 lg:px-[100px] lg:py-0">
        <div className="relative z-20 rounded-t-none rounded-b-[20px] lg:rounded-[20px] bg-white/80 px-4 py-4 shadow-[0_10px_30px_rgba(36,53,76,0.06)] lg:bg-white lg:px-12 lg:py-12">
          <h1 className="text-center text-[36px] leading-[40px] font-bold tracking-[-0.8px] text-[#24354c] lg:text-left lg:text-[54px] lg:leading-[54px]">
            <span className="lg:hidden">
              The Korean
              <br />
              Jawline
              <br />
              Snatcher
            </span>
            <span className="hidden lg:inline">The Korean Jawline Snatcher</span>
          </h1>
          <p className="mt-3 text-center text-[17px] leading-[22px] font-semibold text-[#ff006a] lg:mt-6 lg:text-left lg:text-[20px] lg:leading-6">
            <span className="lg:hidden">
              Drains the build up fluid &
              <br />
              snatches your jawline back
            </span>
            <span className="hidden lg:inline">Drains the build up fluid & snatches your jawline back</span>
          </p>
          <div className="mt-6 hidden lg:block">
            <HeroDetails />
          </div>
        </div>
        <div className="relative z-10 -mx-4 h-[313px] overflow-hidden sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[52%] lg:overflow-visible">
          <CroppedPhoto name="heroWoman" alt="Woman showing a defined jawline" className="absolute inset-0" />
          <CroppedPhoto
            name="heroTube"
            alt="JawGlow sculpting cream tube"
            className="absolute top-1/2 left-1 z-10 h-[230px] w-[118px] -translate-y-1/2 sm:left-4 sm:h-[270px] sm:w-[140px] lg:hidden"
          />
        </div>
        <CroppedPhoto
          name="heroTube"
          alt=""
          className="absolute top-[105px] left-[calc(48%-70px)] z-30 hidden h-[470px] w-[250px] lg:block"
        />
        <div className="relative z-20 rounded-[20px] bg-white/80 px-4 py-4 shadow-[0_10px_30px_rgba(36,53,76,0.06)] lg:hidden">
          <HeroDetails />
        </div>
      </div>
    </section>
  );
}
