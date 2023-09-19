import { Button } from "@/components/ui/button.tsx";
import { footerConfig } from "@/config/footer";
import {Separator} from "@/components/ui/separator";

const Footer = () => {
  const { title, businessRequires, openPositions, locations, button, socialMedias } =
    footerConfig;

  const renderedSocialMediaLinks = socialMedias.map((media) => (
      <h3 key={media.key}><a href={media.url}>{media.title.toUpperCase()}</a></h3>
  ));

  return (
    <footer className="flex flex-col justify-between h-[31.625rem]">
      <Separator />
      <div className="grid grid-cols-4 grid-rows-2 gap-8 container">
        <div className="col-span-2 row-span-2 flex flex-col gap-6">
          <h3>{title}</h3>
          <Button variant="outline" asChild>
            <a href={button.url}>Contact us</a>
          </Button>
        </div>
        <div className="col-start-3 flex flex-col gap-6">
          <h3>{businessRequires.title}</h3>
          <div>
            <p>{businessRequires.email}</p>
            <p>{businessRequires.phone}</p>
          </div>
        </div>
        <div className="col-start-3 row-start-2 flex flex-col gap-6">
          <h3>{locations.london.title}</h3>
          <div>
            <p>{locations.london.address}</p>
          </div>
        </div>
        <div className="col-start-4 row-start-1 flex flex-col gap-6">
          <h3>{openPositions.title}</h3>
          <div>
            <p>{openPositions.positions.juniorGraphicDesign}</p>
            <p>{openPositions.positions.videography}</p>
            <p>{openPositions.positions.photography}</p>
          </div>
        </div>
        <div className="col-start-4 row-start-2 flex flex-col gap-6">
          <h3>{locations.capeTown.title}</h3>
          <div>
            <p>{locations.capeTown.address}</p>
          </div>
        </div>
      </div>
      <Separator color="white" />
      <div className="grid grid-cols-2 grid-rows-1 gap-8 container items-center">
        <div><footerConfig.logo /></div>
        <div className="flex justify-around">{renderedSocialMediaLinks}</div>
      </div>
      <Separator />
    </footer>
  );
};

export default Footer;
