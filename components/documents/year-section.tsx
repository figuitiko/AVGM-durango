import { Document } from "@/types/documents";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DocumentCard } from "./document-card";

interface YearSectionProps {
  year: number;
  documents: Document[];
  defaultOpen?: boolean;
}

export const YearSection = ({
  year,
  documents,
  defaultOpen = true,
}: YearSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 py-3 group"
      >
        <span className="font-display text-2xl text-foreground">{year}</span>
        <span className="text-sm text-sixth-foreground">
          ({documents.length} document{documents.length !== 1 ? "s" : ""})
        </span>
        <div className="flex-1 h-px bg-border" />
        <ChevronDown
          className={cn(
            "w-5 h-5 text-sixth-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid gap-3 overflow-hidden transition-all duration-300",
          isOpen ? "opacity-100 max-h-500" : "opacity-0 max-h-0"
        )}
      >
        {documents.map((doc, index) => (
          <DocumentCard key={doc.id} document={doc} index={index} />
        ))}
      </div>
    </section>
  );
};
