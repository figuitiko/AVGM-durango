import { cn } from "@/lib/utils";
import { DocumentCategory } from "@/types/documents";
import { Gauge, FileText, TrendingUp } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: DocumentCategory;
  onCategoryChange: (category: DocumentCategory) => void;
  counts: Record<DocumentCategory, number>;
}

const categories: {
  id: DocumentCategory;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "informs", label: "Informes", icon: FileText },
  { id: "measures", label: "Medidas", icon: Gauge },
  { id: "advances", label: "Avances", icon: TrendingUp },
];

const categoryColors: Record<DocumentCategory, string> = {
  informs:
    "data-[active=true]:bg-third data-[active=true]:text-primary-foreground hover:bg-informs/10",
  measures:
    "data-[active=true]:bg-fourth data-[active=true]:text-primary-foreground hover:bg-measures/10",
  advances:
    "data-[active=true]:bg-secondary-custom data-[active=true]:text-primary-foreground hover:bg-advances/10",
};

export const CategoryTabs = ({
  activeCategory,
  onCategoryChange,
  counts,
}: CategoryTabsProps) => {
  return (
    <nav
      className="flex flex-col md:flex-row gap-2 p-1 bg-secondary/50 rounded-lg"
      role="tablist"
    >
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          role="tab"
          aria-selected={activeCategory === id}
          data-active={activeCategory === id}
          onClick={() => onCategoryChange(id)}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium text-sm transition-all duration-200",
            "text-muted-foreground",
            categoryColors[id]
          )}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
          <span
            className={cn(
              "ml-1 px-2 py-0.5 text-xs rounded-full",
              activeCategory === id
                ? "bg-primary-foreground/20"
                : "bg-muted text-muted-foreground"
            )}
          >
            {counts[id]}
          </span>
        </button>
      ))}
    </nav>
  );
};
