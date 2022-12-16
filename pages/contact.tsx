import Head from "next/head";

export default function contact() {
  let company = "option one staffing agency";
  return (
    <>
      <Head>
        <title>Contact - {company}</title>
      </Head>
      <main>contact</main>
    </>
  );
}
