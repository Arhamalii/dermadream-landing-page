import { ReviewCard } from "@/components/review-card";
import { reflectionReviews } from "@/data/content";

export function Reflection() {
  return (
    <section className="bg-[#ffeff7]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-[100px] lg:py-16">
        <h2 className="text-center font-display text-[26px] leading-8 font-bold tracking-[-1px] text-[#1e2939] lg:text-[40px] lg:leading-[49px]">
          Fall In Love With Your <span className="text-[#ff4e94] italic">New Reflection!</span>
        </h2>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {reflectionReviews.map((review) => (
            <ReviewCard key={review.name} review={review} direction="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
}
