import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ImageResults from "../components/ImageResults";

function Images({ imageData }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />
      <ImageResults result={imageData} />
    </div>
  );
}

export default Images;

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://google-image-search1.p.rapidapi.com/v2/?q=${
      context.query.term ? context.query.term : "Image"
    }&hl=en`,{
      method: "GET",
    headers: {
      "X-RapidAPI-Key": "f31dd93f01mshfd91d1965594bb2p18c798jsn867c55c65d1f",
      "X-RapidAPI-Host": "google-image-search1.p.rapidapi.com",
    },  
    }).then((response) => response.json());

  return {
    props: {
      imageData: data,
    },
  };
}
