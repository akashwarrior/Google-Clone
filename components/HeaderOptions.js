import {
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className=" flex w-full text-gray-500 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className=" flex space-x-6">
        <HeaderOption Icons={SearchIcon} title="All" />
        <HeaderOption Icons={PhotographIcon} title="Images" />
        <HeaderOption Icons={NewspaperIcon} title="News" />
        <HeaderOption Icons={PlayIcon} title="Videos" />
        <HeaderOption Icons={MapIcon} title="Finance" />
        <HeaderOption Icons={MapIcon} title="Maps" />
      </div>

      <div className="hidden sm:inline-flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
