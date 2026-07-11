import { useEffect, useState } from "react";

function useMediaQuery({
  mediaQuery = "(max-width: 768px)",
}: {
  mediaQuery?: string;
} = {}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const smDeviceMedia = window.matchMedia(mediaQuery);
    const handleDeviceChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    smDeviceMedia.addEventListener("change", handleDeviceChange);
    return () => {
      smDeviceMedia.removeEventListener("change", handleDeviceChange);
    };
  }, [mediaQuery]);

  return isMobile;
}

export default useMediaQuery;
