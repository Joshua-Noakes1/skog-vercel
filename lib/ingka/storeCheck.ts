// check if a buCode exists within country
import ingka from "ikea-availability-checker";

export default async function storeCheck(buCode) {
  try {
    const store = await ingka.stores.findById(buCode); // ask ikea api for store
    if (store.length > 0) {
      // return store if found
      return {
        success: true,
        store: store[0],
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
