import React from "react";
import Image from "next/image";

const GameDetail = () => {
  return (
    <div className="inline-block w-[30%] mt-10">
      <div className="h-[370px] mx-4 px-4 pt-3 bg-sky-200 text-black">
        <div className="text-2xl">Game Name</div>
        <div className="text-xs mb-3">Aug 17, 2024</div>
        <Image
          src={"/gameBanners/Baba Is You.bmp"}
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
          alt={"Game Banner"}
        />
        <div className="bg-sky-900 rounded-lg p-2 text-white mt-3 text-sm">
          <p>Overall user reviews:</p>
          <p>Positive(244,945)</p>
        </div>
        <div>
          <div className="bg-sky-900 rounded-lg p-2 text-white mt-2 text-sm w-fit inline-block mr-2">
            Tag
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
