import { FunnelIcon } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { cn } from "~lib/utils";

type SectionProps = {
  title: string;
  filterSection?: ReactNode;
  id: string;
  icon?: Icon;
  children: ReactNode;
  classNames?: {
    container?: string;
    title?: string;
    section?: string;
    titleContainer?: string;
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
      <div
        className={cn(
          "flex flex-col gap-2 bg-secondary",
          props.classNames?.titleContainer,
        )}
      >
        <h1
          className={cn(
            "sm-dm-4 flex w-full items-center justify-center gap-4 py-2 text-center text-dm-4 font-bold uppercase md:text-dm-6",
            props.classNames?.title,
          )}
        >
          {props.icon && <props.icon size={54} />} {props.title}
        </h1>
        {props.filterSection && (
          <div className="m-2 border-2 border-dashed border-secondary p-2">
            <FunnelIcon size={24} color="var(--color-secondary)" />
            {props.filterSection}
          </div>
        )}
      </div>
      <div className={cn("flex flex-1 flex-col", props.classNames?.container)}>
        {props.children}
      </div>
    </section>
  );
}

export default TitledSection;
