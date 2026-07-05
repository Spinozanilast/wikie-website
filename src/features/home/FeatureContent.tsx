import type { ReactNode } from "react";

type FeatureContentProps = {
  number: number;
  name: string;
  descripton: ReactNode;
  imageArea: ReactNode;
};

function FeatureContent(props: FeatureContentProps) {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-1 items-center gap-2 p-4">
      <div className="z-1 flex -rotate-3 flex-col gap-4">
        <h1 className="bg-tertiary/60 p-2 text-center text-[clamp(1rem,5cqi,3rem)] uppercase">
          <span className="font-bold italic">{props.number}</span> {props.name}
        </h1>
        {props.descripton}
      </div>
      <div className="group relative z-0 w-full max-w-full rotate-4 place-items-center-safe overflow-hidden">
        {props.imageArea}
      </div>
    </div>
  );
}

export default FeatureContent;
