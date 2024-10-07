import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          url="https://twitter.com/princelisee"
          name="@princelisee"
          image="https://www.manaschool.net/assets/img/team/mbobnda.png"
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MMd7HIOliIXVDA6zNsArJwHaHa%26pid%3DApi&f=1&ipt=4d49a10980c6a841d36b317bd3363e472b88cc757ed6034771abeccede58b62a&ipo=images"
          description="1000"
        />
        <ContactCard
          url="https://github.com/princorobot"
          name="Mbobnda Prince Elisee"
          image="https://media.licdn.com/dms/image/v2/D4E35AQFY8uWdoS6seg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726674071929?e=1727280000&v=beta&t=dOs-767hWOzSkYtHL_noEQzDdAJR-z1e3q2QYWxB50M"
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-icons-5%2F606%2FLinkedIn.png&f=1&nofb=1&ipt=5f9eb209049803d27efe2747388acd4d446926f46cb9c279671a19e4c9224c92&ipo=images"
          description="4000"
        />
        <ContactCard
          url="mailto:elisee.mbobnda@gmail.com"
          name="elisee.mbobnda@gmail.com"
          image="https://media.licdn.com/dms/image/v2/D4E35AQFY8uWdoS6seg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726674071929?e=1727280000&v=beta&t=dOs-767hWOzSkYtHL_noEQzDdAJR-z1e3q2QYWxB50M"
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F484%2F516%2Foriginal%2Fgoogle-mail-gmail-icon-logo-symbol-free-png.png&f=1&nofb=1&ipt=fbf13e3f99dc0a25a3297eb07a96ea05c10abc14c09bf9e610fdc3b4530837bd&ipo=images"
          description="Email me"
        />
      </div>
    </Section>
  );
};
