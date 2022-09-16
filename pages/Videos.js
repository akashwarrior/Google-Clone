import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import VideoResults from "../components/VideoResults";

function Videos({ videoData }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />

      <VideoResults result={videoData} />
    </div>
  );
}

export default Videos;

export async function getServerSideProps(context) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f31dd93f01mshfd91d1965594bb2p18c798jsn867c55c65d1f",
      "X-RapidAPI-Host": "google-video-search.p.rapidapi.com",
    },
  };

  const data = await fetch(
    `https://google-video-search.p.rapidapi.com/search?q=${context.query.term}&offset=0&hq=false&cc=false&safeSearch=false&region=us`,
    options
  ).then((response) => response.json());

  return {
    props: {
      videoData: data,
    },
  };
}
