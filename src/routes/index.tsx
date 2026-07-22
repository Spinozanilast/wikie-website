import { createFileRoute } from "@tanstack/react-router";
import {
  AtIcon,
  GithubLogoIcon,
  ListStarIcon,
  PathIcon,
  PuzzlePieceIcon,
  TelegramLogoIcon,
  UserSquareIcon,
} from "@phosphor-icons/react";
import {
  SiGooglechrome,
  SiFirefoxbrowser,
  SiGooglechromeHex,
  SiFirefoxbrowserHex,
  SiSteam,
  SiSteamdb,
  SiTelegramHex,
  SiGmailHex,
  SiGithubHex,
} from "@icons-pack/react-simple-icons";

import BannerImgUrl from "/banner.png";
import WikisBannerImgUrl from "/wikis_banner.png";
import FirstPosterSvg from "~assets/posters/first/poster.svg?react";
import FirstPosterImgSrc from "~assets/posters/first/poster_reference.png";
import SecondPosterSvg from "~assets/posters/second/poster.svg?react";
import SecondPosterSvgReference from "~assets/posters/second/poster_reference.svg?react";
import ThirdPosterSvg from "~assets/posters/third/poster.svg?react";
import ThirdPosterImgSrc from "~assets/posters/third/poster_reference.png";

import TitledSection from "~features/home/TitledSection";
import FeatureContent from "~features/home/FeatureContent";
import Contact from "~features/home/Contact";
import Roadmap from "~features/home/Roadmap";

