"use client";

import IdCard from "@/components/card";
import Form from "@/components/form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GeneragePage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [qr, setQr] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
  );
  const params = useSearchParams();

  useEffect(() => {
    setName(params.get("name") ?? "");
    setId(
      params.get("id") ??
        Math.floor(Math.random() * 999999999)
          .toLocaleString()
          .replaceAll(",", " ")
    );
  }, [params]);

  useEffect(() => {
    setQr(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` +
        `http://localhost:3000/generate?name=${name}`
    );
  }, [name]);

  return (
    <div className="flex justify-center  items-center flex-col w-full">
      <IdCard name={name} id={id} qr={qr} />
    </div>
  );
}
