import { ReactNode } from "react";
import TopMenu from "@components/layout/topmenu";
import Footer from "@components/layout/footer";

interface Children {
  children: ReactNode;
}

const Layout = ({ children }: Children) => {
  return (
    <div className="isolate bg-slate-300">
      <TopMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
