import React from "react";
import { NavBar } from "./nav-bar";
import { RoundedShape } from "./rounded-shape";
import { HighlightedText } from "./HighlightedText";
import { ContactSection } from "./contact-section";

export const FooterWrapper = ({ ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer className="flex flex-col  gap-4 max-w-5xl mx-auto" {...props} />
  );
};

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContactSection />
      <div className="flex justify-center  mx-auto gap-12">
        <RoundedShape>
          <HighlightedText text1="AVGM" text2="Durango" />
          <div className="flex">
            <NavBar className="flex-col gap-2 items-start text-sixth font-normal text-sm">
              <NavBar.Item>Privacy Policy</NavBar.Item>
              <NavBar.Item>Terms of Service</NavBar.Item>
              <NavBar.Item>Contact Us</NavBar.Item>
            </NavBar>
            <NavBar className="flex-col gap-2 items-start text-sixth font-normal text-sm">
              <NavBar.Item>Privacy Policy</NavBar.Item>
              <NavBar.Item>Terms of Service</NavBar.Item>
              <NavBar.Item>Contact Us</NavBar.Item>
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
          <h2 className="text-3xl  font-semibold">
            Si vives violencia, no estás sola. Denunciar es un acto de valentía.
            Acércate a nuestros módulos de atención.
          </h2>
        </RoundedShape>
      </div>
    </FooterWrapper>
  );
};
