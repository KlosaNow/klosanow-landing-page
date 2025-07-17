// import Image from "next/image";

import { Hero, Features, Empower, Connect } from "@/components/landing";

export default function Home() {
  return (
    <div className="mt-16 overflow-x-hidden">
      <div className="sm:p-20">
        <Hero />
        <Features />
        <Empower />
      </div>
      <Connect />
    </div>
  );
}
