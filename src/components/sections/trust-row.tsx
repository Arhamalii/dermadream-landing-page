import { CroppedPhoto } from "@/components/cropped-photo";

export function TrustRow() {
  const items = [
    ["trustClinical", "CLINICALLY PROVEN JAWLINE SCULPTING"],
    ["trustGuarantee", "90-DAY 100% SATISFACTION GUARANTEE"],
    ["trustDermatologist", "DERMATOLOGIST RECOMMENDED"],
  ] as const;
  return (
    <section className="bg-[#edfeff]">
      <ul className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 md:grid-cols-3 lg:px-[200px] lg:py-12">
        {items.map(([photo, label]) => (
          <li key={photo} className="flex items-center gap-4 md:flex-col md:text-center">
            <CroppedPhoto name={photo} alt="" className="h-[80px] w-[80px] shrink-0 rounded-full md:h-[110px] md:w-[110px]" />
            <p className="max-w-[220px] text-[15px] leading-5 font-semibold text-[#24354c]">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
