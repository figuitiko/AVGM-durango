import {
  getDocumentsOffsetPagination,
  removeDocumentById,
} from "@/actions/documents";
import { Uploader } from "@/components/dashboard/uploader";
import Await from "@/components/share/await";
import { PaginationData } from "@/components/share/pagination-data";
import { TableData } from "@/components/share/table-data";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import { Suspense } from "react";

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const page = (await searchParams).page || 1;

  const offset = (Number(page) - 1) * Number(ITEMS_PER_PAGE);

  const documentsPromise = getDocumentsOffsetPagination(offset, ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-8">
      <Uploader />
      <Suspense>
        <Await promise={documentsPromise}>
          {({ documents, total }) => {
            const tableHeaders = [
              "ID",
              "Title",
              "Category",
              "Year",
              "Date",
              "File Type",
            ];
            const tableData = documents.map((doc) => ({
              id: doc.id,
              ID: doc.id,
              Title: doc.title,
              Category: doc.category,
              Year: doc.year,
              Date: doc.createdAt.toISOString().split("T")[0],
              "File Type": "pdf",
            }));
            return (
              <div>
                <TableData
                  headers={tableHeaders}
                  data={tableData}
                  onDelete={removeDocumentById}
                />
                <PaginationData total={total} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default DashboardPage;
