let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
    {
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48b05490/hires/026477886.jpg?sh=471&yocs=s_",
      name: "Coconut Pineapple",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "1",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5ac3227c/crop/026479715_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Oasis",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "2",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwed821d75/crop/026360591_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Happy Wibes",
      use: "Wallflowers Fragrance Refill",
      price: "$3.50",
      productID: "3",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw62d2e0db/crop/026399293_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Clean slate",
      use: "Fine Fragrance Mist",
      price: "$5.95",
      productID: "4",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbd34878b/crop/026402518_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Bahamas Passionfruit & Banana Flower",
      use: "Fine Fragrance Mist",
      price: "$7.47",
      productID: "5",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f7f9dab/crop/026480833_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "One in a Million",
      use: "Fine Fragrance Mist",
      price: "$4.12",
      productID: "6",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf5a5d9e7/crop/026211655_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Fresh Water",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "7",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb31027b2/crop/026281129_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Stone",
      use: "Super Smooth Body Lotion",
      price: "$3.37",
      productID: "8",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc0177f6/crop/026480804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sunset Glow",
      use: "Wallflowers Fragrance Refill",
      price: "$3.50",
      productID: "9",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54ddb4a2/crop/026281138_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Stone",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "10",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6064f1bf/crop/026480834_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Pink Chiffon",
      use: "Fine Fragrance Mist",
      price: "$5.95",
      productID: "11",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf51216f3/crop/026360571_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Happy wibes",
      use: "Wallflowers Fragrance Refill",
      price: "$3.50",
      productID: "12",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb17d5895/crop/026480829_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "One in a million",
      use: "Fine Fragrance Mist",
      price: "$5.95",
      productID: "13",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwee0d4d1c/crop/026480583_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sun kissed",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "14",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0be2f46c/crop/026326994_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Stone",
      use: "Wallflowers Fragrance Refill",
      price: "$3.50",
      productID: "15",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8cc52d55/crop/026402500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Bahamas Passionfruit & Banana Flower",
      use: "Gel",
      price: "$12.25",
      productID: "16",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c5b8594/crop/026402537_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Pink Pineapple Sunrise",
      use: "Shower Gel",
      price: "$3.37",
      productID: "17",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd65b4d05/crop/026398827_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Whipped Berry Meringue",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "18",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41b6e68f/crop/026400338_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Strawberry Pound cake",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "19",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6001e2b0/crop/026297834_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sea Island Shore",
      use: "Fine Fragrance Mist",
      price: "$5.95",
      productID: "20",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw136a4eca/crop/026468798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sunset Glow",
      use: "Wallflowers Fragrance Refills, 2-Pack",
      price: "$6.50",
      productID: "21",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbb27e3a8/crop/026398803_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Whipped Berry Meringue",
      use: "Gel",
      price: "$3.75",
      productID: "22",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw94ced092/crop/026399715_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Bubbly Rose",
      use: "Gel",
      price: "$12.25",
      productID: "23",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbfd3511f/crop/026398840_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Coconut Cream Pie",
      use: "Gel",
      price: "$5.95",
      productID: "24",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw72ffd624/crop/026480575_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sunkissed",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "25",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87f64bbd/crop/026480803_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Country Apple",
      use: "Fine Fragrance Mist",
      price: "$5.95",
      productID: "26",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22050fdc/crop/026419441_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Clear Horizon",
      use: "Fine Fragrance Mist",
      productID: "27",
      price: "$12.25",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbdb80a00/crop/026402517_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Waikiki Beach Coconut",
      use: "Gel",
      price: "$2.25",
      productID: "28",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw96912982/crop/026414627_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Clean Slate",
      use: "Fine Fragrance Mist",
      price: "$4.25",
      productID: "29",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0182825a/crop/026121269_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Summertime Surf",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "30",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw06a10bd4/crop/026042207_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sunset Glow",
      use: "Gentle Foaming Soap Holder",
      price: "$12.47",
      productID: "31",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwef59d3ea/crop/026393190_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Fresh Getaway",
      use: "Ultimate Hydration Body Cream",
      price: "$3.87",
      productID: "32",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9755e388/crop/026395425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Fresh Water",
      use: "Gentle Foaming Hand Soap",
      price: "$4.25",
      productID: "33",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbd71796d/crop/026204154_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Oasis",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "34",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd3a59218/crop/026474722_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sea Island Shore",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "35",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76cb4597/crop/026244608_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Pink Chiffon",
      use: "Fine Fragrance Mist",
      price: "$13.25",
      productID: "36",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7e185485/crop/022731729_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Country Apple",
      use: "Fine Fragrance Mist",
      price: "$12.25",
      productID: "37",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw822a148a/crop/026402506_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Bahamas Passionfruit & Banana Flower",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "38",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8dac0f70/crop/026399713_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Bubbly Rose",
      use: "Fine Fragrance Mist",
      price: "$13.25",
      productID: "39",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08030d4d/hires/026438522_alt_1.jpg?sh=413&yocs=s_",
      name: "At The Beach",
      use: "Fine Fragrance Mist",
      price: "$13.25",
      productID: "40",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwafdf0e0a/crop/026362301_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Happy Vibes",
      use: "Gel",
      price: "$13.25",
      productID: "41",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw581241d3/crop/026360581_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Happy Vibes",
      use: "Gel",
      price: "$12.25",
      productID: "42",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2e8343ca/crop/026398834_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Coconut Cream Pie",
      use: "Ultimate Hydration Body Cream",
      price: "$3.87",
      productID: "43",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1605de44/crop/026297833_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "White Citrus",
      use: "Wallflowers Fragrance Refill",
      price: "$3.50",
      productID: "44",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw58ccfd5f/crop/026400099_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Waikiki Beach coconut",
      use: "Fine Fragrance Mist",
      price: "$13.25",
      productID: "45",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd227e616/crop/026414215_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Waikiki Beach Coconut",
      use: "Fine Fragrance Mist",
      price: "$13.25",
      productID: "46",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw34a254b6/crop/026480805_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Sea Island Shore",
      use: "Gentle Foaming Hand Soap",
      price: "$3.75",
      productID: "47",
      btnName: "ADD TO BAG",
      stars: "",
    },
    {
      image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwebae50f2/crop/026399294_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
      name: "Fresh Water",
      use: "Ultimate Hydration Body Cream",
      price: "$3.87",
      productID: "48",
      btnName: "ADD TO BAG",
      stars: "",
    },
  ];
