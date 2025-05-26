import { useState } from "react";
import { Card, CardHeader } from "@heroui/react";
import { MathOperations } from "@phosphor-icons/react";
import { Parallax } from "react-scroll-parallax";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Education() {
  const [index, setIndex] = useState(-1);

  const data = [
    {
      filename: "2022-08-15.jpeg",
      width: 768,
      height: 1024,
      altText: "Me standing in front of the Purdue arch.",
      footer: "My first day",
    },
    {
      filename: "2022-11-19.jpeg",
      width: 640,
      height: 796,
      altText:
        "Me with some friends watching the football game against Northwestern.",
      footer: "A chilly football game against Northwestern",
    },
    {
      filename: "2023-02-05.jpeg",
      width: 4032,
      height: 3024,
      altText: "Me holding a golden ticket.",
      footer: "Golden ticket secured 💪",
    },
    {
      filename: "2023-03-04.jpeg",
      width: 2048,
      height: 1536,
      altText:
        "The Purdue Philharmonic orchestra, performing at Long Center in Lafayette, Indiana.",
      footer: "The Purdue Philharmonic orchestra",
    },
    {
      filename: "2023-03-05.jpeg",
      width: 768,
      height: 1024,
      altText:
        "A selfie of me. In the background there is a bike in a tree, a common Purdue tradition.",
      footer: "A timeless Purdue tradition (wasn't me though)",
    },
    {
      filename: "2023-08-15.jpeg",
      width: 768,
      height: 1024,
      altText:
        "A group photo of me and my fellow BGR leaders in front of a tree.",
      footer: "BGR team leader group (they were awesome)",
    },
    {
      filename: "2023-08-18.jpeg",
      width: 1024,
      height: 768,
      altText: "A photo of me and my BGR group after our fountain run.",
      footer: "My BGR group after a long fountain run",
    },
    {
      filename: "2023-09-16.jpeg",
      width: 1024,
      height: 768,
      altText:
        "A photo of me and my friends at Ross-Ade Stadium before a football game.",
      footer: "Good seats at Ross-Ade",
    },
    {
      filename: "2023-09-19.jpeg",
      width: 1024,
      height: 769,
      altText:
        "A photo of some high-rise buildings in downtown West Lafayette.",
      footer: "The West Lafayette skyline",
    },
    {
      filename: "2024-02-11.jpeg",
      width: 3024,
      height: 4032,
      altText:
        "A photo of my hackathon group and I holding a laptop showcasing our presentation.",
      footer: "Presenting aire at Hacklytics 2024",
    },
    {
      filename: "2024-04-08.jpeg",
      width: 3024,
      height: 4032,
      altText: "A photo of some friends and I in the stands at Mackey arena.",
      footer: "Supporting the Purdue basketball team",
    },
    {
      filename: "2024-12-12.jpeg",
      width: 2316,
      height: 3088,
      altText:
        "A selfie of my friend and I directly in front of a window. Behind the window is a snowy West Lafayette.",
      footer: "My friend Rajit and I",
    },
    {
      filename: "2025-01-07.jpeg",
      width: 4032,
      height: 3024,
      altText:
        "A photo of some friends and I in front of the Topgolf building located in Fishers, Indiana.",
      footer: "A trip to Topgolf",
    },
    {
      filename: "2025-02-13.jpeg",
      width: 2048,
      height: 1536,
      altText: "A photo of some friends and I in front of a wall.",
      footer: "My friend's 21st",
    },
    {
      filename: "2025-02-23.jpeg",
      width: 4284,
      height: 5712,
      altText: "A photo of me and a puppy beside a couch.",
      footer: "Puppy!!!",
    },
    {
      filename: "2025-03-16.jpeg",
      width: 4032,
      height: 3024,
      altText:
        "A photo of some competitors and I at the 2025 UMich trading competition.",
      footer: "2025 UMich Trading Competition",
    },
    {
      filename: "2025-04-08.jpeg",
      width: 3024,
      height: 4032,
      altText:
        "A selfie of me atop the Duquesne Incline. Behind me is the nighttime Pittsburgh skyline.",
      footer: "Nighttime Pittsburgh skyline",
    },
  ];
  const images = data.map((photo) => ({
    src: `/purdue/${photo.filename}`,
    width: photo.width,
    height: photo.height,
    alt: photo.altText,
  }));

  const courses = [
    {
      name: "Problem Solving And Object-Oriented Programming",
      code: "CS 18000",
      grade: "A+",
    },
    {
      name: "Honors Multivariate Calculus",
      code: "MA 27101",
      grade: "A+",
    },
    {
      name: "Programming in C",
      code: "CS 24000",
      grade: "A+",
    },
    {
      name: "Introduction to Statistics",
      code: "STAT 35000",
      grade: "A+",
    },
    {
      name: "Foundations of Computer Science",
      code: "CS 18200",
      grade: "A+",
    },
    {
      name: "Elementary Linear Algebra",
      code: "MA 35100",
      grade: "A+",
    },
    {
      name: "Computer Architecture",
      code: "CS 25000",
      grade: "A",
    },
    {
      name: "Data Structures & Algorithms",
      code: "CS 25100",
      grade: "A+",
    },
    {
      name: "Ordinary Differential Equations",
      code: "MA 36600",
      grade: "A+",
    },
    {
      name: "Systems Programming",
      code: "CS 25200",
      grade: "A+",
    },
    {
      name: "Foundations Of Analysis",
      code: "MA 34100",
      grade: "A+",
    },
    {
      name: "Introduction To The Analysis Of Algorithms",
      code: "CS 38100",
      grade: "A",
    },
    {
      name: "Artificial Intelligence",
      code: "CS 57100",
      grade: "A+",
    },
    {
      name: "Database Systems",
      code: "CS 54100",
      grade: "A+",
    },
    {
      name: "Numerical Methods",
      code: "CS 31400",
      grade: "A+",
    },
    {
      name: "Compiling And Programming Systems",
      code: "CS 50200",
      grade: "A-",
    },
    {
      name: "Introduction to Probability",
      code: "STAT 51900",
      grade: "A+",
    },
    {
      name: "Data Communication And Computer Networks",
      code: "CS 53600",
      grade: "WIP",
    },
    {
      name: "Statistical Machine Learning",
      code: "CS 57800",
      grade: "WIP",
    },
    {
      name: "Randomized Algorithms",
      code: "CS 5800",
      grade: "WIP",
    },
  ];

  return (
    <Parallax speed={0}>
      <section className="bg-emerald-200 pb-32 dark:bg-emerald-900">
        <div
          className="flex h-96 w-full flex-col justify-start overflow-hidden pt-24 text-left font-semibold md:h-[32rem] xl:h-[54rem]"
          id="education"
        >
          <Parallax translateX={[60, -20]}>
            <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[12rem]">
              MY
            </h2>
          </Parallax>
          <Parallax translateX={[70, -20]}>
            <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[12rem]">
              EDUCATION
            </h2>
          </Parallax>
          <Parallax translateX={[80, -20]}>
            <h2 className="text-5xl sm:text-6xl md:text-[6rem] xl:text-[12rem]">
              JOURNEY
            </h2>
          </Parallax>
        </div>
        <div className="h-[25vh]"></div>
        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          I'm a student at Purdue University, currently pursuing my MS in
          computer science. I recently graduated with my BS in computer science
          from Purdue with honors and with highest distinction.
        </h3>
        <div className="w-full overflow-hidden">
          <div className="mx-auto mb-72 grid w-11/12 grid-cols-12 gap-4">
            {courses.map((course, index) => (
              <Parallax
                key={course.code}
                className="col-span-12 md:col-span-6 2xl:col-span-3"
                translateX={["0vw", `${index % 8 < 4 ? -20 : 20}vw`]}
                rootMargin={{ top: -500, bottom: 0, left: 0, right: 0 }}
              >
                <Card className="h-full w-full p-1">
                  <CardHeader className="flex gap-3">
                    <MathOperations size={40} />
                    <div className="flex flex-col">
                      <p className="text-xl">{course.name}</p>
                      <p className="text-lg text-default-500">{course.code}</p>
                    </div>
                    <span className="mr-2 grow text-right text-xl">
                      {course.grade}
                    </span>
                  </CardHeader>
                </Card>
              </Parallax>
            ))}
          </div>
        </div>

        <h3 className="mx-auto mb-12 w-4/5 text-2xl font-light md:text-4xl xl:text-5xl">
          But college is not just about the courses you take. It's about the
          friends you make and places you go.
        </h3>
        <div className="mx-auto w-11/12">
          <PhotoAlbum
            layout="columns"
            photos={images}
            onClick={({ index: current }) => setIndex(current)}
          />
          <Lightbox
            slides={images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Download, Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </section>
    </Parallax>
  );
}
