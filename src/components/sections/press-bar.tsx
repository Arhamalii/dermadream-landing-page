import { CroppedPhoto } from "@/components/cropped-photo";
import { logos } from "@/data/content";

export function PressBar() {
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden bg-[#48d5d9] py-8" aria-label="As seen on">
      <p className="text-center font-display text-[16px] leading-[19px] font-semibold tracking-wide text-white">
        AS SEEN ON
      </p>
      <div className="press-mask mt-6">
        <div className="press-track flex w-max items-center gap-8 md:gap-14">
          {row.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="h-8 shrink-0 brightness-0 invert" style={{ width: logo.width }}>
              <CroppedPhoto name={logo.name} alt="" className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
