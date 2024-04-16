import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function IdCard() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [qr, setQr] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
  );
  const params = useSearchParams();

  useEffect(() => {
    setName(params.get("name") ?? "");
    setQr(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.href}`
    );
    setId(
      params.get("id") ??
        Math.floor(Math.random() * 999999999)
          .toLocaleString()
          .replaceAll(",", " ")
    );
  }, [params]);
  return (
    <div className="w-full  flex flex-col  overflow-hidden border rounded-xl bg-white">
      <div className="bg-red-700  flex items-center">
        <span className="text-5xl font-bold italic px-6 text-white">N</span>
        <span className="py-6  font-bold text-xl text-white">Word Pass</span>
      </div>

      <div className="flex justify-between items-start ">
        <div className="flex flex-col px-4 pt-4 gap-0">
          <p>
            <span className="text-sm">Name:</span>{" "}
            {name.length > 0 ? name : "YOUR NAME"}
          </p>
          <p>
            <span className="text-sm">ID:</span>{" "}
            {id.length > 0 ? id : "000 000 000"}
          </p>
          <p>
            <span className="text-sm">
              Expires: <span className="italic">You will know when</span>
            </span>
          </p>
          <br />
        </div>

        <Image
          src={qr}
          alt="qr"
          width={70}
          height={70}
          className="p-2 w-fit h-fit m-2"
        />
      </div>
      <span className="text-xs italic p-4 pt-2">
        *Does not cover damage if asswhopped by niggers
      </span>
    </div>
  );
}
