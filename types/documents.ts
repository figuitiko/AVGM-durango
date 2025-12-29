export type DocumentCategory = "measures" | "informs" | "advances";
export type FileType = "pdf" | "doc" | "xls" | "other";

export interface Document {
  id: string;
  title: string;
  description?: string;
  category: DocumentCategory;
  year: number;
  date: string;
  fileType: FileType;
  url: string;
}
