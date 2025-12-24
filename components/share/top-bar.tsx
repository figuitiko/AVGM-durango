import { cn } from "@/lib/utils";

const TopBar = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex justify-center gap-36 bg-seventh w-full mx-auto",
        className
      )}
      {...props}
    />
  );
};

const TopBarItem = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("flex items-center", className)} {...props} />;
};
TopBar.Item = TopBarItem;

export { TopBar };
