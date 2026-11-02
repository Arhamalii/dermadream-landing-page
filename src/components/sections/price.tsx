import { CroppedPhoto } from "@/components/cropped-photo";
import { RichText } from "@/components/rich-text";
import { priceCopy, priceHeading } from "@/data/content";

export function Price() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <h2 className="mx-auto max-w-[980px] text-center font-display text-[26px] leading-8 font-semibold tracking-[-1px] text-[#1e2939] lg:text-[40px] lg:leading-[49px]">
          <RichText segments={priceHeading} />
        </h2>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[550px_minmax(0,1fr)] lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <CroppedPhoto name="priceWoman" alt="Woman smiling after using JawGlow" className="h-[320px] sm:h-[440px]" />
          </div>
          <div className="space-y-8 font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
            {priceCopy.map((line, index) => (
              <p key={line} className={index === 2 ? "font-bold text-[#1e2939]" : undefined}>
                {line}
              </p>
            ))}
            <p className="font-bold text-[#ff4e94]">Save thousands per year with the #1 world-class jawline snatcher.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
