import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ITEMS_PER_PAGE = 10;

export function calculateTotalPages(
  totalItems: number,
  itemsPerPage: number = ITEMS_PER_PAGE
): number {
  return Math.ceil(totalItems / itemsPerPage);
}
export function getPaginationIndices(
  currentPage: number,
  itemsPerPage: number = ITEMS_PER_PAGE
): { skip: number; take: number } {
  const skip = (currentPage - 1) * itemsPerPage;
  const take = itemsPerPage;
  return { skip, take };
}
