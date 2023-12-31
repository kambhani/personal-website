import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { MathOperations } from "@phosphor-icons/react";
import { Parallax } from "react-scroll-parallax";
import { Masonry } from "masonic";

export default function Education() {
  const images = [
    {
      filename: "2022-08-15.jpeg",
      altText: "Me standing in front of the Purdue arch.",
      footer: "My first day",
    },
    {
      filename: "2022-11-19.jpeg",
      altText:
        "Me with some friends watching the football game against Northwestern.",
      footer: "A chilly football game against Northwestern",
    },
    {
      filename: "2023-02-05.jpeg",
      altText: "Me holding a golden ticket.",
      footer: "Golden ticket secured 💪",
    },
    {
      filename: "2023-03-04.jpeg",
      altText:
        "The Purdue Philharmonic orchestra, performing at Long Center in Lafayette, Indiana.",
      footer: "The Purdue Philharmonic orchestra",
    },
    {
      filename: "2023-03-05.jpeg",
      altText:
        "A selfie of me. In the background there is a bike in a tree, a common Purdue tradition.",
      footer: "A timeless Purdue tradition (wasn't me though)",
    },
    {
      filename: "2023-08-15.jpeg",
      altText:
        "A group photo of me and my fellow BGR leaders in front of a tree.",
      footer: "BGR team leader group (they were awesome)",
    },
    {
      filename: "2023-08-18.jpeg",
      altText: "A photo of me and my BGR group after our fountain run.",
      footer: "My BGR group after a long fountain run",
    },
    {
      filename: "2023-09-16.jpeg",
      altText:
        "A photo of me and my friends at Ross-Ade Stadium before a football game.",
      footer: "Good seats at Ross-Ade",
    },
    {
      filename: "2023-09-19.jpeg",
      altText:
        "A photo of some high-rise buildings in downtown West Lafayette.",
      footer: "The West Lafayette skyline",
    },
  ];
  const widths = useRef<number[]>([]);
  for (let i = 0; i < images.length; i++) {
    widths.current = [...widths.current, Math.random() * 150 + 100];
  }
  const courses = [
    {
      name: "Honors Multivariate Calculus",
      code: "CS 27101",
      description:
        "This course is the Honors version of MA 26100, Multivariate Calculus; it will also include a review of infinite series. The course is intended for first-year students who have credit for Calculus I and II. There will be a significant emphasis on conceptual explanation, but not on formal proof. Permission of department is required.",
      grade: "A+",
    },
    {
      name: "Programming in C",
      code: "CS 24000",
      description:
        "The UNIX environment, C development cycle, data representation, operators, program structure, recursion, macros, C preprocessor, pointers and addresses, dynamic memory allocation, structures, unions, typedef, bit-fields, pointer/structure applications, UNIX file abstraction, file access, low-level I/O, concurrency.",
      grade: "A+",
    },
    {
      name: "Introduction to Statistics",
      code: "STAT 35000",
      description:
        "A data-oriented introduction to the fundamental concepts and methods of applied statistics. Exploratory analysis of data. Sample design and experimental design. Probability distributions and simulation. Sampling distributions. The reasoning of statistical inference. Confidence intervals and tests for one and two samples. Inference for contingency tables, regression, and correlation. Introduction to regression with several explanatory variables. Essential use is made of statistical software throughout. Intended primarily for students majoring in the mathematical sciences. For statistics majors and minors, credit should be allowed in no more than one of STAT 30100, 30301, 35000, 35500, 50100, and in no more than one of STAT 50300 and STAT 51100. Prerequisite: two semesters of college calculus.",
      grade: "A+",
    },
    {
      name: "Foundations of Computer Science",
      code: "CS 18200",
      description:
        "Logic and proofs; sets, functions, relations, sequences and summations; number representations; counting; fundamentals of the analysis of algorithms; graphs and trees; proof techniques; recursion; Boolean logic; finite state machines; pushdown automata; computability and undecidability.",
      grade: "A+",
    },
    {
      name: "Elementary Linear Algebra",
      code: "MA 35100",
      description:
        "Systems of linear equations, finite dimensional vector spaces, matrices, determinants, eigenvalues and eigenvector applications to analytical geometry. Not open to students with credit in MA 26500.",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description:
        "Digital logic: transistors, gates, and combinatorial circuits; clocks; registers and register banks; arithmetic-logic units; data representation: big-endian and little-endian integers; ones and twos complement arithmetic; signed and unsigned values; Von-Neumann architecture and bottleneck; instruction sets; RISC and CISC designs; instruction pipelines and stalls; rearranging code; memory and address spaces; physical and virtual memory; interleaving; page tables; memory caches; bus architecture; polling and interrupts; DMA; device programming; assembly language; optimizations; parallelism; data pipelining.",
      grade: "A",
    },
    {
      name: "Data Structures & Algorithms",
      code: "CS 25100",
      description:
        "Running time analysis of algorithms and their implementations, one-dimensional data structures, trees, heaps, additional sorting algorithms, binary search trees, hash tables, graphs, directed graphs, weighted graph algorithms, additional topics.",
      grade: "A+",
    },
    {
      name: "Ordinary Differential Equations",
      code: "MA 36600",
      description:
        "An introduction to ordinary differential equations with emphasis on problem solving and applications. The one-hour computer lab will give students an opportunity for hands-on experience with both the theory and applications of the subject.",
      grade: "A+",
    },
  ];

  return (
    <Parallax speed={0}>
      <section className="bg-emerald-200 pb-32 dark:bg-emerald-900">
        <div
          className="flex h-screen w-full flex-col justify-start overflow-hidden pt-24 text-left font-semibold"
          id="education"
        >
          <Parallax translateX={[50, -20]}>
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">MY</h2>
          </Parallax>
          <Parallax translateX={[60, -20]}>
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">
              EDUCATION
            </h2>
          </Parallax>
          <Parallax translateX={[70, -20]}>
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">JOURNEY</h2>
          </Parallax>
        </div>
        <div className="h-[25vh]"></div>
        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          I'm currently a sophomore at Purdue University majoring in computer
          science. I've taken a variety of challenging coursework, and I have a
          4.0 GPA to show for it.
        </h3>
        <div className="w-full overflow-hidden">
          <div className="mx-auto mb-72 grid w-11/12 grid-cols-12 gap-4">
            {courses.map((course, index) => (
              <Parallax
                key={course.code}
                className="col-span-12 md:col-span-6 2xl:col-span-3"
                translateX={["0vw", `${index > 3 ? -25 : 25}vw`]}
                rootMargin={{ top: -500, bottom: 0, left: 0, right: 0 }}
              >
                <Card className="h-full w-full pb-2">
                  <CardHeader className="flex gap-3">
                    <MathOperations size={40} />
                    <div className="flex flex-col">
                      <p className="text-md">{course.name}</p>
                      <p className="text-default-500">{course.code}</p>
                    </div>
                    <span className="mr-2 grow text-right text-xl">
                      {course.grade}
                    </span>
                  </CardHeader>
                  <Divider />
                  <CardBody className="text-sm">{course.description}</CardBody>
                </Card>
              </Parallax>
            ))}
          </div>
        </div>

        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          But college is not just about the courses you take. It's about the
          friends you make and places you go.
        </h3>
        <div className="mx-auto flex w-full flex-wrap px-2 sm:px-4">
          <Masonry items={images} render={MasonryCard} columnWidth={270} />
        </div>
      </section>
    </Parallax>
  );
}

const MasonryCard = ({
  data: { filename, altText, footer },
  width,
}: {
  index: number;
  data: { filename: string; altText: string; footer: string };
  width: number;
}) => {
  return (
    <Parallax className="m-2" rotateY={[15, -15]}>
      <Card isFooterBlurred radius="lg" className="h-full w-full border-none">
        <Image
          alt={altText}
          className="m-0 h-full w-full object-cover p-0"
          src={`/purdue/${filename}`}
          width={width}
        />
        <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
          <p className="text-center text-xs font-semibold text-white/80">
            {footer}
          </p>
        </CardFooter>
      </Card>
    </Parallax>
  );
};
