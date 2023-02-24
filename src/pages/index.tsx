import Header from "@seo/helmet";
import HeroSection from "@modules/heroSection";
import Partners from "@modules/partners";

const Home = (): JSX.Element => {
  return (
    <>
      <Header pageTitle="Zep Network and Data Solution" />
      <main>
        <HeroSection />
        <Partners />
      </main>
    </>
  );
};

export default Home;
