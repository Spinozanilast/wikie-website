import type { ReactNode } from "react";

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
  return (
    <div className="grid w-full grid-cols-2 grid-rows-1 items-center gap-2 p-4">
      <div
        className={`z-1 flex flex-col gap-4`}
        style={{ transform: `rotate(${descriptionRotation}deg)` }}
      >
        <h1 className="bg-tertiary/60 p-2 text-center text-[clamp(1rem,5cqi,3rem)] uppercase">
          <span className="font-bold italic">{props.number}.</span> {props.name}
        </h1>
        {props.descripton}
      </div>
      <div
        className="group relative z-0 w-full max-w-full place-items-center-safe overflow-hidden"
        style={{ transform: `rotate(${imageAreaRotation}deg)` }}
      >
        {props.imageArea}
      </div>
    </div>
  );
}

export default FeatureContent;
