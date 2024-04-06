import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600] leading-[38px]">
          Book Best Service <br /> On Reasonable Price
        </h2>
        <p className="md:mt-3 mt-2">
          Secure premium paint services at competitive rates with our reputable
          company. We prioritize delivering exceptional quality without
          compromising on affordability. Our experienced team is dedicated to
          providing tailored solutions that meet your exact specifications while
          adhering to your budget constraints. Whether it&apos;s refreshing your
          home or enhancing your office space, we guarantee unparalleled
          craftsmanship at a reasonable price.
        </p>
        <p className="md:mt-2 mt-1">
          Trust us to exceed your expectations and elevate your property with
          our unbeatable value proposition in the realm of paint services.
        </p>
        <p className="mt-2 hidden md:block">
          Experience the epitome of value with our paint services company. We
          offer unmatched quality and professionalism at prices that won&apos;t
          stretch your budget. Our commitment to excellence ensures that you
          receive top-tier results without the hefty price tag.
        </p>
        <p className="mt-2 hidden md:block">
          From meticulous surface preparation to flawless application, we
          deliver premium service without compromise. With us, you can
          confidently transform your space, knowing you&apos;re getting the best
          service at the best price.Unlock unparalleled affordability without
          sacrificing quality when you choose our paint services company. We
          pride ourselves on delivering premium results at prices that fit
          within your budget.With transparent pricing and a dedication to
          excellence, we prioritize your satisfaction above all else.
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
