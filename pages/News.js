import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import NewsResult from "../components/NewsResult";

function NewsSearch({ newsData }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <NewsResult result={newsData} />
    </div>
  );
}

export default NewsSearch;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://google-news.p.rapidapi.com/v1/search?q=${context.query.term}&lang=en`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f31dd93f01mshfd91d1965594bb2p18c798jsn867c55c65d1f",
        "X-RapidAPI-Host": "google-news.p.rapidapi.com",
      },
    }
  ).then((response) => response.json());

  return {
    props: {
      newsData: data,
    },
  };
}
