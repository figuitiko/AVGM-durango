import { cn } from "@/lib/utils";
import { TopBar } from "./top-bar";
import Image from "next/image";
import { NavBar, NavBarWrapper } from "./nav-bar";
import { HighlightedText } from "./HighlightedText";

type HeaderProps = {
  children?: React.ReactNode;
} & React.ComponentProps<"header">;

export const HeaderWrapper = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn("flex flex-col w-full", className)} {...props} />
  );
};

export const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar>
        <TopBar.Item>
          <picture className="w-79.75  h-24  relative">
            <Image src="/images/gob-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
        <TopBar.Item className="self-center">
          <picture className="w-[210] h-16 relative">
            <Image src="/images/iem-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
        <TopBar.Item>
          <picture className="w-[168] h-20 relative">
            <Image src="/images/avgm-logo.png" alt="Logo" fill={true} />
          </picture>
        </TopBar.Item>
      </TopBar>
      <NavBarWrapper>
        <NavBar>
          <NavBar.Item>Home</NavBar.Item>
          <NavBar.Item>About</NavBar.Item>
          <NavBar.Item>Services</NavBar.Item>
          <NavBar.Item>Contact</NavBar.Item>
        </NavBar>
        <HighlightedText text1="AVGM" text2="Durango" />
        <NavBar>
          <NavBar.Item>Home</NavBar.Item>
          <NavBar.Item>About</NavBar.Item>
          <NavBar.Item>Services</NavBar.Item>
          <NavBar.Item>Contact</NavBar.Item>
        </NavBar>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};
