import TagList from "./components/TagList";
import { unstable_cache } from "next/cache";
import Header from "./components/Header";
import GameDetail from "./components/GameDetail";
import fetchDataFromDB from "@/lib/database";
import Pagination from "./components/Pagination";
import GameList from "./components/GameList";

interface Game {
  game_id: number;
  title: string;
  price: number;
  release_date: string;
  sale: number;
  tags: string[];
}

const getCachedGames = unstable_cache(
  async (query) => fetchDataFromDB(query),
  ["my-app-user"],
  {
    revalidate: 30,
  }
);

const getCachedTags = unstable_cache(
  async (gameID) =>
    fetchDataFromDB(
      "SELECT tag FROM public.game_tags INNER JOIN public.games ON public.game_tags.game_id  = public.games.game_id INNER JOIN public.tags ON public.game_tags.tag_id = public.tags.tag_id WHERE public.game_tags.game_ID='" +
        gameID.toString() +
        "'"
    ),
  ["my-app-user"],
  {
    revalidate: 30,
  }
);

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //revalidatePath("/", "layout");
  const page = searchParams["page"] ?? "1";
  const genre = searchParams["genre"] ?? "undefined";

  const query = "SELECT * FROM public.games ORDER BY game_id ASC";
  const query2 =
    "SELECT public.games.game_id, title, price, release_date, sale FROM public.tags INNER JOIN public.game_tags ON public.game_tags.tag_id = public.tags.tag_id INNER JOIN public.games ON public.games.game_id = public.game_tags.game_id WHERE tag = '".concat(
      genre.toString()
    ) + "'";
  const games: Game[] =
    genre != "undefined"
      ? await getCachedGames(query2)
      : await getCachedGames(query);

  /*const gamesWithGenre = games.map(async (game: Game) => {
    game.tags = await getCachedTags(game.game_id);
    console.log(game.tags);
    console.log(game);
  });*/

  const per_page = 3;
  const start = (Number(page) - 1) * per_page;
  const end = start + per_page;

  return (
    <main>
      <Header />
      <div className="w-3/4 mx-auto mt-5">
        <TagList />
        <div className="inline-block align-top w-[60%]">
          <div className="block align-top">
            <GameList
              gameList={games}
              firstEntry={start}
              lastEntry={end}
              genre={genre}
            />
          </div>
        </div>
        <GameDetail />
      </div>
    </main>
  );
}
