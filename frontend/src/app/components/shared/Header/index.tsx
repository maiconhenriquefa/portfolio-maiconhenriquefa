import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu";

const Header = () => {
  return (
    <header className="flex items-center h-16">
      <Container className="flex-1 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={80} height={0} />
          </Link>
          <Menu />
        </div>
        <Link
          href="https://www.linkedin.com/in/maiconhenriquefa/"
          className="hidden sm:block hover:bg-red-700 bg-red-500 rounded-full px-7 text-sm font-bold"
          target="_blank"
        >
          Perfil
        </Link>
      </Container>
    </header>
  );
};

export default Header;
