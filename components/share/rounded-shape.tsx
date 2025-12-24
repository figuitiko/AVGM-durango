import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
const roundedShapeVariants = cva("rounded-[50px] p-14 flex flex-col gap-6 ", {
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
});
export const RoundedShape = ({
  className,
  color = "primary",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof roundedShapeVariants>) => {
  return (
    <div
      className={cn(roundedShapeVariants({ color }), className)}
      {...props}
    />
  );
};
