import { Image, Divider } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";

export default function Experience() {
  const comapny_info = [
    {
      name: "District 4 Labs",
      logo: "district_4_labs.jpeg",
      time: "December 2023 — Present",
      position: "Software Engineer Intern",
      description:
        "I am currently employed as a software engineer intern at District 4 Labs. My main tasks while here have had to do with frontend design and development with Vue, Nuxt, and PrimeVue. As a remote internship, I've had to utilize software like Teams, Outlook, Jira, and GitHub to ensure a smooth development experience. I've loved working here so far, and I'm excited to see what's to come.",
    },
    {
      name: "First Internet Bank",
      logo: "first_internet_bank.jpg",
      time: "June 2022 — July 2022",
      position: "Intern",
      description:
        "This was my second internship, and I got it through a local program known as Launch Fishers, which matched students up with businesses in the community. This was my only non-technical internship, as I spent most of my time shadowing various bank departments, includng HR, Facilities, Retail Banking, Mortgage, Risk Management, and Internal Audit. That said, I did create some Excel spreadsheets for tasks like modeling pricing and tracking inventory. I also got to volunteer at a local park with the other summer interns, and that was a lot of fun.",
    },
    {
      name: "Texavi",
      logo: "texavi.jpg",
      time: "June 2021 — July 2021",
      position: "Software Development Intern",
      description:
        "This was my first internship, completed between the junior and senior years of high school. Here, I created web components for Texavi's new learning management system (LMS), including accordions, fill in the blanks, flashcards, quiz questions, and drag-and-drop functionality. I made these using HTML, CSS, Bootstrap, jQuery, and PHP. While creating these components, I adhered to WCAG-AA accessible web design practices, particularly the guidelines surrounding color contrast and keyboard navigation. (Though, looking back, there was definitely more I should have been doing in this area.) This was a remote internship, and as such, I was on frequent Zoom calls with other people from the company, who were located in the UK and India. Overall, I would say that it was a positive experience as my first foray into the professional world.",
    },
  ];

  return (
    <div
      className="min-h-screen from-slate-200 to-slate-600 bg-radient-ellipse-c dark:from-slate-950 dark:to-slate-600"
      style={{
        mask: "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/3rem 100%",
      }}
    >
      <div className="overflow-x-hidden">
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
      <div className="mx-auto flex w-full flex-col gap-8 overflow-x-hidden overflow-y-visible pt-96">
        <div className="overflow-x-visisble mx-auto w-11/12 overflow-y-visible sm:w-2/3">
          {comapny_info.map((company) => (
            <Parallax key={company.name} scale={[1, 1.3]}>
              <div
                className="mb-16 rounded-xl border border-foreground bg-slate-200 p-8 shadow-xl dark:bg-slate-700"
                key={company.name}
              >
                <div className="flex h-36 w-full items-center px-4">
                  <Image
                    isZoomed
                    src={`/company_logos/${company.logo}`}
                    alt={`Logo for ${company.name}`}
                    width={80}
                  />
                  <Divider className="mx-4 h-full" orientation="vertical" />
                  <div className="pb-b font-light">
                    <h3 className="font-semibold sm:text-xl">{company.name}</h3>
                    <h4 className="text-sm font-light sm:text-lg">
                      {company.position}
                    </h4>
                    <h4 className="text-sm font-light sm:text-lg">
                      {company.time}
                    </h4>
                  </div>
                </div>
                <Divider className="mb-2" />
                <p className="text-sm">{company.description}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}
