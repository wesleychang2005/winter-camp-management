import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title="Welcome to CLC Language Center"
        subtitle="God bless you! Step into a vibrant world of language learning. Join our diverse community of students and master new languages with ease."
        strapline="Your journey starts here"
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default IndexPage;
