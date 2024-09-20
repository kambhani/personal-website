import { Parallax } from "react-scroll-parallax";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
  Chip,
  Image,
} from "@nextui-org/react";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import Tilt from "react-parallax-tilt";
import { nanoid } from "nanoid";

export default function Projects() {
  const projects = [
    {
      id: nanoid(),
      name: "Shield",
      filename: "shield.png",
      preview: "https://shieldbot.app",
      description:
        "Shield is an advanced Discord bot that provides an array of advanced server administration and security features. These features include server exports of members, audit logs, and emojis, as well as several role administration commands. Shield also comes with event rate limiting and bot protection to mitigate potential server abuse. For ease of use, Shield comes with dashboard and documentation websites to interact with the bot. And for advanced features such as logging and shorter command cooldowns, Shield has two premium tiers available as a subscription. This is the first application I have written that has revenue-generating potential, and I'm excited to see where it goes. Give it a try!",
      technologies: [
        "discord.js",
        "Docker",
        "Dokku",
        "Nextra",
        "Postgres",
        "Remix",
        "Stripe",
        "Tailwind CSS",
        "TypeScript",
        "Turborepo",
        "VPS",
      ],
    },
    {
      id: nanoid(),
      name: "Boilerexams",
      filename: "boilerexams.png",
      github: "https://github.com/boilerexams",
      preview: "https://boilerexams.com",
      description:
        "A fullstack website that enables students at Purdue University to effectively study for their upcoming exams. It features exam archives, an elegant and accessible user interface, student-recorded explanations, and rich data aggregation. Currently used by over 4,000 students. This is an ongoing group effort involving 20+ people; I serve as a frontend developer.",
      technologies: [
        "Astro",
        "Docker",
        "Judge0",
        "React",
        "TailwindCSS",
        "Typescript",
      ],
    },
    {
      id: nanoid(),
      name: "Crypto Arbitrage Trading (CAT)",
      filename: "cat.png",
      github: "https://github.com/Boiler-Quant-Finance-Group/CAT",
      description:
        "During the spring of 2024, I worked with fellow developers in the Boiler Quant Finance Group (BQFG) to explore the potential for arbitrage in the crypto market. We analyzed latency across cryptocurrency exchanges, collected exchange rate data, optimized our arbitrage detection algorithm, and explored the accuracy of ML models in predicting future exchange rates. My specific development work included adding multithreading support to our arbitrage algorithms and testing the efficacy of a gradient boosting model on exchange rate prediction. We found that, of the three models we tested (LSTM, ARIMA, and gradient boosting), that the LSTM model had the strongest predictive power.",
      technologies: [
        "ccxt",
        "concurrent.futures",
        "Matplotlib",
        "NumPy",
        "pandas",
        "Python",
        "scikit-learn",
        "XGBoost",
      ],
    },
    {
      id: nanoid(),
      name: "Boilerchain",
      filename: "boilerchain.svg",
      github: "https://github.com/kambhani/boilerchain",
      preview: "https://boilerchain.us/",
      description:
        "Boilerchain is a web app I created during the Boilermake XI hackathon that allows users to mine and transfer a cryptocurrency called Boilercoin. Despite having no prior experience with the backend technologies involved, I successfully built a functioning blockchain and integrated it into the app within 36 hours. Boilerchain won an award from Bloomberg for Best FinTech Hack at the hackathon's conclusion. The project taught me a lot about the theory behind cryptocurrencies and the challenges of developing a production-level application under time constraints. After the hackathon was over, I deployed the app to the web with Vercel.",
      technologies: [
        "AWS Amplify",
        "Bruno",
        "Chakra UI",
        "Docker",
        "FastAPI",
        "React",
        "Redis",
        "TypeScript",
      ],
    },
    {
      id: nanoid(),
      name: "aire",
      filename: "aire.png",
      github: "https://github.com/kambhani/aire",
      preview: "https://aire-xi.vercel.app/",
      description:
        "I worked with 3 other developers to create aire (AI REsume) at Hacklytics 2024. This website streamlines the job application process by automatically tailoring resumes and cover letters to fit specific job postings. Users can upload their existing resume, which is parsed for relevant details, and then simply paste a job description to receive a matching score and customized documents. We overcame challenges with data parsing and profile management to create a seamless, user-friendly experience.",
      technologies: [
        "Next Auth",
        "Next.js",
        "OpenAI API",
        "Overleaf API",
        "Prisma",
        "ShadUI",
        "Tailwind CSS",
        "tRPC",
        "TypeScript",
      ],
    },
    {
      id: nanoid(),
      name: "Boiler Tickets",
      filename: "boilertickets.png",
      github: "https://github.com/kambhani/boilertickets",
      description:
        "A simple ticket exchange Discord bot. It supports user registration, email verification (based on email domain), email blacklisting, and user data deletion. I was inspired to create this simple bot after learning that the Purdue Ticket Exchange server was shutting down. Though my intention is to use it for Purdue specifically, the email validation logic involved can be applied to any Discord server that wants to restrict access to those with a certain email domain.",
      technologies: [
        "Biome",
        "Bun",
        "discord.js",
        "Drizzle ORM",
        "libSQL",
        "Nodemailer",
      ],
    },
    {
      id: nanoid(),
      name: "Clash Royale War Deck Builder",
      filename: "cr_war_deck_builder.png",
      github: "https://github.com/kambhani/cr-war-deck-builder",
      description:
        "An application to programmtically generate war deck sets in Clash Royale. It works by scraping RoyaleAPI for meta deck sets, using the Supercell API to get player card levels, and running an algorithm to determine the best deck combinations. Features both a command-line interface and discord integration. Formerly depoyed via GCP but discontinued after the card evolution update rendered the algorithm logic obsolete.",
      technologies: [
        "Google Cloud Platform",
        "lxml",
        "pycord",
        "Python",
        "REST APIs",
        "SQLite",
        "Web scraping",
      ],
    },
    {
      id: nanoid(),
      name: "Tripath Inc.",
      filename: "tripath.png",
      github: "https://github.com/kambhani/astro-theme-stone",
      preview: "https://thetripathinc.com/",
      description:
        "A simple website for my mom's company. My brother and I created it by forking a minimalist Astro template and adjusting the structure to our liking. I helped set the project up, added a backend route to the contact form, and deployed the website using Vercel.",
      technologies: ["Alpine.js", "Astro", "Mailgun", "Tailwind CSS", "Vercel"],
    },
    {
      id: nanoid(),
      name: "CheckIt",
      filename: "checkit.png",
      github: "https://github.com/giuseppeb-816/check_it",
      preview: "https://devpost.com/software/check-it-fbh3zj",
      description:
        "A social media app where users can set goals in the morning, check off their goals throughout the day, and view progress on their goals and their friends' goals in the evening. I worked with three other developers to create this app for the hackathon BoilerMake X, where it won an award.",
      technologies: ["Andriod Studio", "Dart", "Firebase", "Flutter", "Wix"],
    },
    {
      id: nanoid(),
      name: "Clashalytics",
      filename: "clashalytics.svg",
      github: "https://github.com/kambhani/Clashalytics",
      description:
        "A swiss-army knife for Clash Royale. It can show player, clan, and tournament info. It can also log player battles over time through a MongoDB database integration. My first-ever full-stack web application, Clashalytics will forever hold a special place in my heart. ❤️",
      technologies: [
        "Bootstrap",
        "CSS",
        "Express",
        "Handlebars",
        "HTML",
        "JQuery",
        "MongoDB",
        "node.js",
        "REST APIs",
      ],
    },
    {
      id: nanoid(),
      name: "HSE College View",
      filename: "hse-college-view.png",
      github: "https://github.com/kambhani/hse-college-view",
      description:
        "A web app to export Naviance admissions data and then view that data in a web browser. I used user JWTs for fetching the data, MongoDB for storing the data, express and handlebars to render the pages, and Chart.js to create the visualizations. This project was developed as part of my high school's software development class.",
      technologies: [
        "Bootstrap",
        "Chart.js",
        "Express",
        "Handlebars",
        "HTML",
        "JWTs",
        "MongoDB",
      ],
    },
    {
      id: nanoid(),
      name: "Sudoku Solver",
      filename: "sudoku-solver.png",
      github: "https://github.com/kambhani/sudoku-solver",
      preview: "https://kambhani-sudoku-solver.netlify.app/",
      description:
        "A command-line utility to solve sudoku puzzles, written in C++. It can solve 3x3, 4x4, or even 5x5 sudokus. I also ported the logic to a React web app and created a GUI for the solver. Due to the simplicity of the solving logic involved, it can only solve beginner-level puzzles.",
      technologies: ["C++", "React", "TailwindCSS"],
    },
  ];

  return (
    <Parallax className="flex min-h-screen flex-col" speed={-10}>
      <div
        id="projects"
        className="h-40 bg-sky-500 dark:bg-sky-800"
        style={{
          mask: "radial-gradient(4.57rem at 50% 6.20rem,#000 99%,#0000 101%) calc(50% - 8rem) 0/16rem 100%, radial-gradient(4.57rem at 50% -2.2rem,#0000 99%,#000 101%) 50% 4rem/16rem 100% repeat-x",
        }}
      ></div>
      <div className="-mt-1 grow bg-gradient-to-b from-sky-500 to-sky-700 dark:from-sky-800 dark:to-sky-950">
        <h2 className="mx-auto mb-16 max-w-[95%] animate-text bg-[linear-gradient(-225deg,_#881337_0%,#f97316_30%,_#dc2626_70%,_#fef08a_100%)] bg-[200%_auto] bg-clip-text text-center text-6xl leading-[3.75rem] text-transparent sm:mb-24 sm:max-w-[90%] sm:text-[4rem] sm:leading-[4rem] md:text-[5rem] md:leading-[5rem] lg:text-[6rem] lg:leading-[6rem] xl:mb-36 xl:text-[9rem] xl:leading-[9rem]">
          MY PROJECTS
        </h2>
        <div className=" mb-20 w-full">
          <div className="mx-auto grid w-11/12 grid-cols-12 gap-4">
            {projects.map((project) => (
              <Tilt
                key={project.id}
                className="relative col-span-12 rounded-2xl bg-sky-200 md:col-span-6 xl:col-span-4 dark:bg-sky-950"
              >
                <Card className="h-full bg-sky-200 p-1 dark:bg-sky-950">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <div className="flex items-center justify-center ">
                        <Image
                          className="my-auto"
                          src={`/projects/${project.filename}`}
                          height={64}
                          width={64}
                        />
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="text-lg font-semibold leading-none">
                          {project.name}
                        </h4>
                        <span className="flex flex-row gap-2">
                          {project.github && (
                            <Button
                              className="bg-background font-semibold"
                              href={project.github}
                              target="_blank"
                              as={Link}
                              endContent={<GithubLogo size={16} />}
                              size="sm"
                              color="default"
                            >
                              GitHub
                            </Button>
                          )}
                          {project.preview && (
                            <Button
                              className="bg-foreground text-background"
                              href={project.preview}
                              target="_blank"
                              as={Link}
                              endContent={<ArrowSquareOut />}
                              size="sm"
                              color="default"
                            >
                              Preview
                            </Button>
                          )}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-1 px-3 py-0">
                    {project.description}
                  </CardBody>
                  <CardFooter className="flex flex-row flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Chip
                        size="sm"
                        key={technology}
                        className="bg-gradient-to-tr from-green-300 via-yellow-300 to-pink-300 dark:from-blue-700 dark:via-violet-800 dark:to-fuchsia-900"
                      >
                        {technology}
                      </Chip>
                    ))}
                  </CardFooter>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
        <Parallax
          scaleY={[1, 0]}
          className="flex h-screen w-full origin-bottom justify-between"
        >
          <div className="h-full w-1/5 bg-lime-400 dark:bg-lime-600"></div>
          <div className="h-full w-1/5 bg-lime-400 dark:bg-lime-600"></div>
        </Parallax>
      </div>
    </Parallax>
  );
}
