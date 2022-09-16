import { MicrophoneIcon, SearchIcon, UserIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    if (!searchInputRef.current.value) return;

    switch (router.pathname) {
      case "/All":
        router.push(`All?term=${searchInputRef.current.value}`);
        return;
      case "/Images":
        router.push(`/Images?term=${searchInputRef.current.value}`);
        return;
      case "/News":
        router.push(`/News?term=${searchInputRef.current.value}`)
        return;
      default:
        router.push(`/Videos?term=${searchInputRef.current.value}`)
        return;
    }
  };

  const clear = (e) => {
    let inputValue = e.target.value.length;
    
    if (inputValue == 0) {
      document.getElementById("clearButton").style.display = "none";
      return;
    }
    document.getElementById("clearButton").style.display = "";
    return;
  };

  return (
    <header className="top-0 bg-white">
      <div className="flex flex-col sm:flex-row w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          priority
        />

        <form className=" mt-4 sm:mt-0 w-full flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            defaultValue={router.query.term}
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
            onChange={clear}
          />
          <XIcon
            id="clearButton"
            className="h-6 text-gray-500 cursor-pointer px-2"
            onClick={() => {searchInputRef.current.value = "" , searchInputRef.current.focus();
            document.getElementById("clearButton").style.display="none";}}
          />
          <MicrophoneIcon className="mr-3 h-6 w-9 hidden sm:block text-blue-500 border-l-2 pl-3 border-gray-300" />
          <SearchIcon className="h-6 w-6 text-blue-500 hidden sm:block" />
          <button className="absolute bg-inherit" type="submit" onClick={search}></button>
        </form>
        <UserIcon className="hidden sm:visible h-8 p-1.5 bg-gray-200 rounded-full hover:scale-110" />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
