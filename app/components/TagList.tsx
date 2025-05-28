import React from "react";
import fetchDataFromDB from "@/lib/database";
import { unstable_cache } from "next/cache";

interface Tag {
  tag_id: number;
  tag: string;
}

const getCachedTags = unstable_cache(
  async (query) => fetchDataFromDB(query),
  ["my-app-user"],
  {
    revalidate: 30,
  }
);

async function TagList() {
  const tags: Tag[] = await getCachedTags("SELECT * FROM public.tags");

  return (
    <div className="inline-block align-top w-[10%] mt-10">
      <div className="font-bold mb-3 text-sm">BROWSE BY GENRE</div>
      <div>
        <ul className="mx-auto max-w-xs text-left font-medium text-lg leading-none">
          {tags?.map((newTag) => (
            <li className="text-sm" key={newTag.tag_id}>
              <a
                className="w-full flex items-center text-gray-400 hover:text-sky-400"
                href={"http://localhost:3000/?page=1&genre=" + newTag.tag}
              >
                {newTag.tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TagList;
