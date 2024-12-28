import Link from "next/link";

export const PaginationButtons = ({ query, startIndex }: { query: string, startIndex: number }) => {
    return (
        <div className="flex w-full justify-around text-blue-700 p-7 px-20">
            {startIndex >= 10 && (
                <Link
                    href={`/search?q=${query}&start=${startIndex - 10}`}
                >
                    <div className="flex flex-frow flex-col items-center cursor-pointer hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`/search?q=${query}&start=${startIndex + 10}`}>
                <div className="flex flex-frow flex-col items-center cursor-pointer hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    );
}