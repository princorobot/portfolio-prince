/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Link from "next/link";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full  flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://twitter.com/princelisee"
            name="@princelisee"
            image="https://media.licdn.com/dms/image/v2/D4E35AQG_OhnzhDhvSw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727437220977?e=1728928800&v=beta&t=PniZScGWcydnESTHWVSyLXsq0FOw8g5f4Eb27NNnWtM"
            mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MMd7HIOliIXVDA6zNsArJwHaHa%26pid%3DApi&f=1&ipt=4d49a10980c6a841d36b317bd3363e472b88cc757ed6034771abeccede58b62a&ipo=images"
            description="1000"
          />
          <ContactCard
            url="https://github.com/princorobot"
            name="Mbobnda Prince Elisee"
            image="https://media.licdn.com/dms/image/v2/D4E35AQG_OhnzhDhvSw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727437220977?e=1728928800&v=beta&t=PniZScGWcydnESTHWVSyLXsq0FOw8g5f4Eb27NNnWtM"
            mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-icons-5%2F606%2FLinkedIn.png&f=1&nofb=1&ipt=5f9eb209049803d27efe2747388acd4d446926f46cb9c279671a19e4c9224c92&ipo=images"
            description="4000"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "CodeLine",
    description: "A platform for developers to share their knowledge",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "A platform for developers to share their knowledge",
    url: "/",
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "A platform for developers to share their knowledge",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "Chat2Code",
    description: "A platform for developers to share their knowledge",
    url: "/",
  },
  {
    Logo: Weight,
    title: "LinkedLeads",
    description: "A platform for developers to share their knowledge",
    url: "/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={12} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "https://www.agroexploitsarl.com/assets/images/resources/logo-1.png",
    title: "Agro Exploit Sarl",
    role: "Graphic Designer",
    date: "2021 - Present",
    url: "https://www.agroexploitsarl.com/",
  },
  {
    image: "https://www.agroexploitsarl.com/assets/images/resources/logo-1.png",
    title: "Agro Exploit Sarl",
    role: "Graphic Designer",
    date: "2021 - Present",
    url: "https://www.agroexploitsarl.com/",
    freelance: true,
  },
  {
    image: "https://www.agroexploitsarl.com/assets/images/resources/logo-1.png",
    title: "Agro Exploit Sarl",
    role: "Graphic Designer",
    date: "2021 - Present",
    url: "https://www.agroexploitsarl.com/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline"> Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
