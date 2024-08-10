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
      name: "Clash Royale War Deck Builder",
      filename: "cr_war_deck_builder.png",
      github: "https://github.com/kambhani/cr-war-deck-builder",
      description:
        "An application to programmtically generate war deck sets in Clash Royale. It works by scraping RoyaleAPI for meta deck sets, using the Supercell API to get player card levels, and running an algorithm to determine the best deck combinations. Features both a command-line interface and discord integration. Formerly depoyed via GCP but discontinued after the card evolution update rendered the algorithm logic obsolete.",
      technologies: [
        "Google Cloud Platform",
        "pycord",
        "Python",
        "REST APIs",
        "SQLite",
        "Web scraping",
      ],
    },
    {
      id: nanoid(),
      name: "Shield",
      filename: "shield.png",
      preview:
        "https://discord.com/oauth2/authorize?client_id=1256625015672147968&permissions=8&integration_type=0&scope=bot",
      description:
        "A discord bot that provides a wide variety of utility functions. It include dumps of server members, audit logs, and emojis, rate limit configuration to prevent server destruction, and one-off functions that other people have wanted. It is currently deployed with a PaaS offering from Bot-Hosting.net.",
      technologies: ["discord.js", "Postgres", "TypeScript"],
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
      name: "Sudoku Solver",
      filename: "sudoku-solver.png",
      github: "https://github.com/kambhani/sudoku-solver",
      preview: "https://kambhani-sudoku-solver.netlify.app/",
      description:
        "A command-line utility to solve sudoku puzzles, written in C++. It can solve 3x3, 4x4, or even 5x5 sudokus. I also ported the logic to a React web app and created a GUI for the solver. Due to the simplicity of the solving logic involved, it can only solve beginner-level puzzles.",
      technologies: ["C++", "React", "TailwindCSS"],
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
      name: "Boilerchain",
      filename: "boilerchain.svg",
      github: "https://github.com/kambhani/boilerchain",
      preview: "https://boilerchain.us/",
      description:
        "Boilerchain is a web app I created during the Boilermake XI hackathon that allows users to mine and transfer a cryptocurrency called Boilercoin. Despite having no prior experience with the backend technologies involved, I successfully built a functioning blockchain and integrated it into the app within 36 hours. The project taught me a lot about the theory behind cryptocurrencies and the challenges of developing a production-level application under time constraints. After the hackathon was over, I deployed the app to the web with Vercel.",
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
