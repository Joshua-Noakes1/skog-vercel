// check if stock exists within a store
const ingka = require('ikea-availability-checker');

async function stockCheck(buCode, prodCode) {
    try {
        const stock = await ingka.availability(buCode, prodCode); // ask ikea api for stock
        return {
            success: true,
            stock
        }
    } catch (err) {
        return {
            success: false,
            stock: {
                buCode: 0,
                productId: 0,
                createdAt: new Date().toISOString(),
                forecast: [{
                    "stock": 0,
                    "date": new Date(Date.now() + 86500000).toISOString(), // 86500000 is 1 day in milliseconds
                    "probability": "LOW"
                }, {
                    "stock": 0,
                    "date": new Date(Date.now() + 172800000).toISOString(),
                    "probability": "LOW"
                }, {
                    "stock": 0,
                    "date": new Date(Date.now() + 259200000).toISOString(),
                    "probability": "LOW"
                }, {
                    "stock": 0,
                    "date": new Date(Date.now() + 345600000).toISOString(),
                    "probability": "LOW"
                }, ],
                probability: "LOW",
                restockDate: null,
                stock: 0
            }
        };
    }
}

module.exports = stockCheck;