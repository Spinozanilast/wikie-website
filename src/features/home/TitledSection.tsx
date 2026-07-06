import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { cn } from "~lib/utils";

type SectionProps = {
  title: string;
  id: string;
  icon?: Icon;
  children: ReactNode;
  classNames?: {
    container?: string;
    title?: string;
    section?: string;
  };
};

function TitledSection(props: SectionProps) {
  return (
    <section
      id={props.id}
      className={cn(
        "mb-5 flex min-h-dvh max-w-full flex-col overflow-x-clip font-departuremono",
        props.classNames?.section,
      )}
    >
      <h1
        className={cn(
          "sm-dm-4 flex w-full items-center justify-center gap-4 bg-secondary py-2 text-center text-dm-4 font-bold uppercase md:text-dm-6",
          props.classNames?.title,
        )}
      >
        {props.icon && <props.icon size={54} />} {props.title}
      </h1>
      <div className={cn("flex flex-1 flex-col", props.classNames?.container)}>
        {props.children}
      </div>
    </section>
  );
}

export default TitledSection;
