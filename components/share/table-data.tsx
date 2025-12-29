"use client";
import { Delete } from "lucide-react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type TableDataProps = {
  title?: string;
  headers: string[];
  data: Array<Record<string, string | number>>;
  onDelete?: (id: number) => Promise<unknown> | void;
};

function getRowId(row: Record<string, string | number>): number | null {
  const candidate = row.id ?? row.ID ?? row.Id;
  if (typeof candidate === "number" && Number.isFinite(candidate))
    return candidate;
  if (typeof candidate === "string") {
    const n = Number(candidate);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

export const TableData = ({
  title,
  headers,
  data,
  onDelete,
}: TableDataProps) => {
  return (
    <Table>
      {title && <TableCaption>A list of your recent invoices.</TableCaption>}
      <TableHeader>
        <TableRow>
          {headers.map((header, idx) => (
            <TableHead
              key={header}
              className={`${idx === headers.length - 1 && "text-right"}`}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={`${
                  cellIndex === headers.length - 1 && "text-right"
                }`}
              >
                {row[header]}
              </TableCell>
            ))}
            {onDelete && (
              <TableCell>
                <Button
                  className="cursor-pointer"
                  variant="ghost"
                  size="icon"
                  onClick={async () => {
                    const id = getRowId(row);
                    if (id == null) return;
                    await onDelete(id);
                  }}
                >
                  <Delete className="h-4 w-4" />
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
