import { Image } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  return (
    <Parallax speed={-50}>
      <div className="min-h-screen">
        <div className="mx-auto mb-6 mt-80 flex w-2/3 max-w-[1400px] justify-center">
          <Image
            isBlurred
            isZoomed
            radius="full"
            width={300}
            alt="A headshot of Anish Kambhampati, with a backdrop of water and greenry."
            src="/hero_headshot.png"
            className="flex-[0_0_100%]"
          />
        </div>
        <h1 className="mx-auto w-4/5 text-center font-mono text-2xl sm:w-2/3 sm:text-3xl">
          Welcome to my digital space, where creativity meets curiosity, and I
          share my journey, passions, and discoveries with the world.
        </h1>
      </div>
    </Parallax>
  );
}
