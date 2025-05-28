"use client";
import React, { useState } from "react";
import GameItem from "./GameItem";
import Pagination from "./Pagination";

interface Props {
  gameList: Game[];
  firstEntry: number;
  lastEntry: number;
  genre: string | string[];
}

interface Game {
  game_id: number;
  title: string;
  price: number;
  release_date: string;
  sale: number;
  tags: string[];
}

const GameList = ({ gameList, firstEntry, lastEntry, genre }: Props) => {
  const [query, setQuery] = useState("");
  const handleChange = (e: any) => {
    setQuery(e.target.value.toLowerCase());
  };
  const searchFilter = (gameArray: Game[]) => {
    return gameArray.filter((game: Game) =>
      game.title.toLowerCase().includes(query)
    );
  };

  const filtered = searchFilter(gameList);
  const entries = filtered.slice(firstEntry, lastEntry);

  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className="bg-sky-900 h-8 w-[300px] rounded-full pl-2 focus:outline-none mb-3"
        onInput={handleChange}
      />
      {entries?.map((newGame: Game) => (
        <GameItem
          key={newGame.game_id}
          gameID={newGame.game_id}
          gameTitle={newGame.title}
          gamePrice={newGame.price}
          releaseDate={newGame.release_date}
          saleDiscount={newGame.sale}
        />
      ))}
      <Pagination
        hasPrevPage={firstEntry > 0}
        hasNextPage={lastEntry < gameList.length}
        genreFilter={genre}
      />
    </>
  );
};

export default GameList;
