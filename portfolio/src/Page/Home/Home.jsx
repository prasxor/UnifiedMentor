import React from "react";
import HomePage1 from "../../components/HomePageUtils/HomePage1/HomePage1";
import HomePage2 from "../../components/HomePageUtils/HomePage2/HomePage2";
import HomePage3 from "../../components/HomePageUtils/HomePage3/HomePage3";
import HomePage4 from "../../components/HomePageUtils/HomePage4/HomePage4";
import HomePage5 from "../../components/HomePageUtils/HomePage5/HomePage5";
import HomePage6 from "../../components/HomePageUtils/HomePage6/HomePage6";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Prasxor Portfolio - Expert Web Developer for Hire</title>
        <meta
          name="description"
          content="I am a passionate frontend developer specializing in React, JavaScript, and UI/UX design. Check out my projects!"
        />
        <meta
          name="keywords"
          content="Prasxor, Prashant kumar sinha, web developer portfolio, hire react developer, javascript developer, UI/UX design, freelance web developer, website, ecommerce website,React Developer, Frontend Developer, JavaScript, Portfolio, Web Developer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prasxor Portfolio - Expert Web Developer"
        />
        <meta
          name="twitter:description"
          content="Explore Prashant's (Prasxor) portfolio of cutting-edge web projects. Hire a skilled developer for your next big idea!"
        />
        <meta
          name="twitter:image"
          content="https://prasxor.me/assets/ProfileImg.png"
        />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Prashant kumar sinha (Prasxor)" />
        <meta
          property="og:title"
          content="Prasxor Portfolio - Web Development Excellence"
        />
        <meta
          property="og:description"
          content="Explore Prashant's (Prasxor) portfolio of cutting-edge web projects. Hire a skilled developer for your next big idea!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prasxor.me" />
        <meta
          property="og:image"
          content=""
        />
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prashant Kumar Sinha",
    "url": "https://prasxor.me",
    "jobTitle": "Frontend Developer",
    "worksFor": {
      "@type": "Person",
      "name": "Prashant Kumar Sinha"
    },
    "sameAs": [
      "https://linkedin.com/in/prasxor",
      "https://github.com/prasxor"
    ]
  }
  `}
        </script>
      </Helmet>
      
        <div>
          <HomePage1 />
          <HomePage2 />
          <HomePage3 />
          <HomePage4 />
          <HomePage5 />
          <HomePage6 />
        </div>
    </>
  );
};

export default Home;
