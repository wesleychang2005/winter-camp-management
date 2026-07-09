import React from "react";
import Section from "components/Section";

function Footer(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container border-t border-gray-200 pt-8 pb-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} English Camp Management System. All rights reserved.</p>
      </footer>
    </Section>
  );
}

export default Footer;
