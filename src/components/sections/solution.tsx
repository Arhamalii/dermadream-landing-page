import { CroppedPhoto } from "@/components/cropped-photo";
import { PinkCrossBadge } from "@/components/icons";
import { savings } from "@/data/content";

export function Solution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <h2 className="mx-auto text-center font-display text-[26px] leading-[34px] font-bold tracking-[-0.5px] text-[#24354c] lg:text-[36px] lg:leading-[46px]">
          <span className="block">
            Drain The Fluid Build Up & Infuse Your <span className="text-[#ff4e94]">Skin</span> With{" "}
            <span className="text-[#ff4e94]">Korean</span>
          </span>
          <span className="block">
            <span className="text-[#ff4e94]">Ingredients</span> That <span className="text-[#ff4e94]">Firm</span>,{" "}
            <span className="text-[#ff4e94]">Lift</span> And <span className="text-[#ff4e94]">Snatch Your Skin</span>
          </span>
        </h2>
        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-[26px] leading-8 font-bold tracking-[-0.4px] text-[#24354c] lg:text-[32px] lg:leading-[40px]">
              First Ever Natural Solution
              <br />
              To <span className="text-[#ff4e94]">Fix The Jowls in 28 Days</span>
            </h3>
            <div className="mt-6 space-y-6 text-[16px] leading-6 text-[#6a7282] lg:text-[18px] lg:leading-7">
              <p>
                JawGlow ™ is the most powerful, yet non-invasive solution to achieve professional grade results at the
                fraction of a cost
              </p>
              <p className="font-bold text-[#24354c]">With JawGlow you save:</p>
              <ul className="space-y-4">
                {savings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <PinkCrossBadge className="mt-0.5 h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-[20px] lg:order-2">
            <CroppedPhoto name="solutionWoman" alt="Woman applying JawGlow along her jawline" className="h-[320px] sm:h-[460px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
