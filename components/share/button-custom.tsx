import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type AsChildProps = {
  asChild: true;
  children: React.ReactNode;
  className?: string;
};
type TextProps = { text: string; className?: string };

type Props = TextProps | AsChildProps;

const ButtonCustom = (props: Props) => {
  if ("asChild" in props) {
    const { asChild, children } = props;
    return (
      <Button variant="custom" asChild={asChild} className={props.className}>
        {children}
      </Button>
    );
  }
  return (
    <Button variant="custom" className={props.className}>
      <span className="uppercase font-bebas-neue tracking-tighter text-2xl">
        {props.text}
      </span>
    </Button>
  );
};

const LinkButtonCustom = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <ButtonCustom asChild className={className}>
      <Link href={href}>
        <span className="uppercase font-bebas-neue tracking-tighter text-lg  md:text-2xl">
          {text}
        </span>
      </Link>
    </ButtonCustom>
  );
};

export { ButtonCustom, LinkButtonCustom };
