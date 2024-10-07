/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Code } from "./Code";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl">Mbobnda Prince</h2>
        <h3 className="text-3xl font-caption">
          Software developper and Data analyst
        </h3>
        <p className="text-base">
          I love creating content on{" "}
          <Link href="https://twitter.com/princelisee">
            <Code className="inline-flex items-center gap-1">
              <TwitterIcon size={16} className="inline" /> Twitter
            </Code>
          </Link>
          . Living in{" "}
          <Link href="https://twitter.com/princelisee">
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://duckduckgo.com/i/1d311d8b5bcf4c97.png"
                alt="Flag cameroon"
                style={{ width: 16, height: "auto" }}
              />
              Cameroon
            </Code>
          </Link>
          . My career path has allowed me to develop expertise in both software
          development and data science, allowing me to turn ideas into
          functional products and derive valuable insights from data.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://www.manaschool.net/assets/img/team/mbobnda.png"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="monportrait"
        />
      </div>
    </Section>
  );
};
