import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
} from "@nextui-org/react";
import { MathOperations } from "@phosphor-icons/react";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Education() {
  const filenames = [
    "2022-08-15",
    "2022-11-19",
    "2023-02-05",
    "2023-03-04",
    "2023-03-05",
    "2023-08-15",
    "2023-08-18",
    "2023-09-16",
    "2023-09-19",
  ];
  const widths = useRef<number[]>([]);
  for (let i = 0; i < filenames.length; i++) {
    widths.current = [...widths.current, Math.random() * 150 + 100];
  }
  const courses = [
    {
      name: "Honors Multivariate Calculus",
      code: "CS 27101",
      description: "Calc 3",
      grade: "A+",
    },
    {
      name: "Programming in C",
      code: "CS 24000",
      description: "C programming",
      grade: "A+",
    },
    {
      name: "Introduction to Statistics",
      code: "STAT 35000",
      description: "Stats",
      grade: "A+",
    },
    {
      name: "Foundations of Computer Science",
      code: "CS 18200",
      description: "Discrete math",
      grade: "A+",
    },
    {
      name: "Elementary Linear Algebra",
      code: "MA 35100",
      description: "linear",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "Assembly",
      grade: "A",
    },
    {
      name: "Data Structures & Algorithms",
      code: "CS 25100",
      description: "DSA",
      grade: "A+",
    },
    {
      name: "Ordinary Differential Equations",
      code: "MA 36600",
      description: "Diff eq",
      grade: "A+",
    },
  ];

  const parallax_my = useParallax<HTMLHeadingElement>({
    translateX: [50, -20],
  });
  const parallax_education = useParallax<HTMLHeadingElement>({
    translateX: [60, -20],
  });
  const parallax_journey = useParallax<HTMLHeadingElement>({
    translateX: [70, -20],
  });

  const college_more_text = useRef();
  const parallax_courses: (typeof parallax_my)[] = [];
  for (let i = 0; i < 8; i++) {
    const multiplier = i > 3 ? 50 : -50;
    parallax_courses.push(
      useParallax<HTMLDivElement>({
        translateX: [`0vw`, `${-1 * multiplier}vw`],
        targetElement: college_more_text.current,
        //rootMargin: { top: 100, bottom: 100, left: 100, right: 100 },
      }),
    );
  }

  const parallax_images = [];
  for (let i = 0; i < filenames.length; i++) {
    parallax_images.push(
      useParallax<HTMLImageElement>({
        rotateY: [45, -30],
      }),
    );
  }

  return (
    <Parallax speed={50}>
      <section className="bg-blue-100 pb-32 dark:bg-blue-950">
        <div
          className="flex h-screen w-full flex-col justify-start pt-24 text-left font-semibold"
          id="education"
        >
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            ref={parallax_my.ref}
          >
            MY
          </h2>
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            ref={parallax_education.ref}
          >
            EDUCATION
          </h2>
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            ref={parallax_journey.ref}
          >
            JOURNEY
          </h2>
        </div>
        <div className="h-[25vh]"></div>
        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          I'm currently a sophomore at Purdue University majoring in computer
          science. I've taken a variety of challenging coursework, and I have a
          4.0 GPA to show for it.
        </h3>
        <div className="mx-auto mb-72 grid w-11/12 grid-cols-12 gap-4">
          {courses.map((course, index) => (
            <Card
              key={course.code}
              className="col-span-12 h-40 md:col-span-6 2xl:col-span-3"
              ref={parallax_courses[index].ref}
            >
              <CardHeader className="flex gap-3">
                <MathOperations size={40} />
                <div className="flex flex-col">
                  <p className="text-md">{course.name}</p>
                  <p className="text-small text-default-500">{course.code}</p>
                </div>
                <span className="mr-2 grow text-right text-xl">
                  {course.grade}
                </span>
              </CardHeader>
              <Divider />
              <CardBody>{course.description}</CardBody>
            </Card>
          ))}
        </div>
        <h3
          className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl"
          ref={college_more_text}
        >
          But college is not just about the courses you take. It's about the
          friends you make and places you go.
        </h3>
        <div className="mx-auto flex w-full flex-wrap px-2 sm:px-4">
          {filenames.map((filename, index) => (
            <img
              key={filename}
              ref={parallax_images[index].ref}
              width={widths.current[index]}
              className="h-64 min-w-64 flex-[1_0_auto] rounded-2xl object-cover p-2"
              src={`/purdue/${filename}.jpeg`}
              alt="asdf"
            />
          ))}
        </div>
      </section>
    </Parallax>
  );
}
