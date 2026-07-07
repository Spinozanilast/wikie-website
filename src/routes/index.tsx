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

function EdgeIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="1000 1000 25599.6 25600"
    >
      <linearGradient id="a" gradientUnits="userSpaceOnUse" />
      <linearGradient
        href="#a"
        id="d"
        x1="6870"
        x2="24704"
        y1="18705"
        y2="18705"
      >
        <stop offset="0" stopColor="#0c59a4" />
        <stop offset="1" stopColor="#114a8b" />
      </linearGradient>
      <linearGradient
        href="#a"
        id="g"
        x1="16272"
        x2="5133"
        y1="10968"
        y2="23102"
      >
        <stop offset="0" stopColor="#1b9de2" />
        <stop offset=".16" stopColor="#1595df" />
        <stop offset=".67" stopColor="#0680d7" />
        <stop offset="1" stopColor="#0078d4" />
      </linearGradient>
      <radialGradient href="#a" id="e" cx="16720" cy="18747" r="9538">
        <stop offset=".72" stopOpacity="0" />
        <stop offset=".95" stopOpacity=".53" />
        <stop offset="1" />
      </radialGradient>
      <radialGradient
        href="#a"
        id="h"
        cx="7130"
        cy="19866"
        r="14324"
        gradientTransform="matrix(.14843 -.98892 .79688 .1196 -8759 25542)"
      >
        <stop offset=".76" stopOpacity="0" />
        <stop offset=".95" stopOpacity=".5" />
        <stop offset="1" />
      </radialGradient>
      <radialGradient
        href="#a"
        id="j"
        cx="2523"
        cy="4680"
        r="20243"
        gradientTransform="matrix(-.03715 .99931 -2.12836 -.07913 13579 3530)"
      >
        <stop offset="0" stopColor="#35c1f1" />
        <stop offset=".11" stopColor="#34c1ed" />
        <stop offset=".23" stopColor="#2fc2df" />
        <stop offset=".31" stopColor="#2bc3d2" />
        <stop offset=".67" stopColor="#36c752" />
      </radialGradient>
      <radialGradient
        href="#a"
        id="k"
        cx="24247"
        cy="7758"
        r="9734"
        gradientTransform="matrix(.28109 .95968 -.78353 .22949 24510 -16292)"
      >
        <stop offset="0" stopColor="#66eb6e" />
        <stop offset="1" stopColor="#66eb6e" stopOpacity="0" />
      </radialGradient>
      <path
        id="b"
        d="M24105 20053a9345 9345 0 0 1-1053 472 10202 10202 0 0 1-3590 646c-4732 0-8855-3255-8855-7432 0-1175 680-2193 1643-2729-4280 180-5380 4640-5380 7253 0 7387 6810 8137 8276 8137 791 0 1984-230 2704-456l130-44a12834 12834 0 0 0 6660-5282c220-350-168-757-535-565"
      />
      <path
        id="f"
        d="M11571 25141a7913 7913 0 0 1-2273-2137 8145 8145 0 0 1-1514-4740 8093 8093 0 0 1 3093-6395 8082 8082 0 0 1 1373-859c312-148 846-414 1554-404a3236 3236 0 0 1 2569 1297 3184 3184 0 0 1 636 1866c0-21 2446-7960-8005-7960-4390 0-8004 4166-8004 7820 0 2319 538 4170 1212 5604a12833 12833 0 0 0 7684 6757 12795 12795 0 0 0 3908 610c1414 0 2774-233 4045-656a7575 7575 0 0 1-6278-803"
      />
      <path
        id="i"
        d="M16231 15886c-80 105-330 250-330 566 0 260 170 512 472 723 1438 1003 4149 868 4156 868a5954 5954 0 0 0 3027-839 6147 6147 0 0 0 1133-850 6180 6180 0 0 0 1910-4437c26-2242-796-3732-1133-4392-2120-4141-6694-6525-11668-6525-7011 0-12703 5635-12798 12620 47-3654 3679-6605 7996-6605 350 0 2346 34 4200 1007 1634 858 2490 1894 3086 2921 618 1067 728 2415 728 2952s-271 1333-780 1990z"
      />
      <use href="#b" fill="url(#d)" />
      <use href="#b" fill="url(#e)" opacity=".35" />
      <use href="#f" fill="url(#g)" />
      <use href="#f" fill="url(#h)" opacity=".4" />
      <use href="#i" fill="url(#j)" />
      <use href="#i" fill="url(#k)" />
    </svg>
  );
}

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
