"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const years: string[] = Array.from(
  { length: new Date().getFullYear() - 2020 + 1 },
  (_, i) => String(2020 + i)
);
const categories = [
  { label: "Informes", value: "informs" },
  { label: "Avances", value: "advances" },
  { label: "Medidas", value: "measures" },
];

export const Uploader = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [year, setYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputFileRef.current?.files?.length) {
      throw new Error("No file selected");
    }
    setLoading(true);
    try {
      const file = inputFileRef.current.files[0];

      const url = new URL(`/api/files/upload`, window.location.origin);
      url.searchParams.set("filename", file.name);
      url.searchParams.set("year", year);
      url.searchParams.set("category", selectedCategory);
      if (description) {
        url.searchParams.set("description", description);
      }

      const response = await fetch(url.toString(), {
        method: "POST",
        body: file,
      });

      const newBlob = (await response.json()) as PutBlobResult;

      setBlob(newBlob);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };
  const isValid = selectedFileName && year && selectedCategory;
  return (
    <section className="w-full max-w-5xl">
      <h1 className="text-xl font-semibold">Sube tu Informe</h1>

      <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Input
            id="file"
            name="file"
            ref={inputFileRef}
            type="file"
            accept="application/pdf"
            required
            className="sr-only"
            onChange={(e) =>
              setSelectedFileName(e.target.files?.[0]?.name ?? "")
            }
          />

          <div className="flex items-center gap-3">
            <Button
              type="button"
              onClick={() => inputFileRef.current?.click()}
              className="inline-flex items-center justify-center rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-third font-medium hover:bg-black/5"
            >
              Selecciona el archivo pdf
            </Button>

            <span className="text-sm text-black/60">
              {selectedFileName
                ? selectedFileName
                : "Ningún archivo seleccionado"}
            </span>
          </div>
        </div>
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Textarea
          name="description"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          placeholder="Descripción del documento (opcional)"
        />
        <Button
          disabled={!isValid}
          type="submit"
          className="inline-flex items-center justify-center rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-third font-medium hover:bg-black/5"
        >
          {loading ? "Subiendo..." : "Subir Informe"}
        </Button>
      </form>
      {blob && (
        <div className="mt-6 rounded-lg border border-black/10 bg-white p-4 text-sm">
          <div className="font-medium">Blob url</div>
          <a className="mt-1 block break-all underline" href={blob.url}>
            {blob.url}
          </a>
        </div>
      )}
    </section>
  );
};
