import { cn } from "~lib/utils";

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "m-2 flex items-center justify-center rounded-md bg-secondary px-2 py-4",
        className,
      )}
    ></footer>
  );
}
export default Footer;
