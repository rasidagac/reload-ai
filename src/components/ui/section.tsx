import React from "react";

type Section = {
  children?: React.ReactNode;
  className?: string
};

const Section = ({ children, className }: Section) => {
  return (
    <section className="">
      <div className={className}>
        {children}
      </div>
    </section>
  );
};

export default Section;
