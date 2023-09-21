import React from "react";

type SectionType = {
  children?: React.ReactNode;
  className?: string
};

const Section = ({ children, className = '' }: SectionType) => {
  return (
    <section className={className} >
        {children}
    </section>
  );
};

export default Section;
