"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import fetchDataFromDB from "@/lib/database";
import { unstable_cache } from "next/cache";

interface Props {
  gameID: number;
  gameTitle: string;
  gamePrice: number;
  releaseDate: string;
  saleDiscount: number;
}

interface TagValue {
  tag: string;
}

/*const getCachedTags = unstable_cache(
  async (query) => fetchDataFromDB(query),
  ["my-app-user"],
  {
    revalidate: 30,
  }
);*/

const GameItem = ({
  gameID,
  gameTitle,
  gamePrice,
  releaseDate,
  saleDiscount,
}: Props) => {
  /*const tags: TagValue[] = await getCachedTags(
    "SELECT tag FROM public.game_tags INNER JOIN public.games ON public.game_tags.game_id  = public.games.game_id INNER JOIN public.tags ON public.game_tags.tag_id = public.tags.tag_id WHERE public.game_tags.game_ID='" +
      gameID.toString() +
      "'"
  );*/
  return (
    <a className="block bg-neutral-900 mb-2 w-full h-[70px] hover:bg-sky-200 group cursor-pointer">
      <div className="inline-block align-top w-[20%] h-[70px]">
        <Image
          src={"/gameBanners/" + gameTitle + ".bmp"}
          width={150}
          height={70}
          alt={gameTitle}
        />
      </div>

      <div className="inline-block align-top w-[30%] h-[70px]">
        <div className="block pl-1 pt-2 w-full group-hover:text-slate-900">
          {gameTitle}
        </div>
      </div>

      <div className="inline-block align-top w-[15%] h-[70px] place-content-center">
        <div className="block text-center py-1 mx-auto w-full text-gray-500 text-xs">
          {releaseDate}
        </div>
      </div>

      <div className="inline-block align-top w-[5%] h-[70px] place-content-center">
        <Image
          src={"/reviewIcons/positive.bmp"}
          height={16}
          width={16}
          alt="positive"
        />
      </div>

      <div className="inline-block align-top w-[10%] h-[70px] place-content-center">
        {saleDiscount > 0 && (
          <div className="block text-center py-1 mx-auto w-[50px] bg-green-900 text-green-400 font-bold">
            {saleDiscount * 100}%
          </div>
        )}
      </div>

      <div className="inline-block align-top w-[20%] h-[70px] place-content-center">
        <div
          className={
            "block pr-2 text-right w-full group-hover:text-slate-900 " +
            (saleDiscount > 0
              ? "text-sm line-through text-gray-500"
              : "text-base")
          }
        >
          {gamePrice}€
        </div>
        {saleDiscount > 0 && (
          <div className="block pr-2 text-right w-full text-green-500 group-hover:text-slate-900 text-lg">
            {Math.floor(gamePrice * (1 - saleDiscount) * 100) / 100}€
          </div>
        )}
      </div>
    </a>
  );
};

export default GameItem;

/*
        <div className="text-xs pl-1 pt-2 text-gray-500 text-ellipsis truncate">
          {tags?.map((newTag: TagValue) => (
            <span key={newTag.tag}>| {newTag.tag} </span>
          ))}
        </div>*/
