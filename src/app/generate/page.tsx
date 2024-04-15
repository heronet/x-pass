"use client";

import IdCard from "@/components/card";
import { Button } from "@/components/ui/button";
import { useToSvg } from "@hugocxl/react-to-image";
import { Suspense } from "react";

export default function GeneragePage() {
  const [state, convertToSvg, ref] = useToSvg<HTMLDivElement>({
    quality: 0.8,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = "my-image-name.svg";
      link.href = data;
      link.click();
    },
  });
  return (
    <div className="flex justify-center  items-center flex-col w-full p-8">
      <Suspense>
        <div ref={ref} className="w-96">
          <IdCard />
        </div>

        <Button onClick={convertToSvg} className="mt-4">
          Download
        </Button>
      </Suspense>
    </div>
  );
}
