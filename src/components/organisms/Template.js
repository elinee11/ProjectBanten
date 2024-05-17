import { useEffect } from "react";
import { Footer, Header, Navbar } from "../molecules";
import Main from "../molecules/Main";

export default function Template({ title = "Beranda", children }) {
  useEffect(() => {
    document.title = `${title} - Banten Tourism`;

    return () => {
      document.title = "Banten Tourism";
    };
  }, [title]);

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p className="py-8 text-white-50">
          BantenTourism | &copy; {`${new Date().getFullYear()}`}
        </p>
      </Footer>
    </>
  );
}
