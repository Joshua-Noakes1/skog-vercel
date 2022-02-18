# skog-vercel

## About

API for skog website. Hosted in vercel at [skog-vercel.vercel.app](https://skog-vercel.vercel.app/).

## API Routes

### Stock

- **GET** /api/ingka/getStores?ISOCode=gb  
You need to supply an ISO format country code as *ISOCode*.  
**Example Response**

```json
{
    "success": true,
    "stores": [
        {
            "buCode": "113",
            "name": "Belfast",
            "coordinates": [
                -5.859231,
                54.626391
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "142",
            "name": "Birmingham",
            "coordinates": [
                -2.014489,
                52.56876
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "264",
            "name": "Bristol",
            "coordinates": [
                -2.564943,
                51.472816
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "267",
            "name": "Cardiff",
            "coordinates": [
                -3.188267,
                51.462189
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "144",
            "name": "Croydon",
            "coordinates": [
                -0.123897,
                51.380071
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "265",
            "name": "Edinburgh",
            "coordinates": [
                -3.168268,
                55.88104
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "548",
            "name": "Exeter",
            "coordinates": [
                -3.481548,
                50.706806
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "143",
            "name": "Gateshead",
            "coordinates": [
                -1.680994,
                54.959236
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "266",
            "name": "Glasgow",
            "coordinates": [
                -4.358525,
                55.870231
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "567",
            "name": "Greenwich",
            "coordinates": [
                0.013971,
                51.489511
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "262",
            "name": "Lakeside",
            "coordinates": [
                0.283134,
                51.480207
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "261",
            "name": "Leeds",
            "coordinates": [
                -1.648808,
                53.745462
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "186",
            "name": "Manchester",
            "coordinates": [
                -2.101393,
                53.491007
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "185",
            "name": "Milton Keynes",
            "coordinates": [
                -0.729218,
                52.005729
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "263",
            "name": "Nottingham",
            "coordinates": [
                -1.280723,
                53.002673
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "461",
            "name": "Reading",
            "coordinates": [
                -1.067257,
                51.442125
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "519",
            "name": "Sheffield",
            "coordinates": [
                -1.410659,
                53.407182
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "125",
            "name": "Southampton",
            "coordinates": [
                -1.411314,
                50.903791
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "255",
            "name": "Tottenham",
            "coordinates": [
                -0.047207,
                51.608716
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "140",
            "name": "Warrington",
            "coordinates": [
                -2.628479,
                53.418382
            ],
            "countryCode": "gb"
        },
        {
            "buCode": "141",
            "name": "Wembley",
            "coordinates": [
                -0.260354,
                51.553735
            ],
            "countryCode": "gb"
        }
    ]
}
```

- **GET** /api/skog/getStock?buCode=0&prodCode=0  
You need to supply a store ID code as *buCode* and an optional product code as *prodCode* within your request to get data about a product.  
**Example response**

```json
{
    "success": true,
    "store": {
        "buCode": "038",
        "name": "Dublin",
        "countryCode": "ie"
    },
    "stock": {
        "buCode": "038",
        "productId": "00402813",
        "createdAt": "2022-02-18T21:02:57.932Z",
        "forecast": [
            {
                "stock": 61,
                "date": "2022-02-19T00:00:00.000Z",
                "probability": "HIGH"
            },
            {
                "stock": 61,
                "date": "2022-02-20T00:00:00.000Z",
                "probability": "HIGH"
            },
            {
                "stock": 61,
                "date": "2022-02-21T00:00:00.000Z",
                "probability": "HIGH"
            },
            {
                "stock": 61,
                "date": "2022-02-22T00:00:00.000Z",
                "probability": "HIGH"
            }
        ],
        "probability": "HIGH",
        "restockDate": null,
        "stock": 59
    }
}
```
