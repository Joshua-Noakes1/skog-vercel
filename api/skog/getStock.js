const ikeaStoreLookup = require('../../lib/ingka/storeCheck'),
    ikeaStockLookup = require('../../lib/ingka/stockCheck');

module.exports = async (req, res) => {
    const {
        buCode,
        prodCode // unused unless user asks for individual product
    } = req.query;

    // check if buCode
    if (!buCode) {
        return res.status(400).json({
            success: false,
            message: 'Missing buCode'
        });
    }

    const ikeaStore = await ikeaStoreLookup(buCode);

    // look up stock for store
    if (ikeaStore.success) {
        const ikeaStock = await ikeaStockLookup(buCode, prodCode || '00402813'); // 00402813 is code for big bear 

        // return stock data
        return res.status(200).json({
            success: ikeaStore.success,
            store: ikeaStore.store,
            stock: ikeaStock.stock
        });
    }

    return res.status(200).json({
        "success": false,
        "message": "Store not found"
    });
};