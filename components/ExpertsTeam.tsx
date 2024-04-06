"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ExpertsTeam() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover Your Perfect
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Paint Solution Today!
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Emily Davis",
    designation: "Dirty Air Filter",
    image: "/tab-9.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Refrigerant Leaks",
    image: "/tab-10.jpg",
    badge: "Mentor",
  },

  {
    name: "John Doe",
    designation: "Faulty Compressor",
    image: "/tab-3.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Frozen Coils",
    image: "/tab-8.jpg",
    badge: "Mentor",
  },

  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-13.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-14.jpg",
    badge: "Mentor",
  },

  {
    name: "Jane Smith",
    designation: "Ductwork Faults",
    image: "/tab-4.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "System Performance",
    image: "/tab-5.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Electrical Faults",
    image: "/tab-6.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Blocked Condensate Drain",
    image: "/tab-7.jpg",
    badge: "Mentor",
  },

  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-12.jpg",
    badge: "Mentor",
  },

  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-15.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-16.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-17.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-18.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-19.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Improper Grounding",
    image: "/tab-20.jpg",
    badge: "Mentor",
  },
  {
    name: "Manu Arora",
    designation: "Insufficient Cooling",
    image: "/tab-1.jpg",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Thermostat Malfunctions",
    image: "/tab-2.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Faulty Outlets or Switches",
    image: "/tab-11.jpg",
    badge: "Mentor",
  },
];
