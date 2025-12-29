import { getDocuments } from "@/actions/documents";
import { DocumentLibrary } from "@/components/documents/document-library";
import { HeroDocuments } from "@/components/documents/hero-documents";
import Await from "@/components/share/await";
import { Skeleton } from "@/components/ui/skeleton";
import { DocumentCategory, FileType } from "@/types/documents";
import { Suspense } from "react";

const DocumentsPage = () => {
  const documentsPromise = getDocuments();

  return (
    <>
      <HeroDocuments />
      <Suspense
        fallback={<Skeleton className="h-96 w-full mt-8 rounded-lg bg-third" />}
      >
        <Await promise={documentsPromise}>
          {(documents) => {
            const documentsData = documents.map((doc) => ({
              id: String(doc.id),
              title: doc.title,
              description: doc.description ?? "",
              category: doc.category as DocumentCategory,
              year: Number(doc.year),
              date: doc.createdAt.toISOString().split("T")[0],
              fileType: "pdf" as FileType,
              url: doc.url,
            }));
            return <DocumentLibrary documentsData={documentsData} />;
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default DocumentsPage;
