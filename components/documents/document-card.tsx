import { FileText, FileSpreadsheet, File } from "lucide-react";
import { cn } from "@/lib/utils";
import { DocumentCategory, Document } from "@/types/documents";

interface DocumentCardProps {
  document: Document;
  index: number;
}

const categoryStyles: Record<DocumentCategory, string> = {
  informs: "border-l-third",
  measures: "border-l-fourth",
  advances: "border-l-secondary-custom",
};
const categoryStylesText: Record<DocumentCategory, string> = {
  informs: "group-hover:text-third",
  measures: "group-hover:text-fourth",
  advances: "group-hover:text-secondary-custom",
};

const fileTypeIcons = {
  pdf: FileText,
  doc: FileText,
  xls: FileSpreadsheet,
  other: File,
};

export const DocumentCard = ({ document, index }: DocumentCardProps) => {
  const Icon =
    fileTypeIcons[document.fileType as keyof typeof fileTypeIcons] || File;

  const formattedDate = new Date(document.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      className={cn(
        "group bg-card rounded-lg border-l-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer",
        "animate-fade-in",
        categoryStyles[document.category]
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-4 flex items-start gap-4">
        <div className="shrink-0 p-2 bg-secondary rounded-md group-hover:bg-muted transition-colors">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              "font-medium text-foreground transition-colors truncate",
              categoryStylesText[document.category]
            )}
          >
            <a href={document.url} target="_blank" rel="noopener noreferrer">
              {document.title}
            </a>
          </h3>
          {document.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {document.description}
            </p>
          )}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              {document.fileType}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <time className="text-xs text-muted-foreground">
              {formattedDate}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};
