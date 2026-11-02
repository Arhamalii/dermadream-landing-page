import { CroppedPhoto } from "@/components/cropped-photo";
import type { PhotoName } from "@/data/photos";

export function PhotoBadge({ label }: { label: string }) {
  return (
    <span className="absolute top-2 left-2 z-10 rounded-lg bg-[#fff600] px-2 py-1 text-[12px] leading-[14px] font-semibold text-[#24354c]">
      {label}
    </span>
  );
}

export function PhotoPair({
  before,
  after,
  direction = "vertical",
  className = "",
}: {
  before: PhotoName;
  after: PhotoName;
  direction?: "vertical" | "horizontal";
  className?: string;
}) {
  const frame = direction === "vertical" ? "grid h-[300px] grid-rows-2" : "grid h-[300px] grid-cols-2";
  return (
    <div className={`${frame} overflow-hidden ${className}`}>
      <div className="relative h-full">
        <CroppedPhoto name={before} alt="Before using JawGlow" className="absolute inset-0" />
        <PhotoBadge label="Before" />
      </div>
      <div className="relative h-full">
        <CroppedPhoto name={after} alt="After using JawGlow" className="absolute inset-0" />
        <PhotoBadge label="AFTER" />
      </div>
    </div>
  );
}
