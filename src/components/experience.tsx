import { Image, Divider } from "@nextui-org/react";

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
    <div className="bg-radient-ellipse-c min-h-screen from-emerald-300 to-slate-300 dark:from-emerald-700 dark:to-slate-700">
      <h2
        className="mx-auto mb-8 w-4/5 pt-24 text-2xl font-light sm:w-2/3 sm:text-3xl"
        id="experience"
      >
        My Past Experience
      </h2>
      <div className="mx-auto w-4/5 sm:w-2/3">
        {comapny_info.map((company) => (
          <div className="pb-16" key={company.name}>
            <div className="flex h-24 w-full items-center px-4">
              <Image
                isZoomed
                className="pb-2"
                src={`/company_logos/${company.logo}`}
                alt={`Logo for ${company.name}`}
                width={80}
              />
              <Divider className="mx-4 h-full" orientation="vertical" />
              <div className="pb-b font-light">
                <h3 className="text-xl font-semibold text-danger">
                  {company.name}
                </h3>
                <h4 className="text-lg font-light">{company.position}</h4>
                <h4 className="text-lg font-light">{company.time}</h4>
              </div>
            </div>
            <Divider className="mb-2" />
            <p className="text-sm">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
