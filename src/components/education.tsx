import { Image } from "@nextui-org/react";

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
    "2023-12-03",
  ];

  return (
    <div>
      <h2
        className="ml-4 text-2xl font-light sm:ml-6 sm:text-3xl"
        id="education"
      >
        My Education Journey
      </h2>
      <div className="mx-auto flex w-full flex-wrap px-2 sm:px-4">
        {filenames.map((filename, index) => (
          <>
            {index < 5 && (
              <img
                key={filename}
                width={Math.random() * 200 + 300}
                className="h-[500px] min-w-48 flex-[1_0_auto] rounded-2xl object-cover p-2"
                src={`/purdue/${filename}.jpeg`}
                alt="asdf"
              />
            )}
          </>
        ))}
        <div className="flex h-[500px] w-80 min-w-48 flex-[1_0_auto] items-center justify-center p-2 text-2xl">
          I'm currently a sophomore at Purdue University, majoring in computer
          science. I've come to love my time here.
        </div>
        {filenames.map((filename, index) => (
          <>
            {index >= 5 && (
              <img
                key={filename}
                width={Math.random() * 200 + 300}
                className="h-[500px] min-w-48 flex-[1_0_auto] rounded-2xl object-cover p-2"
                src={`/purdue/${filename}.jpeg`}
                alt="asdf"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}