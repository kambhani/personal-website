import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { Image, Link, Button } from "@heroui/react";
import { Parallax } from "react-scroll-parallax";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSeaAnemonePreset } from "@tsparticles/preset-sea-anemone";
import { loadFountainPreset } from "@tsparticles/preset-fountain";
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeSimpleIcon,
  FileIcon,
} from "@phosphor-icons/react";
import { TypeAnimation } from "react-type-animation";

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
    <div id="home" className="bg-background">
      <Parallax className="pb-[20vh] pt-[10vh]" speed={-50}>
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
          <div className="mx-auto mb-4 flex w-2/3 max-w-[1400px] justify-center pt-20 md:pt-32">
            <Image
              isBlurred
              isZoomed
              radius="full"
              width={300}
              alt="A headshot of Anish Kambhampati, with a backdrop of water and greenry."
              src="/hero_headshot.jpeg"
              className="flex-[0_0_100%]"
            />
          </div>
          <div className="mx-auto mb-4 flex justify-center gap-8">
            <Button
              as={Link}
              isIconOnly={true}
              variant="solid"
              className="flex h-14 w-14 items-center justify-center shadow-xl"
              href="https://www.linkedin.com/in/anishkambhampati/"
              target="_blank"
            >
              <LinkedinLogoIcon size={44} />
            </Button>
            <Button
              as={Link}
              isIconOnly={true}
              variant="solid"
              className="flex h-14 w-14 items-center justify-center shadow-xl"
              href="https://github.com/kambhani/"
              target="_blank"
            >
              <GithubLogoIcon size={44} />
            </Button>
            <Button
              as={Link}
              isIconOnly={true}
              variant="solid"
              className="flex h-14 w-14 items-center justify-center shadow-xl"
              href="mailto: kraghuranish@gmail.com"
              target="_blank"
            >
              <EnvelopeSimpleIcon size={44} />
            </Button>
            <Button
              as={Link}
              isIconOnly={true}
              variant="solid"
              className="flex h-14 w-14 items-center justify-center shadow-xl"
              href="/resume.pdf"
              target="_blank"
            >
              <FileIcon size={44} />
            </Button>
          </div>
          <h1 className="mx-auto w-4/5 rounded-2xl bg-background p-2 text-center font-mono text-2xl sm:w-2/3 sm:text-3xl">
            <TypeAnimation
              sequence={[
                "Hi! I'm Anish Kambhampati, a computer science student at Purdue University passionate about all things technology.",
              ]}
            />
          </h1>
        </div>
      </Parallax>
    </div>
  );
}
