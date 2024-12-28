'use client';

import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Header */}
      <header className="flex w-full px-5 py-3 justify-between text-sm text-gray-700 ">
        {/* Left header*/}
        <div className="flex space-x-4 items-center">
          <p className="link">
            About
          </p>

          <p className="link">
            Store
          </p>
        </div>

        {/* Right header*/}
        <div className="flex space-x-4 items-center">

          <p className="link">
            Gmail
          </p>

          <p className="link">
            Images
          </p>

          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>

          {/* Avatar */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 p-1.5 bg-gray-200 rounded-full" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>

        </div>
      </header >

      <form className="flex flex-col items-center mt-20 flex-grow w-4/5" >
        {/* Image */}
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
          width={300}
          height={100}
        />

        {/* Search Section */}
        <div className="flex w-full mt-5 hover:shadow-md focus-within:shadow-md max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition duration-200" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>

          <SearchBar />
        </div >

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:gap-x-4" >
          <button
            className="btn"
            type="button"
            onClick={() => dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))}
          >
            Google Search
          </button>

          <button className="btn" type="button">
            I`m Feeling Lucky
          </button>

        </div >
      </form >

      <Footer />
    </div >
  );
}