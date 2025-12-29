import Image from "next/image";
import { RoundedShape, RoundedShapeProps } from "./rounded-shape";
import { ReactNode } from "react";

export const HeroWrapper = ({
  children,
  color = "secondary",
}: {
  children: ReactNode;
  color?: RoundedShapeProps["color"];
}) => {
  return (
    <RoundedShape color={color}>
      <div className="relative flex items-center justify-center flex-1 mx-auto w-full min-h-60 md:min-h-80">
        <Image
          src="/images/map-empty.png"
          alt="Hero background"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain opacity-5"
        />

        <div className="pointer-events-none max-w-2xl flex flex-col justify-center items-center w-full">
          {children}
        </div>
      </div>
    </RoundedShape>
  );
};
