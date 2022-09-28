import Head from "next/head";
import "./index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       <title>Edwin</title>
    </Head>
      <Component {...pageProps} />
    </>
  );
}
