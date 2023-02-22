import "@styles/globals.css";
import { AppProps } from "next/app";
import { wrapper } from "@store/index";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
