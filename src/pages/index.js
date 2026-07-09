import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title="English Camp Management System"
        subtitle="Streamline your camp operations. Manage students, classes, and daily observations in one unified platform designed for teachers."
        strapline=""
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
