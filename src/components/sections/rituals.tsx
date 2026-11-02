import { CroppedPhoto } from "@/components/cropped-photo";
import { CtaButton } from "@/components/cta-button";
import { timeline } from "@/data/content";

export function Rituals() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[200px] lg:py-16">
      <h2 className="text-center font-display text-[26px] leading-8 font-bold tracking-[-0.5px] text-[#24354c] lg:text-[40px] lg:leading-[50px]">
        JawGlow™ Works Best <span className="text-[#ff4e94]">During</span>
        <br />
        <span className="text-[#ff4e94]">Morning & Evening</span> Beauty Rituals
      </h2>
      <div className="mx-auto mt-10 grid max-w-[1040px] gap-6 lg:grid-cols-2">
        <article className="flex flex-col items-center rounded-[20px] border border-[#FF699F80] bg-[#fff6c8] px-8 py-12 text-center lg:px-16 lg:py-14">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#f3edd4]">
            <Sun />
          </span>
          <h3 className="mt-8 text-[15px] leading-6 font-bold tracking-[1.4px] text-[#24354c]">IN THE MORNING</h3>
          <p className="mt-4 max-w-[360px] text-[16px] leading-7 text-[#4a5568]">
            Some women love using it in the morning to sweep out the fluid that pooled overnight, so their jawline looks sharp before they have even had coffee.
          </p>
        </article>
        <article className="flex flex-col items-center rounded-[20px] border border-[#FF699F80] bg-[#21798c] px-8 py-12 text-center text-white lg:px-16 lg:py-14">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15">
            <Moon />
          </span>
          <h3 className="mt-8 text-[15px] leading-6 font-bold tracking-[1.4px]">IN THE EVENING</h3>
          <p className="mt-4 max-w-[360px] text-[16px] leading-7 text-white/95">
            Others love using it at night so the Korean ingredients can work while they sleep. Plus the smooth glide makes it the perfect little self-care ritual before bed.
          </p>
        </article>
      </div>

      <h2 className="mt-16 text-center font-display text-[26px] leading-8 font-bold tracking-[-0.5px] text-[#24354c] lg:text-[40px] lg:leading-[50px]">
        How Soon Can You See <span className="text-[#ff4e94] italic">Results?</span>
      </h2>

      <div className="mx-auto mt-10 hidden max-w-[1040px] overflow-hidden rounded-2xl border border-[#FF699F80] lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[12px] leading-4 font-bold tracking-[1.2px] text-[#24354c]">
              <th className="w-[220px] border-r border-[#e5e7eb] px-6 py-3 text-center font-bold">TIMEFRAME</th>
              <th className="w-[220px] border-r border-[#e5e7eb] px-6 py-3 text-left font-bold">ACTIONS</th>
              <th className="bg-[#ffeff7] px-10 py-3 text-left font-bold">RESULTS</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((row) => (
              <tr key={row.time} className="border-t border-[#e5e7eb]">
                <td className="border-r border-[#e5e7eb] px-6 py-8 text-center align-middle text-[18px] leading-[26px] font-bold text-[#24354c]">
                  {row.time}
                </td>
                <td className="border-r border-[#e5e7eb] px-4 py-4 align-middle">
                  <CroppedPhoto name={row.image} alt="" className="mx-auto h-[120px] w-[187px] rounded-xl" />
                </td>
                <td className="bg-[#ffeff7] px-10 py-8 align-middle text-[17px] leading-[26px] text-[#24354c]">
                  {row.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto mt-10 max-w-[1040px] space-y-4 lg:hidden">
        {timeline.map((row) => (
          <article key={row.time} className="overflow-hidden rounded-[22px] border border-[#FF699F80] bg-[#fff1f6] px-3 pt-3 pb-4">
            <p className="rounded-xl bg-[#ff3b8d] py-2.5 text-center text-[16px] font-bold text-white">{row.time}</p>
            <CroppedPhoto name={row.image} alt="" className="mt-3 h-[210px] rounded-2xl" />
            <p className="px-2 pt-4 text-center text-[16px] leading-6 text-[#3d4d63]">{row.result}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-[840px]">
        <CtaButton>Try 90 Days Risk Free</CtaButton>
      </div>
    </section>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6 text-[#5c6570]" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.6" />
      {Array.from({ length: 8 }, (_, index) => (
        <line key={index} x1="14" y1="3" x2="14" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${index * 45} 14 14)`} />
      ))}
    </svg>
  );
}

function Moon() {
  return (
    <svg viewBox="0 0 28 28" className="h-6 w-6 text-white" fill="none" aria-hidden="true">
      <path d="M17.2 4.8a8.2 8.2 0 1 0 6 12.2A7.4 7.4 0 0 1 17.2 4.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
