import { cn } from "~lib/utils";
import LogoSvg from "~components/LogoSvg";
import {
  GithubLogoIcon,
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
              <a href="#" className="group hover:text-tertiary/70">
                <UserSquareIcon
                  size={24}
                  className="mr-1 inline group-hover:scale-110"
                />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <LogoSvg className="w-15 justify-self-center" />
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <a
            href="https://github.com/spinozanilast/wikie-website"
            className="link hover:text-tertiary/70"
          >
            <GithubLogoIcon className="inline" size={24} />
            Source
          </a>
          <h1 className="font-bold">(C) 2026 Spinozanilast</h1>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
