import { Image, Divider } from "@nextui-org/react";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Experience() {
  const comapny_info = [
    {
      name: "District 4 Labs",
      logo: "district_4_labs.png",
      time: "December 2023 — Present",
      position: "Software Engineer Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui elit, interdum id nunc aliquet, sagittis faucibus massa. Donec efficitur tortor tortor, vel ultricies ipsum venenatis id. Donec ullamcorper risus sit amet aliquet scelerisque. Etiam nisl magna, tristique quis erat eu, porttitor dignissim sem. In hac habitasse platea dictumst. Maecenas massa risus, pharetra eu tortor eu, ullamcorper auctor leo. Vivamus ex metus, efficitur eget urna eget, sollicitudin faucibus augue. Mauris pharetra, mauris volutpat lacinia dignissim, lacus erat malesuada sapien, sit amet iaculis lacus urna eu lectus. Nunc quis velit nisl. Suspendisse vel tortor quis libero hendrerit commodo vitae eu justo. Curabitur egestas dolor sit amet sem venenatis vehicula. ",
    },
    {
      name: "First Internet Bank",
      logo: "first_internet_bank.jpg",
      time: "June 2022 — July 2022",
      position: "Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui elit, interdum id nunc aliquet, sagittis faucibus massa. Donec efficitur tortor tortor, vel ultricies ipsum venenatis id. Donec ullamcorper risus sit amet aliquet scelerisque. Etiam nisl magna, tristique quis erat eu, porttitor dignissim sem. In hac habitasse platea dictumst. Maecenas massa risus, pharetra eu tortor eu, ullamcorper auctor leo. Vivamus ex metus, efficitur eget urna eget, sollicitudin faucibus augue. Mauris pharetra, mauris volutpat lacinia dignissim, lacus erat malesuada sapien, sit amet iaculis lacus urna eu lectus. Nunc quis velit nisl. Suspendisse vel tortor quis libero hendrerit commodo vitae eu justo. Curabitur egestas dolor sit amet sem venenatis vehicula. ",
    },
    {
      name: "Texavi",
      logo: "texavi.jpg",
      time: "June 2021 — July 2021",
      position: "Software Development Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui elit, interdum id nunc aliquet, sagittis faucibus massa. Donec efficitur tortor tortor, vel ultricies ipsum venenatis id. Donec ullamcorper risus sit amet aliquet scelerisque. Etiam nisl magna, tristique quis erat eu, porttitor dignissim sem. In hac habitasse platea dictumst. Maecenas massa risus, pharetra eu tortor eu, ullamcorper auctor leo. Vivamus ex metus, efficitur eget urna eget, sollicitudin faucibus augue. Mauris pharetra, mauris volutpat lacinia dignissim, lacus erat malesuada sapien, sit amet iaculis lacus urna eu lectus. Nunc quis velit nisl. Suspendisse vel tortor quis libero hendrerit commodo vitae eu justo. Curabitur egestas dolor sit amet sem venenatis vehicula. ",
    },
  ];

  return (
    <Parallax
      speed={-10}
      className="min-h-screen from-emerald-300 to-slate-300 bg-radient-ellipse-c dark:from-emerald-700 dark:to-slate-700"
      style={{
        mask: "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/30.00px 100%",
      }}
    >
      <div className="mb-96">
        <div
          className="flex h-32 w-full flex-col items-center justify-start pt-24 font-semibold sm:h-64"
          id="experience"
        >
          <Parallax id="tmp" speed={0}>
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">MY</h2>
          </Parallax>
        </div>
        <div className="flex h-32 w-full flex-col items-center justify-center pt-24 font-semibold sm:h-64">
          <Parallax
            speed={5}
            targetElement={document.getElementById("tmp") ?? undefined}
          >
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">PAST</h2>
          </Parallax>
        </div>
        <div className="mb-48 flex h-32 w-full flex-col items-center justify-start pt-24 font-semibold sm:h-64">
          <Parallax scale={[1, 2]} speed={0}>
            <h2 className="text-5xl md:text-[6rem] xl:text-[12rem]">
              EXPERIENCE
            </h2>
          </Parallax>
        </div>
      </div>
      <div className="mx-auto flex w-11/12 flex-col gap-8 sm:w-2/3">
        {comapny_info.map((company, index) => (
          <Parallax key={company.name} scale={[1, 1.3]}>
            <div
              className="mb-16 rounded-xl border border-foreground bg-emerald-200 p-8 shadow-xl dark:bg-emerald-800"
              key={company.name}
            >
              <div className="flex h-36 w-full items-center px-4">
                <Image
                  isZoomed
                  className="pb-2"
                  src={`/company_logos/${company.logo}`}
                  alt={`Logo for ${company.name}`}
                  width={80}
                />
                <Divider className="mx-4 h-full" orientation="vertical" />
                <div className="pb-b font-light">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {company.name}
                  </h3>
                  <h4 className="font-light sm:text-lg">{company.position}</h4>
                  <h4 className="font-light sm:text-lg">{company.time}</h4>
                </div>
              </div>
              <Divider className="mb-2" />
              <p className="text-sm">{company.description}</p>
            </div>
          </Parallax>
        ))}
      </div>
      <div className="h-40"></div>
    </Parallax>
  );
}
