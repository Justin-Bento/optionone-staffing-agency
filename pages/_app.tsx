import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
        <meta name="title" content="Option One Staffing Agency" />
        <meta name="robots" content="noindex" />
        <meta name="description" content="Providing specialized services by supporting agencies and organizations that work with individuals experiencing behavioral, complex needs social difficulties." />
      </Head>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
