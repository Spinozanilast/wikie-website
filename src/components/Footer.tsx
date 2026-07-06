import { cn } from "~lib/utils";
import LogoSvg from "~components/LogoSvg";
import {
  GithubLogoIcon,
  HeartStraightIcon,
  HouseIcon,
  ListStarIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";

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
            <li>
              <a href="#" className="group hover:text-tertiary/70">
                <HouseIcon
                  size={24}
                  className="mr-1 inline group-hover:scale-110"
                />
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="group hover:text-tertiary/70">
                <ListStarIcon
                  size={24}
                  className="mr-1 inline group-hover:scale-110"
                />
                Features
              </a>
            </li>
            <li>
              <a href="#contacts" className="group hover:text-tertiary/70">
                <UserSquareIcon
                  size={24}
                  className="mr-1 inline group-hover:scale-110"
                />
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="m-2 text-center text-balance">
          <LogoSvg className="w-15 justify-self-center" />
          <p className="text-xs">
            <HeartStraightIcon className="mb-1 inline text-red-700" size={16} />{" "}
            thanks{" "}
            <a
              className="link text-tertiary"
              href="https://getindie.wiki/"
              target="_blank"
            >
              Indie Wiki Buddy
            </a>{" "}
            extension <b>community</b> from{" "}
            <a
              className="link text-tertiary"
              href="https://kevin.payravi.dev/"
              target="_blank"
            >
              Kevin Payravi
            </a>{" "}
            for <b>independent wiki data</b>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 place-self-center sm:items-end">
          <a
            href="https://github.com/spinozanilast/wikie-website"
            className="link hover:text-tertiary/70"
          >
            <GithubLogoIcon className="inline" size={24} />
            Source
          </a>
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
        </div>
      </div>
    </footer>
  );
}
export default Footer;
