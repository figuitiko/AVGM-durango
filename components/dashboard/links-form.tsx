"use client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { addLink } from "@/actions/links";

export function LinksForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });
  const [error, setError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.url && !formData.title) {
      setError("Title and URL are required");
      return;
    }
    const data = new FormData(e.currentTarget);
    startTransition(async () => {
      await addLink(data);
    });
    // Handle form submission logic here
    setFormData({ title: "", description: "", url: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = formData.title && formData.url;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl w-full">
      <div className="space-y-2">
        <Label htmlFor="title">Titulo</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Entre el titulo del link"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Entre la Descripción</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Entre la Descripción"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">Liga</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://ejemplo.com"
          required
        />
      </div>

      <Button
        disabled={!isValid || isPending}
        type="submit"
        className="inline-flex items-center justify-center rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-third font-medium hover:bg-black/5"
      >
        {isPending ? "Agregando..." : "Agregar Link"}
      </Button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
