import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  id: string;
  icon: Icon;
  children: ReactNode;
  className?: string;
};

function TitledSection(props: SectionProps) {
  return (
    <section
      id={props.id}
      className="mb-5 flex min-h-dvh max-w-full flex-col overflow-x-clip font-departuremono"
    >
      <h1 className="sm-dm-4 flex w-full items-center justify-center gap-4 bg-secondary py-2 text-center text-dm-6 font-bold uppercase">
        {props.icon && <props.icon size={54} />} {props.title}
      </h1>
      <div className="flex flex-1 flex-col">
        <div className={props.className}>{props.children}</div>
      </div>
    </section>
  );
}

export default TitledSection;
