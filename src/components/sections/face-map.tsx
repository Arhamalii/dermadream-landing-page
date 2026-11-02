import { BenefitCheck } from "@/components/icons";
import { faceChips } from "@/data/content";

export function FaceMap() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[200px] lg:py-16">
        <h2 className="mx-auto max-w-[1040px] text-center font-display text-[26px] leading-8 font-bold tracking-[-1px] text-[#24354c] lg:text-[40px] lg:leading-[49px]">
          It’s A <span className="text-[#ff4e94]">Korean “Face Lift Alternative”</span>
          <br />
          That Works At Home
        </h2>
        <div className="relative mx-auto mt-8 max-w-[1040px] lg:mt-12">
          <div className="overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/face-map.png"
              alt="Split view of a jawline before and after"
              className="block h-auto w-full"
            />
          </div>
          {faceChips.map((chip) => (
            <span
              key={chip.label}
              className="absolute inline-flex items-center gap-1 rounded-full bg-white py-1 pr-2 pl-1 text-[10px] font-semibold text-[#24354c] shadow-[0_6px_16px_rgba(36,53,76,0.12)] sm:gap-2 sm:py-1.5 sm:pr-4 sm:pl-1.5 sm:text-[13px] lg:py-2 lg:text-[15px]"
              style={{
                left: chip.left,
                top: chip.top,
                transform: chip.center ? "translateX(-50%)" : undefined,
              }}
            >
              <BenefitCheck className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
