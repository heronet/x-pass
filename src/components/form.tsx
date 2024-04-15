"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Form() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="max-w-md flex justify-center w-full mt-4">
      <form
        className="flex flex-col gap-4 w-full mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.length) return;
          router.push(`/generate?name=${name}`);
        }}
      >
        <Input
          placeholder="What is your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button className="max-w-fit" type="submit">
          Create Now
        </Button>
      </form>
    </div>
  );
}
