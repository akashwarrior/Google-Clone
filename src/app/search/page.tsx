import { Header } from "@/components/Header";
import { SearchResults } from "@/components/SearchResults";
import Head from "next/head";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const { q: query, start } = await searchParams || {};
    if (!query || Array.isArray(query)) {
        return <div>Invalid Search</div>
    }
    const startIndex = Number(start) || 1;

    const API_KEY = process.env.GOOGLE_API_KEY;
    const CONTEXT_KEY = process.env.GOOGLE_CONTEXT_KEY;

    const results = await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex}`
    ).then((response) => response.json());

    return (
        <div>
            <Head>
                <title>{query} - Google Search</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>

            <Header />
            <SearchResults results={results} query={query} startIndex={startIndex} />
        </div>
    )
}