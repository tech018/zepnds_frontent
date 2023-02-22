import Head from "next/head";
import Layout from "@layout/index";
import Footer from "@layout/footer";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Zep Network and Data Solutions</title>
        <meta
          name="The Solution for your software evolution"
          content="Create by Zep Network and Data Solutions Software Engineers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout />
      </main>
      <Footer />
    </>
  );
};

export default Home;
