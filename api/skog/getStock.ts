import type { VercelRequest, VercelResponse } from "@vercel/node";
import ikeaStoreLookup from "../../lib/ingka/storeCheck";
import ikeaStockLookup from "../../lib/ingka/stockCheck";

export default async (req: VercelRequest, res: VercelResponse) => {
  const {
    buCode,
    prodCode, // unused unless user asks for individual product
  } = req.query;

  // check if buCode
  if (!buCode) {
    return res.status(400).json({
      success: false,
      message: "Missing buCode",
    });
  }

  const ikeaStore = await ikeaStoreLookup(buCode);

  // look up stock for store
  if (ikeaStore.success) {
    const ikeaStock = await ikeaStockLookup(buCode, prodCode || "00402813"); // 00402813 is code for big bear

    // return stock data
    return res.status(200).json({
      success: ikeaStock.success,
      store: ikeaStore.store,
      stock: ikeaStock.stock,
    });
  }

  return res.status(200).json({
    success: false,
    message: "Store not found",
  });
};
