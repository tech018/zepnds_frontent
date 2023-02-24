import React from "react";
import Head from "next/head";

interface Header {
  pageTitle: string;
}

const Header = ({ pageTitle }: Header) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="The Solution for your software evolution"
        content="Create by Zep Network and Data Solutions Software Engineers"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
