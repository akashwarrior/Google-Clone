import { useRouter } from "next/router";

function HeaderOption({ Icons, title }) {
  const router = useRouter();
  function change(title) {
    switch (title) {
      case "All":
        router.push(`${title}?term=${router.query.term}`);
        return;
      case "Images":
        router.push(`${title}?term=${router.query.term}`);
        return;
      case "News":
        router.push(`${title}?term=${router.query.term}`);
        return;
      default:
        router.push(`/Videos?term=${router.query.term}`)
        return;
    }
  }
  return (
    <div
      id={title}
      onClick={() => change(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 sm:pr-1 pb-3 cursor-pointer ${
        router.pathname === '/' + title && "text-blue-500 border-blue-500"
      }`}
    >
      <Icons className="hidden sm:inline-flex h-4" />
      <p>{title}</p>
    </div>
  );
}

export default HeaderOption;
