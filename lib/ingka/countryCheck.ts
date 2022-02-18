// get all stores for a given ISO code
import ingka from "ikea-availability-checker";

export default async function getStores(ISOCode) {
  try {
    const stores = await ingka.stores.findByCountryCode(ISOCode); // ask ikea api for store
    if (stores.length > 0) {
      // return store if found
      return {
        success: true,
        stores: stores,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (err) {
    return {
      success: false,
    };
  }
}
