import {
  Effects,
  FaceMap,
  Faq,
  FormulaProof,
  Gift,
  Guarantee,
  Hero,
  Ingredients,
  Intro,
  LoveReviews,
  Mechanism,
  Offer,
  PressBar,
  Price,
  Reflection,
  Rituals,
  SaleBanner,
  Science,
  Solution,
  TrustRow,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <SaleBanner />
      <Hero />
      <PressBar />
      <Intro />
      <TrustRow />
      <FaceMap />
      <Solution />
      <Effects />
      <Science />
      <Ingredients />
      <LoveReviews />
      <Rituals />
      <Mechanism />
      <Reflection />
      <Gift />
      <Price />
      <Offer />
      <Guarantee />
      <FormulaProof />
      <Faq />
    </main>
  );
}
