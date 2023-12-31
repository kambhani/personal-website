import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { Image } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone";
import { loadFountainPreset } from "@tsparticles/preset-fountain";

export default function Hero() {
  const [init, setInit] = useState(false);

  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSeaAnemonePreset(engine);
      await loadFountainPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div className="bg-background">
      <Parallax speed={-50}>
        {init && darkMode.value ? (
          <Particles
            className="fixed z-[-1] w-full"
            options={{ preset: "seaAnemone" }}
          />
        ) : (
          <Particles
            className="fixed z-[-1] w-full"
            options={{ preset: "fountain" }}
          />
        )}
        <div className="min-h-screen">
          <div className="mx-auto mb-6 flex w-2/3 max-w-[1400px] justify-center pt-24 md:pt-40">
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
          <h1 className="mx-auto w-4/5 rounded-2xl bg-background p-2 text-center font-mono text-2xl sm:w-2/3 sm:text-3xl">
            Welcome to my digital space, where creativity meets curiosity, and I
            share my journey, passions, and discoveries with the world.
          </h1>
        </div>
      </Parallax>
    </div>
  );
}
