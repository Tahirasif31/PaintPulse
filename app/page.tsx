import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";
import Loading from "@/components/Loading";

const SERVICES = [
  {
    title: "Interior Painting",
    description:
      "Transform interiors with precision and care through our professional interior painting services, offering personalized color schemes and flawless finishes.",
  },
  {
    title: "Exterior Painting",
    description:
      "Elevate curb appeal and protect your property with professional exterior painting services, tailored to withstand the elements and showcase your home's beauty.",
  },
  {
    title: "Color Consultation",
    description:
      "Guided color consultations provide expert advice, helping clients choose harmonious palettes that reflect personal style and enhance the ambiance of their space.",
  },

  {
    title: "Wallpaper Installation and Removal",
    description:
      "Expertly install or remove wallpaper, refreshing interiors with precision and care, offering hassle-free transformations for a renewed and personalized living or working space.",
  },
  {
    title: "Commercial Painting Services",
    description:
      "Revitalize commercial spaces with tailored painting services, enhancing aesthetics, durability, and brand image for a professional environment that leaves a lasting impression.",
  },
  {
    title: "Maintenance Painting",
    description:
      "Maintenance painting ensures property aesthetics with scheduled touch-ups, preventing deterioration, and enhancing longevity, ensuring a polished, enduring, and vibrant finish...",
  },
];

export default function Home() {
  return (
    <div>
      <Loading />
      <Hero />
      <section id="about">
        <About />
      </section>
      <GlobeDemo />
      <div id="solutions">
        <ExpertsTeam />
      </div>
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">
          Paint Service&apos;s Spectrum
        </p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
        <div className="">
          <div>
            <SparklesPreview />
          </div>
        </div>
        <div id="contact">
          <GetQuote />
        </div>
      </div>
    </div>
  );
}
