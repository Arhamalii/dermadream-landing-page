import { CtaButton } from "@/components/cta-button";
import { RichText } from "@/components/rich-text";
import { guaranteeHeading } from "@/data/content";

export function Guarantee() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-14 lg:py-16">
        <h2 className="mx-auto max-w-[860px] text-center font-display text-[28px] leading-[36px] font-bold tracking-[-0.5px] text-[#24354c] lg:text-[40px] lg:leading-[50px]">
          <RichText segments={guaranteeHeading} />
        </h2>
        <p className="mt-5 text-center text-[20px] leading-7 font-bold text-[#24354c] lg:text-[22px]">
          Love The Results. We Will Make It Right!
        </p>
        <p className="mt-2 text-center text-[16px] leading-6 text-[#4a5568]">
          We stand behind JawGlow™ with a generous confidence guarantee:
        </p>
        <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 space-y-4 text-[16px] leading-7 text-[#6a7282] lg:order-1">
            <p className="font-bold text-[#1e2939]">You&apos;re invited to try it for 90 days!</p>
            <p>Make JawGlow™ part of your daily routine.</p>
            <p>
              Experience for yourself the draining, snatching and jawline-restoring effects that our customers are raving about!
            </p>
            <p>
              For any reason, if you&apos;re nothing less than THRILLED with how sharp your jawline looks, how much the sagging has lifted, and how confident you feel in photos, simply call or email us. We will make it right!
            </p>
            <p className="font-bold text-[#1e2939]">We insist because your satisfaction is our #1 priority!</p>
            <div className="pt-2 lg:max-w-[420px]">
              <CtaButton>Try 90 Days Risk Free</CtaButton>
            </div>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guarantee-customer.png"
              alt="Customer using JawGlow"
              className="aspect-[4/3] w-full rounded-[20px] object-cover object-[center_22%]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guarantee-seal.png"
              alt=""
              className="pointer-events-none absolute -top-5 -right-2 h-[132px] w-[132px] sm:-right-4 sm:h-[156px] sm:w-[156px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
