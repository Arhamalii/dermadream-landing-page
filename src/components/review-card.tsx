import { CroppedPhoto } from "@/components/cropped-photo";
import { Stars } from "@/components/icons";
import { PhotoPair } from "@/components/photo-pair";
import type { formulaReviews, loveReviews, reflectionReviews } from "@/data/content";

function PinIcon() {
  return (
    <svg viewBox="0 0 12 14" className="h-3.5 w-3" aria-hidden="true">
      <path
        d="M6 0.8a4 4 0 0 0-4 4c0 3 4 8.2 4 8.2s4-5.2 4-8.2a4 4 0 0 0-4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="6" cy="4.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

type PairReview = (typeof reflectionReviews)[number] | (typeof formulaReviews)[number];

export function ReviewCard({
  review,
  direction,
  tone = "white",
}: {
  review: PairReview;
  direction: "vertical" | "horizontal";
  tone?: "white" | "aqua";
}) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl p-2 pb-8 ${
        tone === "aqua" ? "border border-[#d7eef3] bg-[#e9f5fc]" : "border border-[#e7eef2] bg-white"
      }`}
    >
      <div className="overflow-hidden rounded-xl border border-[#edf3f6]">
        <PhotoPair before={review.before} after={review.after} direction={direction} />
      </div>
      <div className="flex flex-1 flex-col px-4 pt-6 sm:px-6">
        <div className="flex items-center gap-3">
          <Stars value={review.stars} id={review.name} />
          <span className="text-[12px] font-semibold text-[#758293]">{review.stars} Stars</span>
        </div>
        <p className="mt-6 flex-1 text-[16px] leading-6 tracking-[-0.3px] text-[#24354c]">{review.quote}</p>
        <div className="mt-6 flex items-center justify-between border-t border-[#e6eef2] pt-4 text-[12px]">
          <p className="font-bold tracking-[0.4px] text-[#111827] uppercase">{review.name}</p>
          <p className="flex items-center gap-1.5 text-[#758293]">
            <PinIcon />
            {review.place}
          </p>
        </div>
      </div>
    </article>
  );
}

export function LoveReviewCard({ review }: { review: (typeof loveReviews)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#b3e3e6] bg-white p-2 pb-8">
      <div className="flex items-center gap-4 px-4 pt-6 sm:px-6">
        <CroppedPhoto name={review.avatar} alt="" className="h-14 w-14 shrink-0 rounded-full" />
        <div>
          <p className="text-[14px] leading-[19px] font-bold text-[#24354c]">{review.name}</p>
          <p className="text-[12px] leading-4 font-normal text-[#758293]">{review.meta}</p>
        </div>
      </div>
      <p className="flex-1 px-4 pt-6 text-[16px] leading-[26px] tracking-[-0.5px] text-[#24354c] sm:px-6">{review.quote}</p>
      <p className="mt-6 flex items-center gap-3 px-4 sm:px-6">
        <Stars value={review.stars} id={review.name} />
        <span className="text-[12px] font-semibold text-[#758293]">{review.stars} Stars</span>
      </p>
    </article>
  );
}
