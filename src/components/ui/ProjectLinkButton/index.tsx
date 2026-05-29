"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  resolveProjectLink,
  isErrorRoute,
  type Locale,
} from "@/utils/resolveProjectLink";

interface ProjectLinkButtonProps {
  link: string;
  label: string;
  className?: string;
}

export default function ProjectLinkButton({ link, label, className }: ProjectLinkButtonProps) {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "en";
  const href   = resolveProjectLink(link, locale);
  const isError = isErrorRoute(href);

  // Internal error route → Link (client-side navigation)
  if (isError) {
    return (
      <Link
        href={href}
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
      </Link>
    );
  }

  // Active external URL → opens in new tab
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