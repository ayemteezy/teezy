import { format, isSameYear, parseISO } from "date-fns";
import type { Role } from "@/constants/experience";

export const formatDate = (dateStr: string) => format(parseISO(dateStr), "MMM yyyy");

export const formatRoleDateRange = (date: Role["date"]) => {
  if (!date.end) return `${formatDate(date.start)} – Present`;

  const sameYear = isSameYear(parseISO(date.start), parseISO(date.end));
  const start = sameYear
    ? format(parseISO(date.start), "MMM")
    : formatDate(date.start);

  return `${start} – ${formatDate(date.end)}`;
};