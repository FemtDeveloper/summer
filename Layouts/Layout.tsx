import Head from "next/head";
import React, { FC, ReactFragment, ReactPortal } from "react";
import Navbar from "../components/ui/Navbar";
import Sidebar from "../components/ui/Sidebar";

interface LayputProps {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
}

const Layout: FC<LayputProps> = ({
  children = null,
  title = "",
  pageDescription = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/my-images-ed5a3.appspot.com/o/images%2FMadrug%C3%B3n%20Mayorista-logos.jpeg?alt=media&token=089078d3-cd11-4495-8d44-c53783937030"
        />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta name="theme-color" content="#fdd101"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Navbar />
        <Sidebar />
      </nav>
      {/* <ButtonToCreate /> */}

      {/* <SideMenu /> */}
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
          backgroundColor: "#f9f9f9",
          minHeight: "60vh",
        }}
      >
        {children}
      </main>
      {/* <nav>
        <Footer />
      </nav> */}

      {/* <SigninModal />
      <RegisterModal /> */}
      {/* <button className="whatsapp-madrugon">
        <a
          href={`https://wa.me/+573209817364`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Madrugón Mayorista</span>
          <WhatsApp sx={{ color: "white", fontSize: "20px", ml: 2 }} />
        </a>
      </button> */}
    </>
  );
};

export default Layout;
