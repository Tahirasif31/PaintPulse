"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="relative h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Commercial Painting</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        - Large-scale painting capabilities <br />- Fast turnaround time <br />-
        Compliance with industry standards
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Decorative Painting</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        - Customized designs (murals, stencils, faux finishes) <br />- Use of
        specialized techniques (sponging, ragging)
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Industrial Painting</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        - Use of industrial-grade paints
        <br />- Corrosion protection
        <br />- Adherence to safety regulations
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cabinet Refinishing </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        - Cabinet surface preparation (sanding, stripping)
        <br />- Application of durable finishes
        <br />- Color customization options
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/mat.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/mat-2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/mat-3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/mat-4.jpg",
  },
];
