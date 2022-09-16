import Image from "next/image";
import Footer from "./Footer";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="bg-gray-100 sm:bg-white overflow-hidden">
      <div className="px-4 bg-white py-2 text-sm sm:px-7 sm:pb-0 md:px-16 lg:px-32">
        <span>
          About {results.searchInformation?.formattedTotalResults} results
        </span>
        <span> ({results.searchInformation?.formattedSearchTime}seconds)</span>
      </div>
      {results.items?.map((item) => {
        return (
          <div
            className="px-4 py-3 bg-white my-2 sm:px-7 md:px-16 lg:px-32"
            key={item.cacheId + item.title}
          >
            <span className="flex items-center">
              <span className="border border-[#f1f3f4] flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#f1f3f4] p-1 mr-[10px] ">
                <div className="relative w-full h-full">
              <Image
                  src={`https://s2.googleusercontent.com/s2/favicons?domain=http://${item.displayLink}`}
                  layout="fill"
                  unoptimized="true"
                  alt="logos"
                  />
                  </div>
              </span>
              <div className="flex flex-col">
                <span className=" leading-4 text-base capitalize text-[#202124] font-[400]">
                  {item.displayLink.indexOf(".") &&
                  item.displayLink
                    .slice(
                      item.displayLink.indexOf(".") + 1,
                      item.displayLink.length - 1
                    )
                    .indexOf(".") != -1
                    ? item.displayLink.slice(
                        item.displayLink.indexOf(".") + 1,
                        item.displayLink
                          .substr(item.displayLink.lastIndexOf(".") + 1)
                          .indexOf(".") - 3
                      )
                    : item.displayLink.slice(
                        0,
                        item.displayLink.indexOf(".")
                      )}{" "}
                </span>
                <span className="text-sm line-clamp-1 text-[#202124]">
                  {item.formattedUrl}
                </span>
              </div>
            </span>
            <a className=" flex w-fit" href={item.link}>
              <h2 className="line-clamp-2 font-[400] text-[#1558d6] text-xl link my-1">
                {item.title}
              </h2>
            </a>
            <span className="text-sm line-clamp-3text-[#4d5156]">
              {item.snippet}
            </span>
          </div>
        );
      })}
      <PaginationButtons />
      <Footer />
    </div>
  );
}

export default SearchResults;
