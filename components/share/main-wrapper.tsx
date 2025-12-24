import { cn } from "@/lib/utils";
import { ReactNode } from "react";
type MainWrapperProps = {
  children: ReactNode;
} & React.ComponentProps<"main">;
export const MainWrapper = ({ className, ...props }: MainWrapperProps) => {
  return (
    <main
      className={cn(
        "flex flex-col  py-12 gap-8 min-h-[calc(100vh-600px)] max-w-5xl w-full mx-auto",
        className
      )}
      {...props}
    />
  );
};
