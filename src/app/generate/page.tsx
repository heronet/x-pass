"use client";

import IdCard from "@/components/card";
import { Button } from "@/components/ui/button";
import { useToPng, useToSvg } from "@hugocxl/react-to-image";
import { Suspense } from "react";

export default function GeneragePage() {
  const [state, convertToSvg, ref] = useToPng<HTMLDivElement>({
    quality: 0.8,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = "pass.png";
      link.href = data;
      link.click();
    },
  });
  return (
    <div className="flex justify-center  items-center flex-col w-full ">
      <Suspense>
        <p className="py-8 text-2xl sm:text-3xl font-bold">
          Here is your N Word Pass
        </p>
        <div ref={ref} className="w-84 sm:w-96">
          <IdCard />
        </div>

        <Button onClick={convertToSvg} className="mt-4">
          Download
        </Button>
      </Suspense>
    </div>
  );
}
