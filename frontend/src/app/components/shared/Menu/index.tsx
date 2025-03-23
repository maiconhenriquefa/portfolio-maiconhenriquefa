"use client";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const Menu = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-10">
        <MenuItem href="/" selected={path === "/"}>
          Início
        </MenuItem>
        <MenuItem href="/projeto/1" selected={path.startsWith("/projeto")}>
          Projetos
        </MenuItem>
        <MenuItem href="/contato" targetBlank>
          Contato
        </MenuItem>
      </ul>
    </nav>
  );
};

export default Menu;
