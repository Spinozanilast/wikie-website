import { createFileRoute } from "@tanstack/react-router";
import ThemeToggle from "~components/theme/ThemeToggle";
import BannerImgUrl from "/banner.png";
import WikisBannerImgUrl from "/wikis_banner.png";
import LogoSvg from "~components/LogoSvg";
import { PuzzlePieceIcon } from "@phosphor-icons/react/dist/csr/PuzzlePiece";
import {
  SiGooglechrome,
  SiFirefoxbrowser,
  SiGooglechromeHex,
  SiFirefoxbrowserHex,
  SiSteam,
  SiSteamdb,
} from "@icons-pack/react-simple-icons";

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
    <div className="font-departuremono w-full h-full flex justify-center items-center">
      <ThemeToggle className="absolute top-2 right-2" />
      <div className="flex items-center justify-center flex-col gap-4 p-4">
        <div className="w-full lg:w-[50%] group">
          <div className="bg-contrast-background rounded-md relative">
            <img
              src={BannerImgUrl}
              alt="Banner"
              className="rounded-md w-full h-auto block"
            />
            <img
              src={WikisBannerImgUrl}
              alt="Wikkis extended banner"
              className="rounded-md w-full h-auto absolute inset-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 scale-114 translate-y-[-6.25%] translate-x-[-0.7%] bottom-0"
            />
          </div>
          <div className="bg-amber-400 w-full h-full z-10"></div>
        </div>
        <div className="flex gap-4 items-center">
          <LogoSvg className="w-30 h-30" />
          <h1 className="text-9xl font-pixelify text-shadow-[0px_4px_var(--color-tertiary)]">
            <span>WIKI</span>
            <span>e</span>
          </h1>
        </div>
        <div className="max-w-[75%] text-balance text-center">
          <h2 className="text-2xl">
            <div className="inline-flex gap-3 relative group">
              <b>Browser extension</b>{" "}
              <div className="pointer-events-none inline-flex absolute left-1/2 translate-x-[-50%] opacity-0 transition-all duration-300 bottom-5 group-hover:opacity-100 group-hover:bottom-13 p-2 rounded-md bg-tertiary/50  backdrop-blur-sm ">
                <SiGooglechrome color={SiGooglechromeHex} size={30} /> /{" "}
                <SiFirefoxbrowser color={SiFirefoxbrowserHex} size={30} /> /{" "}
                <EdgeIcon size={30} />
              </div>
            </div>{" "}
            <PuzzlePieceIcon
              weight="duotone"
              color="var(--color-tertiary)"
              className="inline"
              size={40}
            />{" "}
            that allow you to be on short with wiki world on gaming where you
            are on:
          </h2>
        </div>
        <div className="flex items-center w-full justify-center gap-4">
          <SiSteam size={60} />
          <SiSteamdb size={60} />
        </div>
      </div>
    </div>
  );
}
