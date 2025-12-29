"use client";
import { useState, useMemo } from "react";
import { Document } from "@/types/documents";

import { FolderOpen } from "lucide-react";
import { YearSection } from "./year-section";
import { CategoryTabs } from "./category-tabs";
import { DocumentCategory } from "@/types/documents";
import { documents } from "./mock";
import { RoundedShape } from "../share/rounded-shape";

export const DocumentLibrary = ({
  documentsData,
}: {
  documentsData: Document[];
}) => {
  const [activeCategory, setActiveCategory] =
    useState<DocumentCategory>("informs");

  const counts = useMemo(
    () => ({
      measures: documentsData.filter((d) => d.category === "measures").length,
      informs: documentsData.filter((d) => d.category === "informs").length,
      advances: documentsData.filter((d) => d.category === "advances").length,
    }),
    [documentsData]
  );

  const filteredDocuments = useMemo(
    () => documentsData.filter((d) => d.category === activeCategory),
    [activeCategory, documentsData]
  );

  const documentsByYear = useMemo(() => {
    const grouped: Record<number, typeof documents> = {};
    filteredDocuments.forEach((doc) => {
      if (!grouped[doc.year]) {
        grouped[doc.year] = [];
      }
      grouped[doc.year].push(doc);
    });

    // Sort documents within each year by date (newest first)
    Object.keys(grouped).forEach((year) => {
      grouped[Number(year)].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });

    return grouped;
  }, [filteredDocuments]);

  const sortedYears = Object.keys(documentsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <RoundedShape className="min-h-screen bg-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-4xl py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FolderOpen className="w-6 h-6 text-sixth" />
            </div>
            <div>
              <h1 className="font-display text-3xl text-foreground">
                Documentos
              </h1>
              <p className="text-muted-foreground text-sm mt-0.5">
                Biblioteca de documentos oficiales de AVGM Durango
              </p>
            </div>
          </div>
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            counts={counts}
          />
        </div>
      </header>

      <main className="container max-w-4xl py-8">
        {sortedYears.length > 0 ? (
          sortedYears.map((year, index) => (
            <YearSection
              key={year}
              year={year}
              documents={documentsByYear[year]}
              defaultOpen={index === 0}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No hay documentos disponibles en esta categoría.
            </p>
          </div>
        )}
      </main>
    </RoundedShape>
  );
};
