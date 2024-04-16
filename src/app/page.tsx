import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto h-full flex flex-col items-center  p-4 text-center sm:text-start">
      <div className="w-full max-w-md flex flex-col gap-4 mt-4 items-center">
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text  text-transparent">
          Do you have a friend that looks like this?
        </p>
        <Image
          src="/abir.png"
          alt=""
          width={250}
          height={250}
          className="rounded-lg"
        />
        <p className="text-xl font-bold">
          Most of the time you can not even see them. But in the rare occurance
          when you do. Only one word comes to mind.
        </p>

        <p className="italic ">
          The N word pass lets you do exactly that. Tell me your name...
        </p>
      </div>
      <Form />
    </main>
  );
}
