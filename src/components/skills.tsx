import { Parallax } from "react-scroll-parallax";
import useDarkMode from "use-dark-mode";
import { TreeMapHtmlNode } from "./TreeMapNode";
import { ResponsiveTreeMapHtml } from "@nivo/treemap";
import { SpringValue } from "@react-spring/web";

export default function Skills() {
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  const data = {
    name: "Skills",
    children: [
      {
        name: "CI/CD",
        children: [
          { name: "AWS", level: 5 },
          { name: "Azure", level: 4 },
          { name: "Docker", level: 6 },
          { name: "GCP", level: 4 },
          { name: "Git", level: 8 },
          { name: "GitHub", level: 9 },
          { name: "Netlify", level: 2 },
          { name: "Turborepo", level: 5 },
          { name: "Vercel", level: 6 },
        ],
      },
      {
        name: "Developer Tools",
        children: [
          { name: "Android Studio", level: 2 },
          { name: "CLion", level: 4 },
          { name: "Geany", level: 3 },
          { name: "IntelliJ", level: 6 },
          { name: "SLURM", level: 3 },
          { name: "Visual Studio Code", level: 10 },
        ],
      },
      {
        name: "Scripting",
        children: [
          { name: "discord.js", level: 10 },
          { name: "lxml", level: 2 },
          { name: "Python", level: 10 },
        ],
      },
      {
        name: "Low-Level Programming",
        children: [
          { name: "C", level: 5 },
          { name: "C++", level: 8 },
          { name: "CUDA", level: 6 },
          { name: "Java", level: 8 },
          { name: "OptiX", level: 3 },
          { name: "x86-64 Assembly", level: 2 },
        ],
      },
      {
        name: "Web Development",
        children: [
          { name: "Astro", level: 4 },
          { name: "CSS", level: 10 },
          { name: "JavaScript", level: 10 },
          { name: "JQuery", level: 4 },
          { name: "HTML", level: 10 },
          { name: "Next.js", level: 8 },
          { name: "Node.js", level: 9 },
          { name: "Nuxt", level: 4 },
          { name: "PHP", level: 1 },
          { name: "React", level: 10 },
          { name: "TailwindCSS", level: 10 },
          { name: "TypeScript", level: 10 },
          { name: "Vue", level: 4 },
        ],
      },
      {
        name: "Mobile Development",
        children: [
          { name: "Dart", level: 2 },
          { name: "React Native", level: 4 },
        ],
      },
      {
        name: "Operating Systems",
        children: [
          { name: "Linux", level: 7 },
          { name: "MacOS", level: 5 },
          { name: "Windows", level: 4 },
          { name: "Windows Subsystem for Linux", level: 4 },
        ],
      },
      {
        name: "Databases",
        children: [
          { name: "MongoDB", level: 5 },
          { name: "Postgres", level: 8 },
          { name: "Redis", level: 3 },
          { name: "SQL", level: 9 },
          { name: "SQLite", level: 5 },
        ],
      },
    ],
  };

  return (
    <Parallax speed={0} easing={"easeOutQuad"}>
      <div className="min-h-screen bg-lime-400 dark:bg-lime-600">
        <h2
          id="skills"
          className="mx-auto w-3/5 pt-8 text-center text-5xl text-slate-900 sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem]"
        >
          MY SKILLS
        </h2>
        <div className="mx-auto mt-20 flex w-11/12 flex-row flex-wrap gap-4">
          <div className="mb-40 h-[90rem] w-full bg-background sm:mx-auto sm:w-11/12">
            <ResponsiveTreeMapHtml
              data={data}
              identity="name"
              value="level"
              parentLabelTextColor={darkMode.value ? "white" : "black"}
              label="id"
              parentLabelSize={48}
              borderColor={darkMode.value ? "white" : "black"}
              labelTextColor={darkMode.value ? "white" : "black"}
              colors={{ scheme: "paired" }}
              nodeComponent={({ node }) => (
                <TreeMapHtmlNode
                  node={node}
                  borderWidth={1}
                  enableLabel={true}
                  enableParentLabel={true}
                  labelSkipSize={0}
                  animatedProps={{
                    x: new SpringValue(node.x),
                    y: new SpringValue(node.y),
                    width: new SpringValue(node.width),
                    height: new SpringValue(node.height),
                    color: new SpringValue(node.color),
                    labelX: new SpringValue(node.width / 2),
                    labelY: new SpringValue(node.height / 2),
                    labelRotation: new SpringValue(node.labelRotation),
                    labelOpacity: new SpringValue(1),
                    parentLabelX: new SpringValue(node.parentLabelX),
                    parentLabelY: new SpringValue(node.parentLabelY),
                    parentLabelRotation: new SpringValue(
                      node.parentLabelRotation,
                    ),
                    parentLabelOpacity: new SpringValue(1),
                  }}
                />
              )}
              theme={{
                tooltip: {
                  container: {
                    background: darkMode.value ? "black" : "white",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
}
