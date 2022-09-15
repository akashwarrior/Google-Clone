function VideoResults(result) {
  return (
    <div className=" overflow-hidden bg-gray-100 sm:bg-white">
      {result.result.videos?.map((video) => {
        return (
          <div
            className="bg-white m-2 py-4 sm:px-7 sm:pb-0 md:px-16 lg:px-32"
            key={video.url}
          >
            <a href={video.url} target="blank">
              <p className="text-sm truncate">{video.url}</p>
              <div className="flex pt-1">
                <img
                  loading="lazy"
                  className="w-fit self-start pt-2"
                  src={`http://www.google.com/s2/favicons?domain=${video.url}`}
                  alt=""
                />
                <div className="px-2 overflow-x-auto">
                  <p className="font-bold text-lg text-[#1558d6]">
                    {video.title + " - " + video.site}
                  </p>
                  <div className="text-sm">
                    <p className="line-clamp-2 mb-1">{video.description}</p>
                    <p className="m-1 text-[12px]">
                      {video.site +
                        " · " +
                        (video?.publisher ? video?.publisher + " · " : "") +
                        video.postedAt.slice(0, video.postedAt.indexOf("T"))}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default VideoResults;
