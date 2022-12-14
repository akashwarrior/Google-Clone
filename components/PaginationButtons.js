import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex w-full justify-around text-blue-700 p-7 px-20">
      {startIndex >= 10 && (
        <Link
          href={`/All?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-frow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/All?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-frow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
