import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { ResponsiveLine } from "@nivo/line";
import { Link } from "@heroui/react";
import type { cfUserRating } from "../cf_data";
import { cfData } from "../cf_data";
import useDarkMode from "use-dark-mode";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export default function Hobbies() {
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  const [data, setData] = useState<
    { id: string; data: (cfUserRating & { x: Date; y: number })[] }[]
  >([]);

  useEffect(() => {
    // This is being blocked by CORS, so have to use fallback data
    fetch("https://codeforces.com/api/user.rating?handle=liquidplasma")
      .then((res) => res.json())
      .then((json: { status: string; result: cfUserRating[] }) => {
        setData([
          {
            id: "rating",
            data: json.result.map((contest) => ({
              ...contest,
              x: new Date(contest.ratingUpdateTimeSeconds * 1000),
              y: contest.newRating,
            })),
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
        setData([
          {
            id: "rating",
            data: cfData.result.map((contest) => ({
              ...contest,
              x: new Date(contest.ratingUpdateTimeSeconds * 1000),
              y: contest.newRating,
            })),
          },
        ]);
      });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Parallax
        scaleY={[-1, 0]}
        className="-mt-[31vw] mb-24 h-[30vw] w-full origin-bottom border-[1rem] border-b-0 border-lime-400 bg-lime-400 dark:border-lime-600 dark:bg-lime-600"
        style={{
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
        }}
      ></Parallax>
      <h2
        id="hobbies"
        className="mx-auto mb-80 w-11/12 text-center text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem]"
      >
        MY HOBBIES
      </h2>
      <div className="mx-auto mb-[50vh] w-11/12 gap-2 md:w-5/6 xl:w-3/4">
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={400}
            animateOnce={true}
          >
            {/* Image source: https://pixabay.com/vectors/violin-music-musical-instrument-156558/ */}
            <img
              className="float-left h-80 md:h-96"
              src="/hobbies/violin.svg"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <h3 className="mb-6 text-5xl sm:text-6xl md:text-[4rem] lg:mb-6 lg:text-[5rem]">
              The Viola
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            delay={200}
            animateOnce={true}
          >
            <p className="sm:text-lg lg:text-xl">
              I started playing the viola back in sixth grade. As someone whose
              musical experience up until that point was playing the recorder in
              elementary school, the experience was quite different from what I
              was used to. Despite that, I enjoyed playing the viola (and later
              the violin, as the two are fairly interchangable). I imagine that
              there was just something about playing an instrument that let me
              express a side of myself that could not florish in STEM-related
              coursework. Now, I serve as a violist in the Purdue Bands and
              Orchestras and absolutely love it. Everyone there shares a passion
              for music and has the drive to play at their best. Music is
              something I'll carry with me beyond college for many, many years
              to come.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="mx-auto mb-[50vh] gap-2 md:w-5/6 xl:w-3/4">
        <div className="mx-auto w-11/12 md:w-full">
          <ScrollAnimation
            animateIn="fadeInRight"
            delay={400}
            animateOnce={true}
          >
            {/* Image source: https://pixabay.com/vectors/anatomy-biology-brain-thought-mind-1751201/ */}
            <img
              className="mx-auto h-80 md:float-right md:h-56 lg:h-80"
              src="/hobbies/cp.svg"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h3 className="mb-6 text-5xl sm:text-5xl md:text-[4rem] lg:mb-6 lg:text-[5rem]">
              Competitive Programming
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={200}
            animateOnce={true}
          >
            <p className="sm:text-lg lg:text-xl">
              A friend of mine first introduced competitive programming
              (abbreviated by the community as CP) to me during high school with
              USACO. I had no idea what the concept even was, but it sounded
              like a good opportunity to improve my programming skills. Once I
              began, I was hooked. There was just something about the ability to
              reason through complex problems to come up with elegant solutions
              that really caught my eye. I used all sorts of websites, from
              USACO to Kattis to Codeforces. I learned all sorts of concepts,
              from binary search to union-find to topological sorting. And
              through it all, I have come to appreciate the sheer complexity of
              the field. I recently took a CP course at Purdue which I really
              enjoyed, and I hope to take another soon. I've embedded a
              visaulization of my Codeforces contest participations below. I
              hope you find it as interesting as I did!
            </p>
          </ScrollAnimation>
        </div>
        {data && (
          <ScrollAnimation animateIn="fadeInUp" delay={0} animateOnce={true}>
            <div className="mx-auto mt-8 h-[42rem]">
              <ResponsiveLine
                useMesh={true}
                colors={{ scheme: "paired" }}
                pointSize={10}
                data={data}
                xScale={{
                  format: "%Y-%m-%d",
                  precision: "day",
                  type: "time",
                  useUTC: false,
                }}
                tooltip={(e) => (
                  <div className="border border-foreground bg-background px-2 py-1 text-foreground">
                    <h5 className="text-xs font-semibold">
                      <Link
                        href={`https://codeforces.com/contest/${
                          data[0].data[e.point.index]?.contestId ?? ""
                        }/standings`}
                      >
                        Contest {data[0].data[e.point.index]?.contestId ?? ""}
                      </Link>
                      <p className="text-xs">
                        Rank: {data[0].data[e.point.index]?.rank ?? ""}
                      </p>
                      <p className="text-xs">
                        {data[0].data[e.point.index]?.oldRating ?? ""} &rarr;{" "}
                        {data[0].data[e.point.index]?.newRating ?? ""}
                      </p>
                    </h5>
                  </div>
                )}
                xFormat="time:%Y-%m-%d"
                margin={{ top: 50, right: 60, bottom: 96, left: 60 }}
                axisBottom={{
                  format: "%Y-%m-%d",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: -45,
                  tickValues: "every 3 months",
                  legend: "Date",
                  legendOffset: 72,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Codeforces Rating",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                theme={{
                  text: {
                    fill: darkMode.value ? "white" : "black",
                    fontSize: 12,
                  },
                }}
              />
            </div>
          </ScrollAnimation>
        )}
      </div>
      <div className="mx-auto mb-[50vh] w-11/12 gap-2 md:w-5/6 xl:w-3/4">
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={400}
            animateOnce={true}
          >
            {/* Image source: https://www.dropbox.com/sh/0mdu6zwzlkncu5a/AAAkreGuTFr1DgAsNIb88Lopa/Icons?preview=Clan_Wars_App_Icon_2020_App_Store_Format.png */}
            <img
              className="float-left h-40 pr-3 sm:h-52 sm:pr-4 md:h-60 xl:h-80 xl:pb-4 xl:pr-8"
              src="/hobbies/cr.webp"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <h3 className="mb-6 text-5xl sm:text-6xl md:text-[4rem] lg:mb-6 lg:text-[5rem]">
              Clash Royale
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            delay={200}
            animateOnce={true}
          >
            <p className="sm:text-lg lg:text-xl">
              I have played Clash Royale for over four years now, and in that
              time, it has become my favorite video game. I've clinched
              nail-biting victories and choked winning games countless times,
              but through it all, I have come to appreciate what this game has
              given me. I'd consider myself a decent player, having earned one
              top 10k finish and two classic challenge wins, and yet I feel that
              there is so much left to learn. I credit the Clash Royale API as
              the tool that made many of my applications possible. But most
              importantly, I have come to be a part of an amazing community. I
              am currently a Discord admin of a war-focused clan family server
              with 1000+ members, and the people I have met there have the game
              all the more enjoyable. I foresee myself continuing to play the
              game into the foreseeable future. And who knows, maybe I'll see
              you in the arena!
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="mx-auto mb-[50vh] gap-2 md:w-5/6 xl:w-3/4">
        <div className="mx-auto w-11/12 md:w-full">
          <ScrollAnimation
            className="fill-blue-500"
            animateIn="fadeInRight"
            delay={400}
            animateOnce={true}
          >
            {/* Image source: https://pixabay.com/vectors/weight-sport-crossfit-training-1399281/ */}
            <img
              className="mx-auto h-80 md:float-right md:h-56 lg:h-80"
              src="/hobbies/gym.svg"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h3 className="mb-6 text-5xl sm:text-5xl md:text-[4rem] lg:mb-6 lg:text-[5rem]">
              Staying Active
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={200}
            animateOnce={true}
          >
            <p className="sm:text-lg lg:text-xl">
              I'm a huge fan of getting out of the house and staying active.
              Having worked so hard to keep my mind in peak condition, I decided
              it was time to do the same with the rest of my body. I don't do
              anything fancy, just bench, pull-ups, and squats. Over time, I've
              noticed my body becoming stronger, and that drives me to keep on
              going and keep on getting those gains. I still try to be active
              outside the gym, and you can often catch me playing sports like
              tennis and soccer with my friends. We're not professionals at
              these sports by any means, but it helps us stay active, and we
              always have a good time.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="mx-auto mb-[75vh] w-11/12 gap-2 md:w-5/6 xl:w-3/4">
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={400}
            animateOnce={true}
          >
            {/* Image source: https://pixabay.com/illustrations/playing-cards-card-game-hearts-7559877/ */}
            <img
              className="float-left h-40 pr-3 sm:h-52 sm:pr-4 md:h-60 xl:h-80 xl:pb-4 xl:pr-8"
              src="/hobbies/royal_flush.png"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <h3 className="mb-6 text-5xl sm:text-6xl md:text-[4rem] lg:mb-6 lg:text-[5rem]">
              Poker
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            delay={200}
            animateOnce={true}
          >
            <p className="sm:text-lg lg:text-xl">
              I've recently gotten into playing poker, courtesy of Purdue's
              quant club. I find the game fascinating and complex, just like
              chess, a game which I used to play competitively in my youth. From
              folding pre-flop to river showdowns, each phase of the game brings
              its own set of concepts to understand. I wouldn't call myself a
              good player but I'm always looking to improve. While I mainly play
              no-limit hold 'em, I also play other variants like pot-limit
              Omaha. My current goal is to study NLHE theory to become a winning
              poker player. There's a whole world of information out there, and
              I can't wait to explore it all!
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
