import { Link } from "@nextui-org/react";
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  File,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="w-full bg-foreground-200 px-4 pb-4 pt-32 sm:pt-24 dark:bg-foreground-50">
      <div className="mx-auto grid w-11/12 grid-cols-12 sm:w-11/12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-5">
          <p
            className="origin-left text-center text-6xl sm:origin-bottom-left sm:text-left sm:text-6xl lg:text-[5rem]"
            style={{
              fontFamily: "'Carattere', monosapce",
              textOrientation: "upright",
              rotate: "-20deg",
            }}
          >
            Anish
          </p>
          <p
            className="origin-left text-center text-6xl sm:origin-bottom-left sm:text-left sm:text-6xl lg:text-[5rem]"
            style={{
              fontFamily: "'Carattere', monosapce",
              rotate: "-20deg",
            }}
          >
            Kambhampati
          </p>
        </div>
        <div className="col-span-12 font-mono sm:col-span-6 sm:-mt-16 lg:col-span-4">
          Thanks for taking the time to check out my website! I hope you enjoyed
          getting to know me a little better. I'm always excited to meet new
          people, so don't hesitate to reach out if you have any questions or
          just want to connect.
        </div>
        <div className="col-span-12 mt-12 flex justify-around lg:col-span-3 lg:-mt-16 lg:grid lg:grid-cols-2">
          <Link
            className="flex items-center justify-end text-foreground"
            href="https://www.linkedin.com/in/anishkambhampati/"
            target="_blank"
          >
            <LinkedinLogo size={48} />
          </Link>
          <Link
            className="flex items-center justify-end text-foreground"
            href="https://github.com/kambhani/"
            target="_blank"
          >
            <GithubLogo size={48} />
          </Link>
          <Link
            className="flex items-center justify-end text-foreground"
            href="mailto: kraghuranish@gmail.com"
            target="_blank"
          >
            <EnvelopeSimple size={48} />
          </Link>
          <Link
            className="flex items-center justify-end text-foreground"
            href="/resume.pdf"
            target="_blank"
          >
            <File size={48} />
          </Link>
        </div>
        <div className="col-span-12 mt-20 text-center font-mono text-sm lg:mt-8">
          <h3>
            A{" "}
            <Link
              size="sm"
              href="https://github.com/kambhani/personal-website"
              target="_blank"
            >
              free and open-source
            </Link>{" "}
            creation, licensed MIT
          </h3>
          <h3>&copy; Anish Kambhampati, {new Date().getFullYear()}</h3>
        </div>
      </div>
    </div>
  );
}
