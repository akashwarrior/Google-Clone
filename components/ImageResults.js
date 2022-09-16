import Image from "next/image";

function ImageResults({ result }) {
  return (
    <div className="bg-gray-50 sm:bg-white flex flex-wrap justify-around">
      {result.response.images?.map((item) => {
        return (
          <div
            className="flex flex-col m-auto w-[49%] sm:w-[31%] p-1"
            key={item.image.url}
          >
            <div className="overflow-hidden rounded-2xl h-[100%]">
              <a href={item.image.url} target="blank">
                <div className="relative w-[100%] h-[30vh]">
                  <Image
                    src={item.thumbnail.url}
                    layout="fill"
                    objectFit="contain"
                    unoptimized="true"
                    loading="lazy"
                    alt={item.source.title}
                  />
                </div>
              </a>
            </div>
            <div>
              <p className="font-[400] line-clamp-1 mt-2 text-sm self-center text-center">
                {item.source.title}
              </p>
              <p className="line-clamp-1 text-[12px] text-center">
                {item.source.page}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageResults;