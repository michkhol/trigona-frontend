"use client"

import Solutions2 from "@/app/_components/solutions2"
import { use } from "react"
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Solutions2Page({searchParams}: Props) {
  const params = use(searchParams);
  return !params.id ? notFound() : <Solutions2 id={params.id as string} />
}