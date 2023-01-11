import { urlFor } from "../sanity";
import Image from "next/image";
import { PortfolioInfo } from "../typings";

type Props = {
  portfolioInfo: PortfolioInfo;
};

function BackGroundCircles({ portfolioInfo }: Props) {
  return (
    <div
      id="atom"
      className="h-[5em] w-[5em] lg:h-[10em] lg:w-[10-em] relative flex"
    >
      <div className="col-start-1 row-start-1 items-center my-auto mx-auto z-50">
        <Image
          className="mx-auto rounded-full object-cover md:h-[325px] md:w-[325px] lg:h-[400p] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
          src={urlFor(portfolioInfo?.profilePic).url()}
          width={250}
          height={250}
          alt="Picture of Sam"
        />
      </div>
      <div className="right orbit"></div>
      <div className="left orbit"></div>
    </div>
  );
}

export default BackGroundCircles;
