import "@styles/globals.css";
import { AppProps } from "next/app";
import { wrapper } from "@store/index";
import { Layout } from "@components/index";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(App);
