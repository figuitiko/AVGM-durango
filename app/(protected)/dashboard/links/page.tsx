import { getLinksOffsetPagination, removeLinkById } from "@/actions/links";
import { LinksForm } from "@/components/dashboard/links-form";
import Await from "@/components/share/await";
import { PaginationData } from "@/components/share/pagination-data";
import { TableData } from "@/components/share/table-data";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import { Suspense } from "react";

const LinkDashPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const page = (await searchParams).page || 1;

  const offset = (Number(page) - 1) * Number(ITEMS_PER_PAGE);
  const linksPromise = getLinksOffsetPagination(offset, ITEMS_PER_PAGE);

  return (
    <>
      <LinksForm />
      <Suspense>
        <Await promise={linksPromise}>
          {({ links, total }) => {
            const tableHeaders = ["ID", "Title", "URL", "Created At"];
            const tableData = links.map((link) => ({
              id: link.id,
              ID: link.id,
              Title: link.title,
              URL: link.url,
              "Created At": link.createdAt.toISOString().split("T")[0],
            }));

            return links.length > 0 ? (
              <div>
                <TableData
                  headers={tableHeaders}
                  data={tableData}
                  onDelete={removeLinkById}
                />
                <PaginationData total={total} />
              </div>
            ) : (
              <div className="p-4 text-sm text-muted-foreground">
                No se han encontrado vínculos.
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default LinkDashPage;
