import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Section } from "./Section";

export const Header = () => {
    return (
       <header className="sticky top-0 py-4 bg-secondary-foreground/50 backdrop-blur-md">
        <Section className="flex items">
            <h1 className="text-lg font-bold text-primary-foreground">
                princo.com
            </h1>
            <div className="flex-1"></div>
            <ul className="flex items-center gap-2">
                <Link href="https://github.com/princorobot" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")} variant="outline">
                    <GithubIcon size={12} className="text-foreground"></GithubIcon>
                </Link>
                <Link href="https://twitter.com/princelisee" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")} variant="outline">
                    <TwitterIcon size={12} className="text-foreground"></TwitterIcon>
                </Link>
                <Link href="https://linkedin.com/in/prince-elisee-mbobnda" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")} variant="outline">
                    <LinkedinIcon size={12} className="text-foreground"></LinkedinIcon>
                </Link> 
            </ul>
        </Section>
       </header>
    )
};