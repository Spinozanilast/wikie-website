import type { Icon } from "@phosphor-icons/react";

type ContactProps = {
  href: string;
  text: string;
  icon: Icon;
  backgroundColor: string;
};

function Contact(props: ContactProps) {
  return (
    <a
      className="link xl group min-w-3/4 hover:scale-105 md:min-w-96"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="flex flex-col items-center rounded-md p-4 text-dm-1.5 md:text-dm-2"
        style={{
          backgroundColor: props.backgroundColor,
        }}
      >
        <props.icon size={64} className="group-hover:text-background" />{" "}
        {props.text}
      </div>
    </a>
  );
}
export default Contact;
