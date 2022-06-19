let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw728ca70c/crop/026533668_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Mahogany Teakwood",
    use: "Fragrance-refile",
    price: "$12.25",
    productID: "1",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb380531f/crop/026533669_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Eucalyptus Mint",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "2",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe7f95d42/crop/026395947_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Mahogany Coconut",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "3",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0f068f3b/crop/026533680_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Launndry Day",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "4",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw636fdaee/crop/026533676_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Lavender Vanilla",
    use: "Fragrance Refill",
    price: "$7.47",
    productID: "5",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f907e74/crop/026533674_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cloud Nine",
    use: "Fine Fragrance Mist",
    price: "$4.12",
    productID: "6",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2740ff46/crop/026533682_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "White Tea & Sage",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "7",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ac800b1/crop/026397332_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Eucalyptus Rain",
    use: "Fragrance Refill",
    price: "$3.37",
    productID: "8",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwacac8cef/crop/026438462_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Sunshine Mimosa",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "9",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6257acbd/crop/026533681_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Japaneese Cherry Blossom",
    use: "Fragrace Refill",
    price: "$12.25",
    productID: "10",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwec0736ba/crop/026461143_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Waikiki Beach Coconut",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "11",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdc2eabcb/crop/026465831_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Saltwater Breeze",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "12",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw232459aa/crop/026537114_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Black Cherry Merlot",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "13",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce19bcb9/crop/026533670_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Turquoise Waters",
    use: "Rose Water & Ivy",
    price: "$3.75",
    productID: "14",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9cb89874/crop/026397355_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Hibiscus Waterfalls",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "15",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd4db41c9/crop/026537116_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Country Apple",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "16",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe7f95d42/crop/026395947_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Mahagony Coconut",
    use: "Fragrance Refill",
    price: "$3.37",
    productID: "17",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdc2eabcb/crop/026465831_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "SaltWare Breeeze",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "18",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw064205d6/crop/026533677_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Strawberry Pound Cake",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "19",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw817e1b4e/crop/026395962_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cinnamon Spiced Vanilla",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "20",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfca97c50/crop/026412404_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Aloha Kiwi Passionfruit",
    use: "Wallflowers Fragrance Refills, 2-Pack",
    price: "$6.50",
    productID: "21",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcc9d885d/crop/026537119_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Limoncello",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "22",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0bf6466f/crop/026537115_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Endless Weekend",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "23",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe2090fa4/crop/026412389_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Watermelon Lemonade",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "24",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4e76a748/crop/026468718_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Strawberry Daiquiri",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9cb89874/crop/026397355_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Hibiscus Waterfall",
    use: "Fragrance Refill",
    price: "$5.95",
    productID: "26",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f556098/crop/026461142_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Island Margarita",
    use: "Fragrance Refill",
    productID: "27",
    price: "$12.25",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw565245b6/crop/026408259_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Mango Mai Tai",
    use: "Car Fragrance Refill",
    price: "$2.25",
    productID: "28",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95fd89d3/crop/026533672_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Succulent Planter Visor Clip",
    use: "Car Fragrance Holder",
    price: "$4.25",
    productID: "29",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0da5f40c/crop/026532389_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Chammpagne Toast & Orange",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "30",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0e6a743b/crop/026412398_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Warm Ocean Breeze",
    use: "Fragrance Refill",
    price: "$12.47",
    productID: "31",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb83b3c4f/crop/026394698_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Raspberrys & wipped vanilla",
    use: "Fragrance Refill",
    price: "$3.87",
    productID: "32",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw02d3cf46/crop/026291867_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "A Thousand Wishes",
    use: "Fragrence refill",
    price: "$4.25",
    productID: "33",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw027a6c3c/crop/026412410_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Vanilla Coconut",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "34",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw35a5446f/crop/026533675_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cucumber Melon",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "35",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbfc205b3/crop/026412406_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pineapple Mango",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "36",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw407d0967/crop/026395960_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Warm Ocean Breeze",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "37",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1c2df542/crop/026533684_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Cactus Blossom",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "38",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc0079183/crop/026421286_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Pink Pineapple Sunrise",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "39",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw412c476c/crop/026399185_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Waikiki Beach coconut",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "40",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ed19224/crop/026397318_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "RainForest Gardenia",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "41",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5392478d/crop/026412386_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Tiki Beach",
    use: "Fragrance Refill",
    price: "$12.25",
    productID: "42",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82e3c538/crop/026399184_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Island Margarita",
    use: "Fragrance Refill",
    price: "$3.87",
    productID: "43",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ac800b1/crop/026397332_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Eucalyptus Rain",
    use: "Wallflowers Fragrance Refill",
    price: "$3.50",
    productID: "44",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa7235a0e/crop/026395961_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Smoked Vanilla",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "45",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw28cb3c07/crop/026487226_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Peach Benilli",
    use: "Fragrance Refill",
    price: "$13.25",
    productID: "46",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwacac8cef/crop/026438462_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Sunshine Mimosa",
    use: "Fragrance Refill",
    price: "$3.75",
    productID: "47",
    btnName: "ADD TO BAG",
    stars: "",
  },
  {
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw45b4ce74/crop/026440305_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
    name: "Fresh Coconut Cotton",
    use: "Fragrance Refill",
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
