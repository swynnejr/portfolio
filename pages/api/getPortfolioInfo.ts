import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PortfolioInfo } from "../../typings";

const query = groq`
  *[_type == "portfolioInfo"][0]
`;

type Data = {
  portfolioInfo: PortfolioInfo[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const portfolioInfo: PortfolioInfo[] = await sanityClient.fetch(query);

  res.status(200).json({ portfolioInfo })
}
