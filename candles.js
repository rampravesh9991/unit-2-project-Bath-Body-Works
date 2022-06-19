let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48cfba07/crop/026499664_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Sunny Tropical Mango",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "1",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3c22149c/crop/026438500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Candle",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "2",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwde994d02/crop/026299738_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Eucalyptus Spearmint",
    use: "Candle",
    price: "$3.50",
    productID: "3",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8749e6/crop/026390559_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Laundry Day",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "4",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe90c060b/crop/026495798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Champagne Toast",
    use: "Candle",
    price: "$7.47",
    productID: "5",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw26858c2d/crop/026412356_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "White Tea and sage",
    use: "Candle",
    price: "$4.12",
    productID: "6",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61b87faa/crop/026440720_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Strawberry Pound cake",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "7",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw40aaca8c/crop/026499672_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Champagne Toast & Fresh Orange",
    use: "Candle",
    price: "$3.37",
    productID: "8",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw995ccba1/crop/026495795_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Black Cherry Merlot",
    use: "Candle",
    price: "$3.50",
    productID: "9",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0a734443/crop/026412341_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Endless Weekend",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "10",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ba36a12/hires/026441623_alt_1.jpg?sh=413&yocs=s_",
    name: "Waikiki Beach Coconut",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "11",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfd437e29/hires/026441624_alt_1.jpg?sh=413&yocs=s_",
    name: "Island Margarita",
    use: "Candle",
    price: "$3.50",
    productID: "12",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9985836/crop/026458601_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Freshcut Lilacs",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "13",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8a5f8d20/crop/026518375_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Toasted Pineapple Marshmallow",
    use: "Gentle Foaming Hand Soap",
    price: "$3.75",
    productID: "14",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad70deb6/crop/026467605_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Iced Lemon Pound Cake",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "15",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw47f8aa1b/crop/026495796_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cactus Blossom",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "16",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe279104/crop/026517161_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cinnamon Spiced Vanilla & Paris Café",
    use: "3-Wick Candle",
    price: "$3.37",
    productID: "17",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw802d508a/crop/026412340_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Eucalyptus Rain",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "18",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb87782ed/crop/026499673_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Market Peach & Strawberry Pound Cake",
    use: "Candle",
    price: "$3.75",
    productID: "19",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb33afc77/crop/026489715_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Warm Apple Pie",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "20",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8f5a18cd/crop/026487364_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Summer Boardwalk",
    use: "Candle",
    price: "$6.50",
    productID: "21",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2fbc7e6c/crop/026489719_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "WaterMelon Lamonade",
    use: "Candle",
    price: "$3.75",
    productID: "22",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6a495ea/crop/026397123_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Lakeside Moarning",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "23",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw70e74edd/crop/026480790_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Raspberry Mimosa",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "24",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61b87faa/crop/026440720_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Strawberry Pound Cake",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a2978d1/hires/026448190_alt_1.jpg?sh=413&yocs=o_s_",
    name: "Iced Dragonfruit Tea",
    use: "Single Wick Candle",
    price: "$5.95",
    productID: "26",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe279104/crop/026517161_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Cinnamon Spiced Vanilla & Paris Café",
    use: "3-Wick Candle",
    productID: "27",
    price: "$12.25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1a9f33fb/crop/026397122_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "White Lavander Eucalyptus",
    use: "Candle",
    price: "$2.25",
    productID: "28",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcc92eb7f/crop/026476584_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Paradise Clove",
    use: "Candle",
    price: "$4.25",
    productID: "29",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c01dc8f/crop/026480469_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "White Yea And sage",
    use: "Candle",
    price: "$3.75",
    productID: "30",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd3e612df/crop/026410258_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Linen Lavander",
    use: "Candle",
    price: "$12.47",
    productID: "31",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0b5bcfe6/hires/026438398_alt_1.jpg?sh=413&yocs=s_",
    name: "Mahagony Coconut",
    use: "Ultimate Hydration Body Cream",
    price: "$3.87",
    productID: "32",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c3a6b95/crop/026441612_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Passion Fruit And Banana",
    use: "Gentle Foaming Hand Soap",
    price: "$4.25",
    productID: "33",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b2fd19b/crop/026410372_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Pineapple Passionfruit",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "34",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwde994d02/crop/026299738_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Eucalyptus Spearmint",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "35",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8749e6/crop/026390559_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Laundry Day",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "36",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe90c060b/crop/026495798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Champagne Toast",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "37",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw497cbbee/hires/026441620_alt_1.jpg?sh=413&yocs=s_",
    name: "Tiki Beach",
    use: "Candle",
    price: "$3.75",
    productID: "38",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw26858c2d/crop/026412356_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "White Tea & Sage",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "39",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfb1a45df/hires/026489713_alt_1.jpg?sh=413&yocs=o_s_",
    name: "Firecracker Pop",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "40",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0a734443/crop/026412341_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Endless Weekend",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "41",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9985836/crop/026458601_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Fresh Cut Lilacs",
    use: "3-Wick Candle",
    price: "$12.25",
    productID: "42",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76cbe460/crop/026489717_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Figi White sands",
    use: "Candle",
    price: "$3.87",
    productID: "43",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9afbecb2/crop/026441608_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Strawberry Daiquiri",
    use: "Candle",
    price: "$3.50",
    productID: "44",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad70deb6/crop/026467605_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Iced Lemon Pound Cake",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "45",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ba36a12/hires/026441623_alt_1.jpg?sh=413&yocs=o_s_",
    name: "Waikiki Beach Coconut",
    use: "3-Wick Candle",
    price: "$13.25",
    productID: "46",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0a56a8b1/crop/026495797_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Hibiscus WaterFall",
    use: "Candle",
    price: "$3.75",
    productID: "47",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ae1a56a/hires/026441621_alt_1.jpg?sh=413&yocs=s_",
    name: "Warm Ocean Breeze",
    use: "Ultimate Hydration Body Cream",
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
