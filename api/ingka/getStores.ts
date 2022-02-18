import type { VercelRequest, VercelResponse } from "@vercel/node";
import countryCheck from "../../lib/ingka/countryCheck";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { ISOCode } = req.query;

  // check if ISOCode exist
  if (!ISOCode) {
    return res.status(400).json({
      success: false,
      message: "Missing ISOCode",
    });
  }

  const ikeaStores = await countryCheck(ISOCode);

  // return store data
  return res.status(200).json(ikeaStores);
};
