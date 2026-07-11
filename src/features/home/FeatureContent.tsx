import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import useMediaQuery from "~/hooks/useMediaQuery";

type FeatureContentProps = {
  number: number;
  name: string;
  descripton: ReactNode;
  imageArea: ReactNode;
  rotations?: {
    description?: number;
    imageArea?: number;
  };
};

function FeatureContent({
  rotations: {
    description: descriptionRotation = 0,
    imageArea: imageAreaRotation = 0,
  } = {},
  ...props
}: FeatureContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery();

  useEffect(() => {
    if (!containerRef) return;

    if (isMobile) {
      containerRef.current?.style.setProperty("--description-rotation", "0");
      containerRef.current?.style.setProperty("--image-area-rotation", "0");
    } else {
      containerRef.current?.style.setProperty(
        "--description-rotation",
        `${descriptionRotation}deg`,
      );
      containerRef.current?.style.setProperty(
        "--image-area-rotation",
        `${imageAreaRotation}deg`,
      );
    }
  }, [isMobile, containerRef]);

  return (
    <div
      className="grid w-full grid-cols-2 grid-rows-1 items-center gap-2 p-4"
      ref={containerRef}
    >
      <div
        className={`z-1 flex flex-col gap-4`}
        style={{ transform: `rotate(var(--description-rotation))` }}
      >
        <h1 className="bg-tertiary/60 p-2 text-center text-[clamp(1rem,5cqi,3rem)] uppercase">
          <span className="font-bold italic">{props.number}.</span> {props.name}
        </h1>
        {props.descripton}
      </div>
      <div
        className="group relative z-0 w-full max-w-full place-items-center-safe overflow-hidden"
        style={{ transform: `rotate(var(--image-area-rotation))` }}
      >
        {props.imageArea}
      </div>
    </div>
  );
}

export default FeatureContent;
