import Link from "next/link";
import type { MenuItemProps } from "./types";

const MenuItem = ({
  href,
  selected = false,
  children,
  targetBlank = false,
}: MenuItemProps) => {
  return (
    <li
      className={`hover:text-white list-none ${
        selected ? " border-red-600 border-b-4 text-white" : "text-zinc-300"
      }`}
    >
      <Link href={href} target={targetBlank ? "_blank" : "_self"}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
