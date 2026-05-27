"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  resolveProjectLink,
  isErrorRoute,
  getErrorType,
  type Locale,
  type ErrorType,
} from "@/utils/resolveProjectLink";

interface ProjectLinkButtonProps {
  link: string;
  label: string; // passed from useTranslations('common.btnsAll')('project')
  className?: string;
}

const ERROR_LABELS: Record<string, { badge: string; title: string }> = {
  "404": { badge: "404", title: "Page not found"             },
  "403": { badge: "403", title: "Access restricted"          },
  "410": { badge: "410", title: "No longer available"        },
  "451": { badge: "451", title: "Unavailable in your region" },
};

// Tailwind color classes per error type (dot + badge text)
const ERROR_DOT: Record<string, string> = {
  "404": "bg-emerald-400",
  "403": "bg-red-400",
  "410": "bg-amber-400",
  "451": "bg-sky-400",
};
const ERROR_BADGE_TEXT: Record<string, string> = {
  "404": "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "403": "text-red-400     border-red-400/30     bg-red-400/10",
  "410": "text-amber-400   border-amber-400/30   bg-amber-400/10",
  "451": "text-sky-400     border-sky-400/30     bg-sky-400/10",
};

export default function ProjectLinkButton({ link, label, className }: ProjectLinkButtonProps) {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "en";

  const href      = resolveProjectLink(link, locale);
  const isError   = isErrorRoute(href);
  const errorType = getErrorType(href) as ErrorType & string | null;

  // ─── Active project → same button style as the modal ───────────────────────
  if (!isError) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full sm:w-auto group relative inline-flex justify-center items-center cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white ${className ?? ""}`}
      >
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gray-900 transition-all duration-300 group-hover:scale-[100.8] dark:bg-white" />
          <span className="transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {label}
          </span>
        </div>
        <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-gray-900 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
          <span className="font-medium">{label}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
          </svg>
        </div>
      </a>
    );
  }

  // ─── Error route → badge + disabled button ─────────────────────────────────
  const meta      = errorType ? ERROR_LABELS[errorType]    : null;
  const dotClass  = errorType ? ERROR_DOT[errorType]       : "bg-gray-500";
  const badgeClass= errorType ? ERROR_BADGE_TEXT[errorType]: "text-gray-500 border-gray-500/30 bg-gray-500/10";

  return (
    <div className="mt-6 flex flex-col gap-2">
      {/* Error badge */}
      {meta && (
        <span className={`inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase ${badgeClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
          {meta.badge} · {meta.title}
        </span>
      )}

      {/* Disabled button — same shape as active, but muted + not-allowed */}
      <Link
        href={href}
        title={meta?.title}
        className={`w-full sm:w-auto relative inline-flex justify-center items-center overflow-hidden rounded-full border border-gray-700 bg-gray-900 px-5 py-2 text-center font-medium text-gray-600 opacity-50 cursor-not-allowed pointer-events-none select-none ${className ?? ""}`}
        tabIndex={-1}
        aria-disabled="true"
      >
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gray-600" />
          <span>{label}</span>
        </div>
      </Link>
    </div>
  );
}