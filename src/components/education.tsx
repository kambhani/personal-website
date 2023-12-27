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
import { useLocomotiveScroll } from "react-locomotive-scroll";

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
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      description: "This is a sample description",
      grade: "A+",
    },
  ];

  return (
    <>
      <section
        data-scroll-section
        className="bg-blue-100 pb-32 dark:bg-blue-950"
      >
        <div
          className="flex h-screen w-full flex-col justify-start pt-24 text-center font-semibold"
          id="education"
        >
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="9"
          >
            MY
          </h2>
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
          >
            EDUCATION
          </h2>
          <h2
            className="text-5xl md:text-[6rem] xl:text-[12rem]"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
            JOURNEY
          </h2>
        </div>
        <div className="h-[25vh]"></div>
        <h3 className="mx-auto mb-12 w-4/5 text-xl font-light">
          I'm currently a sophomore at Purdue University majoring in computer
          science. I've taken a variety of challenging coursework, and I have a
          4.0 GPA to show for it.
        </h3>
        <div className="mx-auto mb-64 grid min-h-screen w-11/12 grid-cols-12 gap-4">
          {courses.map((course, index) => (
            <Card className="col-span-12 h-40 md:col-span-6 2xl:col-span-3">
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
        <h3 className="mx-auto mb-12 w-4/5 text-xl font-light">
          But college is not just about the courses you take. It's about the
          friends you make and places you go.
        </h3>
        <div className="mx-auto flex w-full flex-wrap px-2 sm:px-4">
          {filenames.map((filename, index) => (
            <img
              key={filename}
              width={widths.current[index]}
              className="h-64 min-w-64 flex-[1_0_auto] rounded-2xl object-cover p-2"
              src={`/purdue/${filename}.jpeg`}
              alt="asdf"
            />
          ))}
        </div>
      </section>
    </>
  );
}
