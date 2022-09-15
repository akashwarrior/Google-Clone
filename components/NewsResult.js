function NewsResult({ result }) {
  function src(item) {
    return item.source.href;
  }
  return (
    <div className="bg-gray-100 sm:bg-white">
      {result.articles?.map((item) => {
        return (
          <div
            className="overflow-hidden mt-2 ml-2 pt-3 pl-3 bg-white sm:px-7 sm:pb-0 md:px-16 lg:px-32"
            key={item.link}
          >
            <a href={item.link} target="blank">
              <div className="flex items-center">
                <span>
                  <img
                    src={`http://www.google.com/s2/favicons?domain=${item.source.href}`}
                  />
                </span>
                <p className="ml-1">{item.source.title}</p>
              </div>
              <p className="font-bold text-xl text-[#1558d6]">{item.title}</p>
              <p className="text-sm">{item.link}</p>
              <p className="text-[12px] py-2">{item.published}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default NewsResult;
