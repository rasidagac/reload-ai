import { Button } from "@components/ui/button";
import { footerConfig } from "@config/footer";
import { Separator } from "@components/ui/separator";
import Section from "@components/ui/section";

const Footer = () => {
  const {
    title,
    businessRequires,
    openPositions,
    locations,
    button,
    socialMedias,
  } = footerConfig;

  const renderedSocialMediaLinks = socialMedias.map((media) => (
    <h3 key={media.key}>
      <a href={media.url}>{media.title.toUpperCase()}</a>
    </h3>
  ));

  return (
    <footer className="flex flex-col justify-between">
      <Separator className="bg-foreground" />
      <Section className="flex flex-wrap lg:flex-nowrap justify-center gap-8 py-20">
        <div className="lg:w-1/2 w-9/12 space-y-8 text-center lg:text-left">
          <h3>{title}</h3>
          <Button variant="outline" asChild>
            <a href={button.url}>Contact us</a>
          </Button>
        </div>
        <div className="w-10/12 lg:1/2 justify-around lg:justify-start flex flex-wrap gap-12">
          <div className="w-5/12 space-y-4">
            <h3>{businessRequires.title}</h3>
            <div>
              <p>{businessRequires.email}</p>
              <p>{businessRequires.phone}</p>
            </div>
          </div>
          <div className="w-5/12 space-y-4">
            <h3>{openPositions.title}</h3>
            <div>
              <p>{openPositions.positions.juniorGraphicDesign}</p>
              <p>{openPositions.positions.videography}</p>
              <p>{openPositions.positions.photography}</p>
            </div>
          </div>
          <div className="w-5/12 space-y-4">
            <h3>{locations.london.title}</h3>
            <div>
              <p>{locations.london.address}</p>
            </div>
          </div>
          <div className="w-5/12 space-y-4">
            <h3>{locations.capeTown.title}</h3>
            <div>
              <p>{locations.capeTown.address}</p>
            </div>
          </div>
        </div>
      </Section>
      <Separator className="bg-foreground" />
      <Section className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 lg:justify-between py-10">
        <footerConfig.logo className="fill-primary" />
        <div className="flex justify-around lg:justify-between lg:w-1/2 w-full ">
          {renderedSocialMediaLinks}
        </div>
      </Section>
      <Separator className="bg-foreground" />
    </footer>
  );
};

export default Footer;