data.forEach(function(elem){
    let box0 = document.createElement("div");
    box0.setAttribute("class","products")
    let box1 = document.createElement("div");
    let productImage = document.createElement("img");
    productImage.setAttribute("src",elem.image);
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
    type.style.marginTop = "-15px"
    let price = document.createElement("h4");
    price.innerText = elem.price;
    price.style.marginTop = "-10px"
    
    let btn = document.createElement("button");
    btn.setAttribute("id","btn");
    btn.setAttribute("class","classname" )
    btn.addEventListener("click",function(){
        addToCart(elem)
    });
    let btnName = document.createElement("h4");
    btnName.innerText = elem.btnName;
    btn.append(btnName);
    //again inline attributes
    // btn.style.backgroundColor = "rgb(51,51,51)";
    // btn.style.padding = "0px 30px";
    // btn.style.color = "white";    
    // btn.style.border = "none";
    btn.setAttribute("id","pikachu");
    box2.append(productName,type,price,btn);
    
    box0.append(box1,box2);
    document.querySelector("#rightSide").append(box0);
})

function addToCart(elem){
    myCart.push(elem);
    localStorage.setItem("myCart",JSON.stringify(myCart));
}
console.log(myCart);

// document.getElementById("#btn").onmouseover = function() 
// {
//     this.style.backgroundColor = "white";
// }