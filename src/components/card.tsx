import Image from "next/image";

export default function IdCard() {
  return (
    <div className="w-72  flex flex-col  overflow-hidden border rounded-xl mx-auto mt-8">
      <div className="bg-red-700  flex items-center">
        <span className="text-4xl font-bold italic px-4 bg-gradient-to-r from-violet-400 to-stone-400 bg-clip-text text-transparent">
          N
        </span>
        <span className="py-6  font-bold text-xl text-white">Word Pass</span>
      </div>

      <div className="flex justify-between ">
        <div className="flex flex-col p-4 font-bold text-sm">
          <span>John Doe</span>
          <span>2022 132 036</span>
          <span>16-2-24</span>
        </div>

        <Image
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
          alt="qr"
          width={64}
          height={64}
          className="p-2 w-fit h-fit m-2"
        />
      </div>
    </div>
  );
}
