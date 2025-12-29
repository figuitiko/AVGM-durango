"use client";

import { cn } from "@/lib/utils";
import { TopBar } from "./top-bar";
import Image from "next/image";
import { NavBar, NavBarWrapper } from "./nav-bar";
import { HighlightedText } from "./HighlightedText";
import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  children?: React.ReactNode;
} & React.ComponentProps<"header">;

export const HeaderWrapper = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        "flex flex-col w-full relative md:sticky top-0 z-50 bg-main",
        className
      )}
      {...props}
    />
  );
};

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <HeaderWrapper>
      <TopBar className="flex-wrap gap-6 md:gap-36 px-4">
        <TopBar.Item>
          <picture className="w-79.75  h-24  relative">
            <Image src="/images/gob-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
        <TopBar.Item className="self-center">
          <picture className="w-52.5 h-16 relative">
            <Image src="/images/iem-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
        <TopBar.Item>
          <picture className="w-42 h-20 relative">
            <Image src="/images/avgm-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
      </TopBar>

      {/* Desktop nav */}
      <NavBarWrapper className="hidden lg:flex">
        <NavBar>
          <NavBar.Item>
            <Link href="/#about">Nosotros</Link>
          </NavBar.Item>
          <NavBar.Item>
            <Link href="/#consult-links">Consulta</Link>
          </NavBar.Item>
          <NavBar.Item>
            <Link href="/#contact">Contacto</Link>
          </NavBar.Item>
        </NavBar>
        <Link href="/" className="mx-8">
          <HighlightedText text1="AVGM" text2="Durango" />
        </Link>
        <NavBar>
          <NavBar.Item>
            <Link href="/maps">Mapas</Link>
          </NavBar.Item>
          <NavBar.Item>
            <Link href="/documents">Documentos</Link>
          </NavBar.Item>

          <NavBar.Item>
            <Link href="/links">Vinculos</Link>
          </NavBar.Item>
        </NavBar>
      </NavBarWrapper>

      {/* Mobile nav */}
      <div className="md:hidden border-b border-black/10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="mx-8">
            <HighlightedText text1="AVGM" text2="Durango" />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-black/15 bg-white p-2"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className="px-4 pb-4">
            <ul className="grid gap-1 text-secondary-custom font-semibold font-montserrat">
              <li>
                <Link
                  href="/#about"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#consult-links"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Consulta
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto
                </Link>
              </li>
              <li className="h-px bg-black/10 my-1" />
              <li>
                <Link
                  href="/maps"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Mapas
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  href="/links"
                  className="block rounded-md px-3 py-2 bg-white/0 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Vinculos
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </HeaderWrapper>
  );
};
