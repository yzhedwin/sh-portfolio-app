import Head from "next/head";
import "./index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Edwin - Portfolio App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
