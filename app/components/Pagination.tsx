"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  genreFilter: string | string[];
}

const Pagination: FC<Props> = ({ hasNextPage, hasPrevPage, genreFilter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  return (
    <div className="block h-10 place-content-center divide-x divide-slate-600">
      <button
        className="inline-block bg-neutral-900 py-2 px-3 rounded-l-lg w-[70px] text-center hover:bg-sky-200 hover:text-slate-900 cursor-pointer"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&genre=${genreFilter}`);
        }}
      >
        Last
      </button>
      <p className="inline-block bg-neutral-900 py-2 px-3 cursor-default">
        Page {page}
      </p>
      <button
        className="inline-block bg-neutral-900 py-2 px-3 rounded-r-lg w-[70px] text-center hover:bg-sky-200 hover:text-slate-900 cursor-pointer"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&genre=${genreFilter}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
