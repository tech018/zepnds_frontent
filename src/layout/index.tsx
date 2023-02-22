import React from "react";
import TopMenu from "@layout/topmenu";
import AboutCompany from "src/modules/heroSection";
import Partners from "src/modules/partners";

const Index = () => {
  return (
    <div className="isolate bg-slate-300">
      <TopMenu />
      <AboutCompany />
      <Partners />
    </div>
  );
};

export default Index;
