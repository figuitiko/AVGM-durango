import { cn } from "@/lib/utils";
import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
} & React.ComponentProps<"section">;
export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      className={cn("flex flex-col px-32 py-12 gap-8 max-w-7xl", className)}
    >
      {children}
    </section>
  );
};
