"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "Welcome to Paint Plues, your premier destination for home and office painting solutions! With our dedicated team of professionals and commitment to quality, we're here to transform your spaces into vibrant works of art. From cozy homes to bustling offices, we've got you covered with expert service and impeccable results. Let Paint Plues add a splash of color and style to your world – because with us, it's more than just paint, it's perfection.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/about.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At Paint Plues, our mission is to redefine the painting experience by providing exceptional service, unmatched quality, and personalized attention to detail. We aim to exceed our clients' expectations by delivering beautiful, long-lasting results that enhance their homes and offices. Through our dedication to excellence and professionalism, we strive to inspire confidence and trust in every project we undertake. Our passion for painting drives us to continually innovate and elevate the industry standards, ensuring that every brushstroke leaves a lasting impression. With Paint Plues, your vision is our mission.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mission.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
