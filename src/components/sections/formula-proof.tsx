import { ReviewCard } from "@/components/review-card";
import { RichText } from "@/components/rich-text";
import { formulaHeading, formulaReviews } from "@/data/content";

export function FormulaProof() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 pb-16 lg:px-[100px]">
        <div className="mx-auto h-px max-w-[1240px] bg-[#e2e8f0]" />
        <h2 className="mx-auto mt-10 max-w-[920px] text-center font-display text-[24px] leading-8 font-bold tracking-[-0.4px] text-[#1e2939] lg:text-[32px] lg:leading-10">
          <RichText segments={formulaHeading} />
        </h2>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {formulaReviews.map((review) => (
            <ReviewCard key={review.name} review={review} direction="horizontal" tone="aqua" />
          ))}
        </div>
      </div>
    </section>
  );
}
