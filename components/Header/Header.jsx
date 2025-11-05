import React from "react";
import { Button } from "../ui/button";
import BlurText from "../ui/BlurText";
import Link from "next/link";

const Header = () => {
  return (
    <header className="dark:bg-accent/30 bg-accent h-[400px] w-full flex items-center justify-center my-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <BlurText
          text="One place for all your needs"
          animateBy="words"
          delay={150}
          direction="top"
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-center justify-center"
        />
        <Link href={"/shop"}>
          <Button variant={"outline"} className={"cursor-pointer"}>
            Shop Now
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
