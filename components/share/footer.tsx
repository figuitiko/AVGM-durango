import React from "react";
import { NavBar } from "./nav-bar";
import { RoundedShape } from "./rounded-shape";
import { HighlightedText } from "./HighlightedText";
import { ContactSection } from "./contact-section";
import Link from "next/link";

export const FooterWrapper = ({ ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer
      className="flex flex-col flex-wrap  gap-12 max-w-5xl mx-auto px-4"
      {...props}
    />
  );
};

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContactSection />
      <div className="flex md:flex-row flex-col justify-center  mx-auto gap-12">
        <RoundedShape>
          <HighlightedText text1="AVGM" text2="Durango" />
          <div className="flex">
            <NavBar className="flex-col gap-2 items-start text-sixth font-normal text-sm">
              <NavBar.Item>
                <Link href="/">Inicio</Link>
              </NavBar.Item>
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
            <NavBar className="flex-col gap-2 items-start text-sixth font-normal text-sm">
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
          </div>
          <span className="text-eighth text-sm">
            &copy; {`[${new Date().getFullYear()}]`} Gobierno del estado de
            Durango.
          </span>
        </RoundedShape>

        <RoundedShape
          color="secondary"
          className="flex-1 justify-center text-white"
        >
          <h2 className="text-lg md:text-3xl  font-semibold">
            Si vives violencia, no estás sola. Denunciar es un acto de valentía.
            Acércate a nuestros módulos de atención.
          </h2>
        </RoundedShape>
      </div>
    </FooterWrapper>
  );
};
