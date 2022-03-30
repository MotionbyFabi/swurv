import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar/Navbar";
import Head from "next/head";
import AnimatedPage from "./Animation";


interface Props {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon"  href="../public/favicon.ico" />
                
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="This is the portfolio for Swurv, a motion designer and content editor based in Toronto, Canada"/>
        
        <meta name="description" content="Portfolio for Swurv"/>
        <meta content="#ffffff" data-react-helmet="true" name="theme-color" />
        
        <meta property="og:url" content="https://dev.visualsbyswurv.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Swurv"/>
        <meta property="og:description" content="Portfolio for Swurv"/>
        <meta property="og:image" content="https://i.imgur.com/B67dCeZ.png"/>

        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="dev.visualsbyswurv.com"/>
        <meta property="twitter:url" content="https://dev.visualsbyswurv.com/"/>
        <meta name="twitter:title" content="Swurv"/>
        <meta name="twitter:description" content="Portfolio for Swurv" />
        <meta name="twitter:image" content="https://i.imgur.com/B67dCeZ.png"/>
        
      </Head>
      <header className="bg-black fixed top-0 z-50">
        <Navbar />
      </header>
      <AnimatedPage>
        <main className="z-0">{ children }</main>
      </AnimatedPage>
    </>
  );
};

export default Layout