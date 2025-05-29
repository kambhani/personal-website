import { Parallax } from "react-scroll-parallax";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Link,
} from "@heroui/react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { nanoid } from "nanoid";

export default function Research() {
  const research = [
    {
      id: nanoid(),
      name: "Machine Learning for Computational Fluid Dynamics",
      dates: "02/2025 - 05/2025",
      links: [
        {
          name: "Technical Report",
          href: "/research/CFD Report.pdf",
        },
      ],
      description:
        "The overall goal of this project was to develop high-quality computational fluid dynamics (CFD) datasets using OpenFOAM which could then be used to train a machine learning (ML) model. My contribution to this project was in developing a pipeline to create these datasets. Given a mesh of interest, I showed how to convert it into a format OpenFOAM could read, run hundreds of simulations in parallel, post process the output with ParaView, and create tensorflow records that could be used in downstream ML training. I also created a tool with Python & Matplotlib to visualize OpenFOAM simulation output as a secondary check against ParaView's built-in visualizations.",
    },
    {
      id: nanoid(),
      name: "s-ray",
      dates: "08/2024 - 05/2025",
      links: [
        {
          name: "Technical Report",
          href: "/research/Analyzing the Performance of GPU-Based Point-in-Polygon Algorithms.pdf",
        },
        {
          name: "Supplementary Report",
          href: "/research/S-ray Supplementary Report.pdf",
        },
        {
          name: "Poster",
          href: "/research/NCUR Poster.pdf",
        },
      ],
      description:
        "The overall goal of s-ray was to utilize NVIDIA ray-tracing architecture to develop state-of-the-art algorithms for spatial queries, including point-in-polygon (PIP), polygon overlay, and more. My main contribution to the project was creating a CUDA baseline for PIP query comparison and benchmarking the performance. I presented this work at the 2025 National Conference on Undergraduate Research (NCUR) in Pittsburgh. Beyond what I presented at NCUR, I also explored using ear-clipping algorithms and bounding box triangulation to boost query performance.",
    },
  ];

  return (
    <Parallax
      className="flex min-h-screen flex-col bg-pink-300 bg-[url('/research/magnifying_glass_light.svg')] bg-repeat-round pb-64 dark:bg-pink-900 dark:bg-[url('/research/magnifying_glass_dark.svg')]"
      speed={-20}
    >
      <h2
        id="research"
        className="mx-auto mt-24 w-11/12 text-center font-[fantasy] text-5xl font-extrabold xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem]"
      >
        MY RESEARCH
      </h2>
      <div className="mx-auto mt-8 flex w-11/12 flex-col items-center gap-8 sm:gap-16">
        {research.map((exp) => (
          <div
            className="w-full max-w-5xl rounded-md bg-gradient-to-tr from-cyan-600 to-lime-400 p-1 shadow-lg dark:from-cyan-500 dark:to-lime-300"
            key={exp.id}
          >
            <Card className="h-full w-full rounded-md">
              <CardHeader className="flex justify-between gap-6">
                <span className="text-lg font-semibold leading-none">
                  {exp.name}
                </span>
                <span className="text-small">{exp.dates}</span>
              </CardHeader>
              <Divider />
              <CardBody>{exp.description}</CardBody>
              <Divider />
              <CardFooter>
                <div className="flex flex-row flex-wrap gap-4">
                  {exp.links.map((link) => (
                    <Button
                      className="font-semibold"
                      href={link.href}
                      target="_blank"
                      as={Link}
                      endContent={<ArrowSquareOutIcon />}
                      size="sm"
                      color="primary"
                      variant="solid"
                    >
                      {link.name}
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </Parallax>
  );
}
