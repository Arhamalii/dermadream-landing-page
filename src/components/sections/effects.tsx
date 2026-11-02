import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/rich-text";
import { effectReviews, effectsHeading } from "@/data/content";

export function Effects() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <SectionHeading segments={effectsHeading} />
        <p className="mt-6 text-center font-display text-[18px] leading-[22px] font-medium text-[#6a7282]">
          See What Our Verified Customers Are Saying
        </p>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {effectReviews.map((review) => (
            <ReviewCard key={review.name} review={review} direction="vertical" tone="aqua" />
          ))}
        </div>
      </div>
    </section>
  );
}
