import { Parallax } from "react-scroll-parallax";
import { nanoid } from "nanoid";
import CertificationCard from "./certificationCard";
import Carousel from "react-spring-3d-carousel";
import { useState } from "react";

export default function Credentials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const data = [
    {
      company: "Microsoft",
      name: "Microsoft Certified: Azure Fundamentals",
      image: "az900.png",
      description:
        "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: [
        "Azure",
        "Cloud Data",
        "Cloud Networking",
        "Cloud Security",
        "Cloud Services",
        "Cloud Storage",
        "Virtualization",
      ],
    },
    {
      company: "Global Information Assurance Certification",
      name: "GIAC Cloud Security Essentials",
      image: "gcld.png",
      description:
        "The GIAC Cloud Security Essentials (GCLD) certification validates a practitioner's ability to implement preventive, detective, and reactionary techniques to defend valuable cloud-based workloads.",
      skills: [
        "Amazon Web Services (AWS)",
        "Azure Services",
        "Cloud Compliance Requirements",
        "Cloud Environments",
        "Cloud Logging and Monitoring",
        "Cloud Resource Provisioning",
        "Cloud Security",
        "Cloud Service Models",
        "Cloud Services",
        "Data Security",
        "IAM",
        "Security Controls",
      ],
    },
    {
      company: "Global Information Assurance Certification",
      name: "GIAC Foundational Cybersecurity Technologies",
      image: "gfact.png",
      description:
        "The GIAC Foundational Cybersecurity Technologies (GFACT) certification validates a practitioner's knowledge of essential foundational cybersecurity concepts. GFACT-certified professionals are familiar with practical skills in computers, technology, and security fundamentals that are needed to kickstart a career in cybersecurity.",
      skills: [
        "Computer Hardware Fundamentals",
        "Computer Logic",
        "Computer Networking",
        "Cyber Security Concepts",
        "Exploitation Fundamentals",
        "Forensics Fundamentals",
        "Operating System Fundamentals",
        "Programming Fundamentals",
      ],
    },
    {
      company: "Global Information Assurance Certification",
      name: "GIAC Advisory Board",
      image: "giac_ab.png",
      description:
        "The GIAC Advisory Board is an invitation only, email-based forum where IT Security professionals can exchange ideas and advice. Invitations are extended to GIAC certified professionals who demonstrate exemplary performance on GIAC exams. Members are often consulted as subject-matter experts for content-related issues in various GIAC program needs.",
      skills: [
        "Cyber Defense",
        "Cyber Security",
        "Data Protection",
        "Information Security",
        "Network Security",
      ],
    },
    {
      company: "AT&T",
      name: "2021 AT&T Summer Learning Academy Extern",
      image: "att_sla.png",
      description:
        "Earners acquire knowledge and insights of four key areas: Personal Development, Business, Technology, and insights on life at AT&T direct from our leadership and experts in their field. They will complete both short informative self-paced classes and exciting live events. As an AT&T Summer Learning Academy Extern, the badge earner has acquired business and technical acumen while building skills that can be applicable to any career path.",
      skills: [
        "5G And Edge Technology",
        "Artificial Intelligence",
        "Corporate Social Responsibility",
        "Cybersecurity",
        "Entrepreneurship",
        "Leadership",
        "Organizational Culture",
        "Tecnical Project Management",
      ],
    },
  ];

  const slides = data.map((cert, index) => {
    return {
      key: nanoid(),
      content: <CertificationCard cert={cert} />,
      onClick: () => setSlideIndex(index),
    };
  });
  //
  return (
    <div className="min-h-screen">
      <Parallax speed={50} className="bg-background">
        <div className="3xl:h-[calc(50vw_+_2rem)] overflow-hidden sm:h-[40rem] md:h-[45rem] lg:h-[50rem] xl:h-[55rem] 2xl:h-[60rem]">
          <svg className="" viewBox="0 0 500 500">
            <path
              id="curve"
              color="blue"
              fill="transparent"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text className="fill-foreground text-[58px]" width="500">
              <textPath xlinkHref="#curve">My Certifications</textPath>
            </text>
          </svg>
        </div>

        <div className="xs:mt-20 mt-52 sm:mt-0">
          <Carousel
            slides={slides}
            showNavigation={false}
            goToSlide={slideIndex}
            animationConfig={{ tension: 210, friction: 20 }}
          />
        </div>
        <div className="h-96"></div>
      </Parallax>
    </div>
  );
}
