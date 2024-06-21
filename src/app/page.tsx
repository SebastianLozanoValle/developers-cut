'use client'
import { Landing } from "@/pages/Landing";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {

  return (
    <main className={`${font.className} bg-[#F4F4F4]`}>
      <Landing />
    </main>
  );
}
