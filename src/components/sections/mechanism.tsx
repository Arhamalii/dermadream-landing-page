import { CroppedPhoto } from "@/components/cropped-photo";
import { BenefitCheck } from "@/components/icons";
import { RichText } from "@/components/rich-text";
import { speedHeading, speedPoints, steps } from "@/data/content";

function Hourglass() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M7 3h10M7 21h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 3c0 4.2 2.2 6.2 4 8-1.8 1.8-4 3.8-4 8M16 3c0 4.2-2.2 6.2-4 8 1.8 1.8 4 3.8 4 8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Mechanism() {
  return (
    <section className="bg-gradient-to-b from-[#b8f6ff] to-white to-[55%]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-16 lg:px-[100px] lg:py-16">
        <h2 className="font-display text-[28px] leading-9 font-semibold tracking-[-1px] text-[#1e2939] lg:col-start-1 lg:row-start-1 lg:text-[36px] lg:leading-[44px]">
          <RichText segments={speedHeading} />
        </h2>
        <div className="overflow-hidden rounded-2xl lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="relative h-[180px] sm:h-[227px]">
            <CroppedPhoto name="mechanismBefore" alt="Before the K-Snatch routine" className="absolute inset-0" />
            <span className="absolute top-3 left-3 rounded-lg bg-[#fff600] px-2 py-1 text-[12px] font-semibold text-[#24354c]">Before</span>
          </div>
          <div className="relative h-[180px] sm:h-[227px]">
            <CroppedPhoto name="mechanismAfter" alt="After the K-Snatch routine" className="absolute inset-0" />
            <span className="absolute top-3 left-3 rounded-lg bg-[#fff600] px-2 py-1 text-[12px] font-semibold text-[#24354c]">AFTER</span>
          </div>
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          <div className="space-y-8 font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
            <p>JawGlow works exceptionally well because of the special K-Snatch Korean Complex.</p>
            <p>This technology is backed up by tens of thousands of hours of research. And is proven to be #1 natural solution to dreaded jowls.</p>
          </div>
          <ul className="mt-8 space-y-6">
            {speedPoints.map((point) => (
              <li key={point} className="flex items-center gap-4 font-display text-[18px] leading-[22px] font-bold text-[#24354c]">
                <BenefitCheck />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pb-16 lg:px-0">
        <div className="px-4 py-10 lg:px-0 lg:py-16">
          <h2 className="mx-auto max-w-[920px] text-center font-display text-[28px] leading-9 font-bold tracking-[-0.6px] text-[#24354c] lg:text-[40px] lg:leading-[50px]">
            Here’s How The <span className="text-[#ff4e94]">K-Snatch Complex</span> Does
            <br className="hidden lg:block" />
            All The Hard Work For You To <span className="text-[#ff4e94]">Fix The Jowls</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[1100px] text-center text-[16px] leading-6 text-[#6a7282] lg:text-[18px] lg:leading-7 lg:whitespace-nowrap">
            The K-Snatch Complex is a Korean based technology, designed to drain the fluid; lift and tighten the skin.
          </p>
          <p className="mt-2 text-center text-[16px] leading-6 text-[#6a7282] lg:text-[18px]">
            It works in three simple steps:
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="flex h-full flex-col rounded-[20px] border border-[#FF699F80] bg-[#fff1f6] p-3 pb-8">
                <div className="overflow-hidden rounded-2xl">
                  <CroppedPhoto name={step.image} alt="" className="h-[210px]" />
                </div>
                <div className="flex flex-1 flex-col px-4 pt-5 sm:px-5">
                  <p className="inline-flex w-fit rounded-lg bg-[#ff4e94] px-3 py-1.5 text-[14px] leading-5 font-bold text-white">
                    {step.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-6 text-[#6a7282] lg:text-[16px]">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-[22px] border border-[#FF699F80] bg-[#fff1f6] px-6 pb-7 lg:flex lg:items-center lg:gap-6 lg:px-8 lg:py-4">
            <div className="mx-auto h-[148px] w-[156px] overflow-hidden lg:hidden">
              <div className="h-[340px] w-full -translate-y-[178px]">
                <CroppedPhoto name="fiveMinuteTube" alt="JawGlow tube" className="h-full w-full" />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-5">
              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#ff4e94] shadow-sm lg:grid">
                <Hourglass />
              </span>
              <p className="text-center font-sans text-[28px] leading-[36px] font-medium tracking-[-0.5px] text-[#1E2939] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] lg:text-left">
                So just 5 minutes a day reduces the dreaded jowls
                <br className="hidden lg:block" /> without needles, toxins or getting under a knife.
              </p>
            </div>
            <div className="relative hidden h-[108px] w-[300px] shrink-0 lg:block">
              <div className="absolute top-1/2 left-[70%] h-[270px] w-[112px] -translate-x-1/2 -translate-y-1/2 rotate-90">
                <CroppedPhoto name="fiveMinuteTube" alt="JawGlow tube" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
