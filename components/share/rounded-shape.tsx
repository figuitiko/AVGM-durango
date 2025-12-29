import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
const roundedShapeVariants = cva(
  "rounded-[50px] p-6 md:p-14 flex flex-col flex-wrap  gap-6 ",
  {
    variants: {
      color: {
        primary: "bg-white",
        secondary: "bg-secondary-custom",
        third: "bg-third",
        fourth: "bg-fourth",
        fifth: "bg-fifth",
        sixth: "bg-sixth",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export type RoundedShapeProps = React.ComponentProps<"div"> &
  VariantProps<typeof roundedShapeVariants>;
export const RoundedShape = ({
  className,
  color = "primary",
  ...props
}: RoundedShapeProps) => {
  return (
    <div
      className={cn(roundedShapeVariants({ color }), className)}
      {...props}
    />
  );
};
