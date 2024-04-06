"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Paint Plues transformed the exterior of my office building with their expert painting services. They were thorough in their preparation, used high-quality paints, and the final result exceeded my expectations. Our office now looks more inviting and professional. Great job!",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Ras Al Khaimah",
  },
  {
    quote:
      "تعاقدت مع شركة Paint Plues لإعادة طلاء داخل منزلي، ولا يمكنني أن أكون أكثر سعادة بالنتائج. كان الفريق محترفًا ومهذبًا، وأنهى العمل قبل الموعد المحدد. جودة عملهم ممتازة، وأوصي بهم بشدة لأي احتياجات للدهانات",
    name: "عبدالله صالح الفلاسي",
    title: "أم القيوين",
  },
  {
    quote:
      "As a commercial property manager, I rely on Paint Plus for all our painting needs. They are reliable, efficient, and always deliver exceptional results. Their expertise in industrial painting has helped us maintain a polished and safe environment for our tenants. ",
    name: "Zahraat Al-Sayf",
    title: "Fujairah",
  },
  {
    quote:
      "قدمت شركة Paint Plues عملًا مذهلاً في تجديد خزائن مطبخي. التحول لا يصدق، والخزائن تبدو كأنها جديدة تمامًا. أنا ممتن لاحترافيتهم، من الاستشارة الأولية حتى اللمسات الأخيرة. أوصي بشدة بخدمات تجديد الخزائن لديهم",
    name: "خالد علي الحمادي",
    title: "عجمان",
  },
  {
    quote:
      "I'm thrilled with the interior painting work done by Paint Plus in my office space. They were attentive to our specific requirements, used eco-friendly paints as requested, and completed the project within budget. Our office now feels refreshed and vibrant. Thanks, Paint Plues!",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Abu Dhabi ",
  },
];
