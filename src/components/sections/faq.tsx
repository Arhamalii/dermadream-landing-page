import { CroppedPhoto } from "@/components/cropped-photo";
import { CtaButton } from "@/components/cta-button";
import { FaqList } from "@/components/faq-list";

export function Faq() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-[100px] lg:pt-16 lg:pb-[120px]">
        <h2 className="text-center font-display text-[26px] leading-8 font-semibold tracking-[-1px] text-[#1e2939] lg:text-[40px] lg:leading-[49px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-12">
          <FaqList />
        </div>
        <div className="mx-auto mt-10 flex max-w-[448px] flex-col items-center gap-4">
          <CtaButton>SNATCH MY JAWLINE</CtaButton>
          <CroppedPhoto name="faqCheckoutBadges" alt="Guaranteed safe checkout" className="h-[73px] w-[247px]" />
        </div>
      </div>
    </section>
  );
}
