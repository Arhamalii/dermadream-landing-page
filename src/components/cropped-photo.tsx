import { photos, type PhotoName } from "@/data/photos";

type Frame = {
  src: string;
  sx: number;
  sy: number;
  tx: number;
  ty: number;
};

export function CroppedPhoto({
  name,
  alt,
  className = "",
}: {
  name: PhotoName;
  alt: string;
  className?: string;
}) {
  const frame: Frame = photos[name];
  const scaleX = Math.abs(frame.sx) || 1;
  const scaleY = Math.abs(frame.sy) || 1;
  const originX = Math.min(frame.tx, frame.tx + frame.sx);
  const originY = Math.min(frame.ty, frame.ty + frame.sy);
  const flip = `${frame.sx < 0 ? "scaleX(-1)" : ""} ${frame.sy < 0 ? "scaleY(-1)" : ""}`.trim();
  const position = className.split(/\s+/).includes("absolute") ? "absolute" : "relative";

  return (
    <div className={`overflow-hidden ${className}`} style={{ position }}>
      <div className="absolute inset-0" style={flip ? { transform: flip } : undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frame.src}
          alt={alt}
          className="absolute max-w-none"
          style={{
            width: `${(1 / scaleX) * 100}%`,
            height: `${(1 / scaleY) * 100}%`,
            left: `${(-originX / scaleX) * 100}%`,
            top: `${(-originY / scaleY) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
