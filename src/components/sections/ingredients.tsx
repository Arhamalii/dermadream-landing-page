import { CroppedPhoto } from "@/components/cropped-photo";
import { RichText, type TextSegment } from "@/components/rich-text";
import { ingredients } from "@/data/content";

function CopyBlock({ value }: { value: string | TextSegment[] }) {
  if (typeof value === "string") return <p>{value}</p>;
  return (
    <p>
      <RichText segments={value} boldClass="font-bold text-[#24354c]" />
    </p>
  );
}

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-[#ffeff7]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <h2 className="text-center font-display text-[28px] leading-[36px] font-bold tracking-[-1px] text-[#24354c] lg:text-[40px] lg:leading-[48px]">
          The <span className="text-[#ff4e94]">Snatch5 Korean</span> Complex:
        </h2>
        <div className="mt-10 grid gap-4 lg:mt-16">
          {ingredients.map((item) => (
            <article
              key={item.title}
              className={`grid items-center gap-8 rounded-2xl border border-[#FF699F80] bg-white p-4 lg:grid-cols-[minmax(0,524px)_minmax(0,580px)] lg:gap-16 lg:p-2 ${item.reverse ? "lg:[&>*:first-child]:order-2 lg:pl-2 lg:pr-16" : "lg:pr-2 lg:pl-16"}`}
            >
              <div className="order-2 px-4 py-6 lg:order-none lg:px-0 lg:py-10">
                <p className="text-[12px] leading-4 font-bold tracking-[2.5px] text-[#ff4e94] uppercase">{item.kicker}</p>
                <h3 className="mt-3 font-display text-[28px] leading-[34px] font-bold tracking-[-1px] text-[#1e2939]">{item.title}</h3>
                <p className="mt-3 inline-flex rounded-md bg-[#ff4e94] px-3 py-1.5 text-[16px] leading-5 font-semibold text-white">
                  {item.pill}
                </p>
                <div className="mt-6 h-px w-16 bg-[#24354c] opacity-[0.2]" />
                <div className="mt-8 space-y-8 font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
                  {item.paragraphs.map((paragraph, index) => (
                    <CopyBlock key={index} value={paragraph} />
                  ))}
                </div>
              </div>
              <div className="order-1 overflow-hidden rounded-xl lg:order-none">
                <CroppedPhoto name={item.image} alt={item.title} className="h-[280px] sm:h-[360px] lg:h-[450px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
