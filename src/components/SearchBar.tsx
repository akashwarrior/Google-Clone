'use client';

import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

export const SearchBar = () => {
    const router = useRouter();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [clear, setClear] = useState(false);
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === "NumpadEnter") {
            e.preventDefault();
            if (!searchInputRef.current!.value) return;
            router.push(`search?q=${searchInputRef.current!.value}`);
        }
    }, [router]);

    useEffect(() => {
        searchInputRef.current!.focus();
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    const clearInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length == 0) {
            setClear(false);
            return;
        }
        setClear(true);
    }, []);


    return (
        <>
            <input
                className="flex-grow w-full focus:outline-none"
                ref={searchInputRef}
                type="text"
                onChange={clearInput}
            />
            <svg
                className={`size-7 px-1 cursor-pointer text-gray-500 mr-1 hover:bg-gray-100 p-1.5 rounded-full ${clear ? "block" : "hidden"}`}
                onClick={() => {
                    searchInputRef.current!.value = "";
                    searchInputRef.current!.focus();
                    setClear(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-gray-500 hover:bg-gray-100 p-1.5 rounded-full cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
        </>
    )
}