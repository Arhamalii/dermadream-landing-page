import { CroppedPhoto } from "@/components/cropped-photo";

export function Science() {
  return (
    <section id="science" className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-16 lg:px-[100px] lg:py-16">
      <div className="overflow-hidden rounded-2xl">
        <CroppedPhoto name="scienceJawline" alt="Close view of a smoother jawline" className="h-[320px] sm:h-[450px]" />
      </div>
      <div>
        <h2 className="font-display text-[28px] leading-[36px] font-bold tracking-[-1px] text-[#24354c] lg:text-[40px] lg:leading-[48px]">
          Discover The Science Behind
          <br />
          <span className="text-[#ff4e94]">The Noticeable Effects</span>
        </h2>
        <div className="mt-8 space-y-5 text-[16px] leading-6 text-[#5c6570] lg:text-[18px] lg:leading-7">
          <p>
            MyDermaDream has brought the revolutionary{" "}
            <strong className="font-bold text-[#24354c]">Korean skincare technology</strong> to your jawline.
          </p>
          <p>
            Each ingredient is backed by <strong className="font-bold text-[#24354c]">scientific studies</strong> conducted
            by leading <strong className="font-bold text-[#24354c]">Korean & Western experts!</strong>
          </p>
          <p>
            So when you’re using JawGlow, you’re using{" "}
            <strong className="font-bold text-[#24354c]">Korean skin care secrets</strong> - that are{" "}
            <strong className="font-bold text-[#24354c]">proven by tens of thousands of hours of research!</strong>
          </p>
        </div>
        <a href="#ingredients" className="mt-8 inline-flex items-center gap-3 text-[18px] leading-[22px] font-bold text-[#ff4e94]">
          Discover the Science Below
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
