import { cn } from "@/lib/utils";

export const NavBarWrapper = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => {
  return (
    <nav
      className={cn("flex  justify-center  gap-14  items-center", className)}
      {...props}
    />
  );
};

const NavBar = ({ className, ...props }: React.ComponentProps<"ul">) => {
  return (
    <ul
      className={cn(
        "flex items-center text-secondary-custom gap-7 p-4 font-semibold font-montserrat",
        className
      )}
      {...props}
    />
  );
};

const NavBarItem = ({ className, ...props }: React.ComponentProps<"li">) => {
  return <li className={cn(className)} {...props} />;
};

NavBar.Item = NavBarItem;

export { NavBar };
