import BannerImgUrl from "/banner.png";
import WikisBannerImgUrl from "/wikis_banner.png";
import LogoSvg from "~components/LogoSvg";

export function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 md:flex-row">
      <div className="group z-10 w-[95%] md:w-3/4 lg:w-1/2">
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
      </div>
      <div className="z-20 flex flex-col items-center justify-center text-left font-departuremono text-dm-2 md:items-start md:text-dm-3">
        <a href="/">
          <LogoSvg className="w-20" />
        </a>
        <h1>
          <span className="text-[clamp(2rem,3vw,3.5rem)] font-bold text-red-500 md:text-dm-8">
            404
          </span>{" "}
          Not Found
        </h1>
        <p className="text-dm-1 italic md:text-dm-2">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
