import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { BlenderLogo } from "./icons/BlenderLogo";
import { DjangoLogo } from "./icons/DjangoLogo";
import { PhotoshopLogo } from "./icons/PhotoshopLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex flex-wrap max-md:flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <ReactLogo
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <PhpLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Php</h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">
              TailwindCss
            </h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <DjangoLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Django</h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <PhotoshopLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Photoshop</h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <BlenderLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Blender</h3>
            <p className="text-sm text-muted-foreground">
              My main framwork is <Code>React</Code>. I also use{" "}
              <Code>Next.js</Code> as a backend and front-end framework.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
