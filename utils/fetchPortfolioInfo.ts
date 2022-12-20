import { PortfolioInfo } from "../typings";

export const fetchPortfolioInfo = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolioInfo`);

  const data = await res.json();
  const portfolioInfo: PortfolioInfo = data.portfolioInfo;

  return portfolioInfo;
}