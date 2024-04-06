"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Nav from "./Nav";
import { HeroText } from "./HeroText";

export function Hero() {
  const images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-six.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
  ];
  return (
    <ImagesSlider
      className="h-[45rem] flex flex-col justify-start w-full"
      images={images}
    >
      <Nav />
      <HeroText />
    </ImagesSlider>
  );
}
