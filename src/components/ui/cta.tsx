import Section from "@components/ui/section";
import {Button, ButtonProps} from "@components/ui/button";
import React, { JSX } from "react";

type CtaType = {
  buttonIcon?: JSX.Element;
  buttonLabel: string;
  className?: string;
  description?: string;
  title: string | JSX.Element;
  innerProps?: {
    buttonProps?: ButtonProps & React.RefAttributes<HTMLButtonElement>;
    descriptionProps?:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
      titleProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
  };
};

const Cta = ({
  title,
  description,
  buttonLabel,
  buttonIcon,
  className,
  innerProps,
}: CtaType) => {
  return (
    <Section className={`flex flex-col gap-12 py-16 ${className}`}>
      <h1 {...innerProps?.titleProps}>{title}</h1>
      <p {...innerProps?.descriptionProps}>{description}</p>
      <Button
        type="button"
        {...innerProps?.buttonProps}
      >
        {buttonLabel}
        {buttonIcon && <span className="ml-4">{buttonIcon}</span>}
      </Button>
    </Section>
  );
};

export default Cta;
