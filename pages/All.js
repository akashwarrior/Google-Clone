import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";

function search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
