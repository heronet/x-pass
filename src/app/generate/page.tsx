"use client";

import IdCard from "@/components/card";
import { Suspense } from "react";

export default function GeneragePage() {
  return (
    <div className="flex justify-center  items-center flex-col w-full">
      <Suspense>
        <IdCard />
      </Suspense>
    </div>
  );
}
