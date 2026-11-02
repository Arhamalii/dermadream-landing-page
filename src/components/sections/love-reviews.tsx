import { LoveReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/rich-text";
import { loveReviews } from "@/data/content";

export function LoveReviews() {
  return (
    <section className="bg-[#edfeff]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <SectionHeading>Our Customers Who Love Their New Look</SectionHeading>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {loveReviews.map((review) => (
            <LoveReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
