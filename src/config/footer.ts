import { Icons } from "@components/ui/icons";
import React, {JSX} from "react";
import {nanoid} from "nanoid";

type footerConfig = {
  button: { text: string; url: string };
  businessRequires: { phone: string; title: string; email: string };
  openPositions: {
    title: string
    positions: {
      juniorGraphicDesign: string;
      photography: string;
      videography: string;
    }
  };
  locations: {
    london: { address: string; title: string };
    capeTown: { address: string; title: string };
  };
  title: string;
  logo: (props: React.HTMLAttributes<SVGElement>) => JSX.Element;
  socialMedias: Array<{key: string, title: string, url: string}>
};

export const footerConfig: footerConfig = {
  title: "We would love to hear from you. Let’s work — together with Reload",
  button: {
    text: "Contact us",
    url: "/",
  },
  businessRequires: {
    title: "Business requires",
    email: "hello@colstic.com",
    phone: "+27 123 456 789",
  },
  openPositions: {
    title: "Open positions",
    positions: {
      juniorGraphicDesign: "Junior Graphic Design",
      videography: "Videography",
      photography: "Photography",
    },
  },
  locations: {
    london: {
      title: "London",
      address: "133A Rye lane London SE15 4BQ UK",
    },
    capeTown: {
      title: "Cape Town",
      address: "14 Upper pepper street CBD, 8001 Cape Town",
    },
  },
  logo: Icons.Logo,
  socialMedias: [
    {
      key: nanoid(),
      title: "DRIBBLE",
      url: "/"
    },
    {
      key: nanoid(),
      title: "INSTAGRAM",
      url: "/"
    },
    {
      key: nanoid(),
      title: "LINKEDIN",
      url: "/"
    }
  ]
};
