"use client";
import React, { useState } from "react";

const Header = () => {
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="w-full h-[50px] bg-gradient-to-r from-cyan-700 to-blue-950">
      <div className="w-3/4 h-full flex items-center justify-between m-auto">
        <a href="http://localhost:3000/?page=1">
          <span className="font-bold text-lg text-white">STEAM</span>
        </a>
        <div></div>
        <span className="text-lg text-white">Cart</span>
      </div>
    </div>
  );
};

export default Header;

/*
          <input
            type="search"
            placeholder="Search"
            className="bg-sky-700 h-8 w-[300px] rounded-l-lg pl-2 focus:outline-none"
            onInput={handleChange}
          />
          <button className="align-top bg-sky-400 rounded-r-lg h-8 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 align-middle"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */
