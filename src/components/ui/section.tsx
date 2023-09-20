import React from "react";

type Section = {
  children?: React.ReactNode;
  className?: string
};

const Section = ({ children, className }: Section) => {
  return (
    <section className={`xl:px-0 px-2 ${className}`}>
        {children}
    </section>
  );
};

export default Section;
