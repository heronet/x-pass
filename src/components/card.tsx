import Image from "next/image";

type Props = {
  name: string;
  id: string;
  qr: string;
};
export default function IdCard({ name, id, qr }: Props) {
  return (
    <div className="w-full max-w-sm  flex flex-col  overflow-hidden border rounded-xl mx-auto mt-8">
      <div className="bg-red-700  flex items-center">
        <span className="text-4xl font-bold italic px-4 bg-gradient-to-r from-violet-400 to-stone-400 bg-clip-text text-transparent">
          N
        </span>
        <span className="py-6  font-bold text-xl text-white">Word Pass</span>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col px-4 pt-4 gap-0">
          <p>
            <span className="text-sm">Name:</span>{" "}
            {name.length > 0 ? name : "YOUR NAME"}
          </p>
          <p>
            <span className="text-sm">ID:</span>{" "}
            {id.length > 0 ? id : "0000 000 000"}
          </p>
          <p>
            <span className="text-sm">
              Expires: <span className="italic">You'll know when</span>
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
