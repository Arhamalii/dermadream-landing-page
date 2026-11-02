import { CroppedPhoto } from "@/components/cropped-photo";
import { CtaButton } from "@/components/cta-button";
import { BenefitCheck } from "@/components/icons";
import { RichParagraph } from "@/components/rich-text";
import { benefits, introDisclaimer } from "@/data/content";

const weeks = [
  ["introWeek1", "WEEK 1"],
  ["introWeek3", "WEEK 3"],
  ["introWeek6", "WEEK 6"],
] as const;

export function Intro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="font-display text-[26px] leading-8 font-bold tracking-[-0.5px] text-[#24354c] lg:text-[40px] lg:leading-[50px]">
            The First Jawline Snatcher <span className="text-[#ff4e94]">That Reduces</span>
            <br />
            <span className="text-[#ff4e94]">The Jowl Appearance in 28 Days Naturally</span>
          </h2>
          <p className="mt-6 font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
            So You Can Stop Looking Like Your Mother Without Invasive Surgeries, Injections or Expensive Price Tags
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            {weeks.map(([photo, label]) => (
              <div key={label} className="relative h-[160px] sm:h-[220px]">
                <CroppedPhoto name={photo} alt={`${label} JawGlow result`} className="absolute inset-0" />
                <span className="absolute top-3 left-3 rounded-lg bg-[#fff600] px-2 py-1 text-[12px] font-semibold text-[#24354c]">
                  <span className="lg:hidden">BEFORE</span>
                  <span className="hidden lg:inline">{label}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-8">
            <p className="font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
              With JawGlow you can fix the jowl appearance, recuse the marionette lines, snatch your jawline in just 5 minutes a day
            </p>
            <ul className="grid gap-2">
              {benefits.map((item) => (
                <li
                  key={item.lead}
                  className="flex min-h-[45px] items-center gap-4 rounded-full bg-[#fffbfc] px-4 py-2 text-[16px] text-[#24354c] lg:text-[18px]"
                >
                  <BenefitCheck />
                  <span>
                    <span className="font-bold">{item.lead}</span>{" "}
                    <span className="font-normal text-[#6a7282]">{item.rest}</span>
                  </span>
                </li>
              ))}
            </ul>
            <RichParagraph
              segments={introDisclaimer}
              className="font-display text-[18px] leading-[22px] font-medium text-[#6a7282]"
            />
            <CtaButton className="lg:max-w-none">Try 90 Days Risk Free</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
