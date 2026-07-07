import { cn } from "~lib/utils";
import LogoSvg from "~components/LogoSvg";
import {
  GithubLogoIcon,
  HeartStraightIcon,
  HouseIcon,
  ListStarIcon,
  PathIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const FooterLinks: { title: string; href: string; icon: Icon }[] = [
  { title: "Home", href: "#", icon: HouseIcon },
  { title: "Features", href: "#features", icon: ListStarIcon },
  { title: "Roadmap", href: "#roadmap", icon: PathIcon },
  { title: "Contacts", href: "#contacts", icon: UserSquareIcon },
];

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "m-2 flex items-center justify-center gap-4 rounded-t-md bg-secondary px-2 py-4 font-departuremono",
        className,
      )}
    >
      <div className="flex w-fit grid-cols-[1fr_1fr_1fr] flex-col gap-2 sm:grid">
        <div className="h-full">
          <ul className="mx-auto flex h-full flex-col items-center justify-center gap-2 text-right text-sm sm:mx-0 sm:flex-row">
            {FooterLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="group flex flex-col items-center justify-center hover:text-tertiary/70 lg:flex-row"
                >
                  <link.icon
                    size={24}
                    className="mr-1 inline group-hover:scale-110"
                  />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-2 text-center text-balance">
          <LogoSvg className="w-15 justify-self-center" />
          <p className="text-xs">
            <HeartStraightIcon className="mb-1 inline text-red-700" size={16} />{" "}
            thanks{" "}
            <a
              className="link whitespace-nowrap text-tertiary"
              href="https://getindie.wiki/"
              target="_blank"
            >
              Indie Wiki Buddy
            </a>{" "}
            extension <b>community</b> from{" "}
            <a
              className="link whitespace-nowrap text-tertiary"
              href="https://kevin.payravi.dev/"
              target="_blank"
            >
              Kevin Payravi
            </a>{" "}
            for <b>independent wiki data</b>
          </p>
          <p className="mt-2 hidden border-t-2 border-dashed border-tertiary/50 pt-2 text-xs text-balance italic md:block">
            * extension or this site are not affiliated with steam or any other
            organization
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 place-self-center sm:items-end">
          <div className="text-right">
            <GithubLogoIcon className="inline" size={24} />
            <a
              href="https://github.com/spinozanilast/wikie"
              className="link hover:text-tertiary/70"
              target="_blank"
            >
              Source
            </a>
            /
            <a
              href="https://github.com/spinozanilast/wikie-website"
              className="link hover:text-tertiary/70"
              target="_blank"
            >
              Website Source
            </a>
          </div>
          <h1 className="text-right font-bold">
            (C) 2026{" "}
            <a
              className="link text-tertiary"
              href="https://spinozanilast.vercel.app"
              target="_blank"
            >
              Spinozanilast
            </a>
          </h1>
          <p className="mt-2 block border-t-2 border-dashed border-tertiary/50 pt-2 text-center text-xs text-balance italic md:hidden">
            * extension or this site are not affiliated with steam or any other
            organization
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