import GithubLink from "~/components/GithubLink";
import Footer from "~components/Footer";
import ThemeToggle from "~components/theme/ThemeToggle";
import LogoSvg from "~components/LogoSvg";
import EdgeIcon from "~components/EdgeIcon";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section
        id="#main"
        className="flex min-h-dvh w-full items-center justify-center font-departuremono"
      >
        <div className="fixed top-2 right-2 z-10 flex items-center gap-2 rounded-md bg-secondary/10 p-2 backdrop-blur-sm">
          <GithubLink />
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="group w-full lg:w-[50%]">
            <div className="relative rounded-md bg-contrast-background">
              <img
                src={BannerImgUrl}
                alt="Banner"
                className="block h-auto w-full rounded-md"
              />
              <img
                src={WikisBannerImgUrl}
                alt="Wikkis extended banner"
                className="absolute inset-0 bottom-0 h-auto w-full translate-x-[-0.7%] translate-y-[-6.25%] scale-114 rounded-md opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-active:opacity-100"
              />
            </div>
            <div className="z-10 size-full bg-amber-400"></div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <LogoSvg className="size-20 md:size-30" />
            <h1 className="font-pixelify text-7xl text-shadow-[0px_4px_var(--color-tertiary)] md:text-9xl">
              <span>WIKI</span>
              <span>e</span>
            </h1>
          </div>
          <div className="text-center text-balance sm:max-w-[90%] md:max-w-[75%]">
            <h2 className="text-2xl">
              <div className="group relative inline-flex gap-3">
                <b>Browser extension</b>{" "}
                <div className="pointer-events-none absolute bottom-5 left-1/2 inline-flex translate-x-[-50%] rounded-md bg-tertiary/50 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bottom-17 group-hover:opacity-100 group-active:bottom-17 group-active:opacity-100 md:group-hover:bottom-13 md:group-active:bottom-13">
                  <SiGooglechrome color={SiGooglechromeHex} size={30} /> /{" "}
                  <SiFirefoxbrowser color={SiFirefoxbrowserHex} size={30} /> /{" "}
                  <EdgeIcon size={30} />
                </div>
              </div>{" "}
              <PuzzlePieceIcon
                color="var(--color-tertiary)"
                className="inline"
                size={40}
              />{" "}
              that allow you to be on short with wiki world on gaming where you
              are on:
            </h2>
          </div>
          <div className="relative flex w-full items-center justify-center gap-4 rounded-md bg-secondary px-2 py-3 md:w-fit">
            <SiSteam size={60} className="svg-path-animation" />
            <SiSteamdb size={60} className="svg-path-animation" />
          </div>
        </div>
      </section>
      <TitledSection
        id="features"
        classNames={{ container: "mt-5" }}
        icon={ListStarIcon}
        title="Features"
      >
        <FeatureContent
          number={1}
          name="Get possible wikis links"
          placeSeparatorAfter
          descripton={
            <ul className="flex flex-col gap-4 text-dm-2">
              <li className="flex gap-2 text-justify align-super">
                <h2 className="text-tertiary">1*</h2>
                Here you can see name of the game you watching at the page now,
                founded <b>wikis count</b> and <b>wikipedia</b> with{" "}
                <b>steam/steamdb</b> links.
              </li>
              <li className="flex gap-2 text-justify align-super">
                <h2 className="text-tertiary">2*</h2>
                There are main wiki links (the <b>official one</b> and{" "}
                <b>origin one's</b>)
              </li>
              <li className="flex gap-2 text-justify align-super">
                <h2 className="text-tertiary">3*</h2>
                There are may be a lot of wikis for some <b>
                  related games
                </b>{" "}
                (e.g. modded versions, fan-made wikis, etc.) with their origins.
              </li>
            </ul>
          }
          imageArea={
            <>
              <SecondPosterSvg />
              <div className="max-w-1/2">
                <SecondPosterSvgReference className="pointer-events-none absolute top-0 left-1/2 hidden w-full -translate-x-1/2 group-hover:block" />
              </div>
            </>
          }
          rotations={{ description: -3, imageArea: 3 }}
        />
        <FeatureContent
          number={2.1}
          name="Get the things you may need now in corners"
          placeSeparatorAfter
          descripton={
            <div>
              This is default <b>display mode</b>. All the time you go to{" "}
              <SiSteam className="inline" size={32} /> or{" "}
              <SiSteamdb className="inline" size={32} /> <i>(for now)</i> sites,
              you will see the panel on the left bottom corner{" "}
              <i>(you could also change the corner)</i>
            </div>
          }
          imageArea={
            <>
              <FirstPosterSvg />
              <img
                src={FirstPosterImgSrc}
                alt="First Poster"
                className="pointer-events-none absolute top-0 left-0 hidden w-full group-hover:block"
              />
            </>
          }
          rotations={{
            description: 2,
            imageArea: -2,
          }}
        />
        <FeatureContent
          number={2.2}
          name="Get the things you may need now"
          descripton={
            <div>
              <i>
                This is an alternative <b>display mode</b>. In{" "}
                <SiSteamdb className="inline" size={32} /> you can find wikis in
                links line, in <SiSteam className="inline" size={32} /> you can
                find wikis under the game name.
              </i>
            </div>
          }
          imageArea={
            <>
              <ThirdPosterSvg />
              <img
                src={ThirdPosterImgSrc}
                alt="Third Poster"
                className="pointer-events-none absolute top-0 left-1/2 hidden w-full -translate-x-1/2 group-hover:block"
              />
            </>
          }
          rotations={{
            imageArea: -3,
            description: 3,
          }}
        />
      </TitledSection>
      <TitledSection
        title="Roadmap"
        id="roadmap"
        icon={PathIcon}
        classNames={{
          container: "flex w-full items-center justify-center mt-4",
        }}
      >
        <Roadmap />
      </TitledSection>
      <TitledSection
        title="Contacts"
        id="contacts"
        icon={UserSquareIcon}
        classNames={{
          section: "min-h-fit",
          container: "flex w-full items-center justify-center mt-4",
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Contact
            href={"https://t.me/spinozanilast"}
            text={"@spinozanilast"}
            icon={TelegramLogoIcon}
            backgroundColor={`${SiTelegramHex}`}
          />
          <Contact
            href={"mailto:spinozanilast@gmail.com"}
            text={"spinozanilast@gmail.com"}
            icon={AtIcon}
            backgroundColor={`${SiGmailHex}`}
          />
          <Contact
            href={"https://github.com/spinozanilast"}
            text={"spinozanilast"}
            icon={GithubLogoIcon}
            backgroundColor={`${SiGithubHex}90`}
          />
        </div>
      </TitledSection>
      <Footer />
    </>
  );
}
