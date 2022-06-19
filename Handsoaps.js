let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf0f64f42/crop/026490035_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Ocean Front Garden",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "1",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d5e64ca/crop/026490034_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Sunshine & Lemons",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "2",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf03cd9f4/crop/026460821_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Kitchen Lemon",
    use: "Gentle Foaming Hand Soap",
    price: "$3.50",
    productID: "3",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce12e2ad/crop/026517954_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cucumber Lemon",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "4",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe6be7231/crop/026517955_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pineapple Mango",
    use: "Gentle Foaming Hand Soap",
    price: "$7.47",
    productID: "5",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw106bef11/crop/026410963_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Torquise Water",
    use: "Gentle Foaming Hand Soap",
    price: "$4.12",
    productID: "6",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw59aa4b2d/crop/026408218_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Sunshine & Lemon",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "7",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw438076b5/crop/026490032_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Coastal watermelon",
    use: "Gentle Foaming Hand Soap",
    price: "$3.37",
    productID: "8",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf5740b03/crop/026438946_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pink Peach Blossom",
    use: "Gentle Foaming Hand Soap",
    price: "$3.50",
    productID: "9",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95ed6b3b/crop/026438947_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "White Tea & Sage",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "10",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw444ae756/crop/026407233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Strawberry Pound Cake",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "11",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwef606c38/crop/026517959_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pink Lemonade",
    use: "Gentle Foaming Hand Soap",
    price: "$3.50",
    productID: "12",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61e7acc9/crop/026410064_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Coconut Cream Pie",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "13",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw106bef11/crop/026410963_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Turquoise Waters",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "14",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc206f447/crop/026393068_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Fresh Rainfall",
    use: "Gentle Foaming Hand Soap",
    price: "$3.50",
    productID: "15",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcd2ab592/crop/026407234_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Champagne Toast",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "16",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87507441/crop/026517957_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Rainbow  Cerel",
    use: "Gentle Foaming Hand Soap",
    price: "$3.37",
    productID: "17",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw749c7d05/crop/026412617_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Brillitant Bluesky",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "18",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87507441/crop/026517957_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Rainbow Cereal",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "19",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfe21bfa3/crop/026447777_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Tutti Fruity Candy",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "20",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0d937777/crop/026407241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Coastal Air",
    use: "Gentle Foaming Hand Soap",
    price: "$6.50",
    productID: "21",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw444ae756/crop/026407233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Strawberry Pound Cake",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "22",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa18f08e2/crop/026490033_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Torquise Water",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "23",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9dca4783/crop/026410962_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Fiji White Sands",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "24",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0e4ae707/crop/026438944_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pineapple Prosecco",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8a133f26/crop/026410975_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Sea Salt & Lime",
    use: "Gentle Foaming Hand Soap",
    price: "$5.95",
    productID: "26",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0b28cffb/crop/026460671_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Kitchen Lemon",
    use: "Gentle Foaming Hand Soap",
    productID: "27",
    price: "$12.25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6e447759/crop/026407738_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "WaterMelon Lemonade",
    use: "Gentle Foaming Hand Soap",
    price: "$2.25",
    productID: "28",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwff63d984/crop/026410976_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Blueberry Bellinie",
    use: "Gentle Foaming Hand Soap",
    price: "$4.25",
    productID: "29",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe4bced3f/crop/026410967_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Pink Pineapple Sunrise",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "30",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw179cedca/crop/026407236_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Peach Processo Macaron",
    use: "Gentle Foaming Hand Soap",
    price: "$12.47",
    productID: "31",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6154cd0a/crop/026412113_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Mahogany Coconut",
    use: "Gentle Foaming Hand Soap",
    price: "$3.87",
    productID: "32",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf03cd9f4/crop/026460821_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Kitchen Lemon",
    use: "Gentle Foaming Hand Soap",
    price: "$4.25",
    productID: "33",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87fb4d24/crop/026461147_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "BlueBerry Lemonade",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "34",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d17198b/crop/026410065_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "PassionFruit & Banana",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "35",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw26dfff82/crop/026412112_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Island Margarita",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "36",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4df2b0d2/crop/026489233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Sunshine",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "37",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf0f64f42/crop/026490035_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Oceanfront Garden",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "38",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw93015998/crop/026410950_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "French Lavender",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "39",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw24061aab/crop/026385234_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Merry Berry",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "40",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbab5696d/crop/026410977_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Coastal WaterMelon",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "41",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwabea2dc3/crop/026350422_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Winter Candy Apple",
    use: "Gentle Foaming Hand Soap",
    price: "$12.25",
    productID: "42",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw40077495/crop/026407740_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pineapple Mango",
    use: "Gentle Foaming Hand Soap",
    price: "$3.87",
    productID: "43",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa7a28fec/crop/026517956_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Carnival Kettlecorn",
    use: "Gentle Foaming Hand Soap",
    price: "$3.50",
    productID: "44",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdf88c174/crop/026412615_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Lavender Marshmallow",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "45",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw663a4a44/crop/026489230_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Beach Bliss",
    use: "Gentle Foaming Hand Soap",
    price: "$13.25",
    productID: "46",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce12e2ad/crop/026517954_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Cucumber Melon",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "47",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0d937777/crop/026407241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Coastal Air",
    use: "Gentle Foaming Hand Soap",
    price: "$3.87",
    productID: "48",
    btnName: "ADD TO BAG",
    stars: "",
  },
];

data.forEach(function (elem) {
  let box0 = document.createElement("div");
  box0.setAttribute("class", "products");
  let box1 = document.createElement("div");
  let productImage = document.createElement("img");
  productImage.setAttribute("src", elem.image);
  box1.append(productImage);

  let box2 = document.createElement("div");
  let productName = document.createElement("h4");
  productName.innerText = elem.name;
  productName.style.fontSize = "14px";
  productName.style.fontWeight = "bolder";
  productName.style.marginTop = "-15px";
  let type = document.createElement("p");
  type.innerText = elem.use;
  type.style.fontSize = "small";
  type.style.marginTop = "-15px";
  let price = document.createElement("h4");
  price.innerText = elem.price;
  price.style.marginTop = "-10px";

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn");
  btn.setAttribute("class", "classname");
  btn.addEventListener("click", function () {
    addToCart(elem);
  });
  let btnName = document.createElement("h4");
  btnName.innerText = elem.btnName;
  btn.append(btnName);
  btn.style.backgroundColor = "rgb(51,51,51)";
  btn.style.padding = "0px 30px";
  btn.style.color = "white";
  btn.style.border = "none";
  box2.append(productName, type, price, btn);

  box0.append(box1, box2);
  document.querySelector("#rightSide").append(box0);
});

function addToCart(elem) {
  myCart.push(elem);
  localStorage.setItem("myCart", JSON.stringify(myCart));
}
console.log(myCart);

// document.getElementById("#btn").onmouseover = function()
// {
//     this.style.backgroundColor = "white";
// }
