import { useRef } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { MathOperations } from "@phosphor-icons/react";
import { Parallax } from "react-scroll-parallax";

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

  return (
    <Parallax speed={0}>
      <section className="bg-blue-100 pb-32 dark:bg-blue-950">
        <div
          className="flex h-screen w-full flex-col justify-start pt-24 text-left font-semibold"
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
        <div className="mx-auto mb-72 grid w-11/12 grid-cols-12 gap-4">
          {courses.map((course, index) => (
            <Parallax
              key={course.code}
              className="col-span-12 h-40 md:col-span-6 2xl:col-span-3"
              translateX={["0vw", `${index > 3 ? -25 : 25}vw`]}
              rootMargin={{ top: -500, bottom: 0, left: 0, right: 0 }}
            >
              <Card className="h-full w-full">
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
            </Parallax>
          ))}
        </div>
        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          But college is not just about the courses you take. It's about the
          friends you make and places you go.
        </h3>
        <div className="mx-auto flex w-full flex-wrap px-2 sm:px-4">
          {filenames.map((filename, index) => (
            <Parallax
              key={filename}
              className="h-64 min-w-64 flex-[1_0_auto]"
              rotateY={[30, -15]}
            >
              <img
                width={widths.current[index]}
                className="h-64 w-full rounded-2xl object-cover p-2"
                src={`/purdue/${filename}.jpeg`}
                alt=""
              />
            </Parallax>
          ))}
        </div>
      </section>
    </Parallax>
  );
}
