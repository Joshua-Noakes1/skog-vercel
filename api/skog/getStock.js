const ikeaStoreLookup = require('../../lib/ingka/storeCheck');

module.exports = async (req, res) => { 
    const { buCode } = req.query;
    
    // check if buCode
    if (!buCode) {
        return res.status(400).json({success: false, message: 'Missing buCode'});
    }
    
    const ikeaStore = await ikeaStoreLookup(buCode);

    // look up stock for store
    if (ikeaStore.success) {

    }

    return res.status(200).json(ikeaStore);
};