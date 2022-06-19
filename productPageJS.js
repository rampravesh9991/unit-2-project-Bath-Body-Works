let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw03f81e19/crop/026458602_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Fresh Spring Morning", use : "3-Wick Candle", price : "$12.25",productID : "1", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d5e64ca/crop/026490034_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Sunshine & Lemons", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "2", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe7f95d42/crop/026395947_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Mahogany Coconut", use : "Wallflowers Fragrance Refill", price : "$3.50",productID : "3", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3c22149c/crop/026438500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Watermelon Lemonade", use : "Single Wick Candle", price : "$5.95",productID : "4", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08050fe7/crop/026328338_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Wearable Snapcase Chain ID Card", use : "PocketBac Holder", price : "$7.47",productID : "5", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcf85ae23/crop/026414520_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Cloud Nine", use : "Fine Fragrance Mist", price : "$4.12",productID : "6", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8a5f8d20/crop/026518375_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Toasted Pineapple Marshmallow", use : "3-Wick Candle", price : "$12.25",productID : "7", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw356929cc/crop/026300558_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Gingham Heart of Gold", use : "Super Smooth Body Lotion", price : "$3.37",productID : "8", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwacac8cef/crop/026438462_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Sunshine Mimosa", use : "Wallflowers Fragrance Refill", price : "$3.50",productID : "9", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw40aaca8c/crop/026499672_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Champagne Toast & Fresh Orange", use : "3-Wick Candle", price : "$12.25",productID : "10", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f23f750/crop/026482403_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Coastal Watermelon", use : "Single Wick Candle", price : "$5.95",productID : "11", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdc2eabcb/crop/026465831_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Saltwater Breeze", use : "Wallflowers Fragrance Refill", price : "$3.50",productID : "12", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c01dc8f/crop/026480469_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "White Tea & Sage", use : "Single Wick Candle", price : "$5.95",productID : "13", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw106bef11/crop/026410963_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Turquoise Waters", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "14", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9cb89874/crop/026397355_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Hibiscus Waterfalls", use : "Wallflowers Fragrance Refill", price : "$3.50",productID : "15", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48cfba07/crop/026499664_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Sunny Tropical Mango", use : "3-Wick Candle", price : "$12.25",productID : "16", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf9be1175/crop/026414515_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Pastel Skies", use : "Shower Gel", price : "$3.37",productID : "17", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc3b7d8c3/crop/026518374_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Pink Petal Tea Cake", use : "3-Wick Candle", price : "$12.25",productID : "18", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw87507441/crop/026517957_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Rainbow Cereal", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "19", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa0b2a2ac/hires/026448183_alt_1.jpg?sh=413&yocs=o_s_",name : "Waikiki Beach Coconut", use : "Single Wick Candle", price : "$5.95",productID : "20", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfca97c50/crop/026412404_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Aloha Kiwi Passionfruit", use : "Wallflowers Fragrance Refills, 2-Pack", price : "$6.50",productID : "21", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw444ae756/crop/026407233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Strawberry Pound Cake", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "22", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76cbe460/crop/026489717_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Fiji White Sands", use : "3-Wick Candle", price : "$12.25",productID : "23", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw70e74edd/crop/026480790_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Raspberry Mimosa", use : "Single Wick Candle", price : "$5.95",productID : "24", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw61b87faa/crop/026440720_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Strawberry Pound Cake", use : "3-Wick Candle", price : "$12.25",productID : "25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a2978d1/hires/026448190_alt_1.jpg?sh=413&yocs=o_s_",name : "Iced Dragonfruit Tea", use : "Single Wick Candle", price : "$5.95",productID : "26", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe279104/crop/026517161_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Cinnamon Spiced Vanilla & Paris Café", use : "3-Wick Candle",productID : "27", price : "$12.25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw565245b6/crop/026408259_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Mango Mai Tai", use : "Car Fragrance Refill", price : "$2.25",productID : "28", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd81e9907/crop/026235740_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Succulent Planter Visor Clip", use : "Car Fragrance Holder", price : "$4.25",productID : "29", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe4bced3f/crop/026410967_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Pink Pineapple Sunrise", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "30", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa30f8953/crop/026470650_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Pink Flamingo", use : "Gentle Foaming Soap Holder", price : "$12.47",productID : "31", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwffe6b6fe/crop/026297856_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Twilight Woods", use : "Ultimate Hydration Body Cream", price : "$3.87",productID : "32", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf03cd9f4/crop/026460821_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Kitchen Lemon", use : "Gentle Foaming Hand Soap", price : "$4.25",productID : "33", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b2fd19b/crop/026410372_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Pineapple Passionfruit", use : "3-Wick Candle", price : "$12.25",productID : "34", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwde994d02/crop/026299738_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Eucalyptus Spearmint", use : "3-Wick Candle", price : "$12.25",productID : "35", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8749e6/crop/026390559_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Laundry Day", use : "3-Wick Candle", price : "$13.25",productID : "36", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe90c060b/crop/026495798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Champagne Toast", use : "3-Wick Candle", price : "$12.25",productID : "37", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf0f64f42/crop/026490035_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Oceanfront Garden", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "38", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw26858c2d/crop/026412356_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "White Tea & Sage", use : "3-Wick Candle", price : "$13.25",productID : "39", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfb1a45df/hires/026489713_alt_1.jpg?sh=413&yocs=o_s_",name : "Firecracker Pop", use : "3-Wick Candle", price : "$13.25",productID : "40", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0a734443/crop/026412341_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Endless Weekend", use : "3-Wick Candle", price : "$13.25",productID : "41", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9985836/crop/026458601_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Fresh Cut Lilacs", use : "3-Wick Candle", price : "$12.25",productID : "42", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1605de44/crop/026297833_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "White Citrus", use : "Ultimate Hydration Body Cream", price : "$3.87",productID : "43", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ac800b1/crop/026397332_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Eucalyptus Rain", use : "Wallflowers Fragrance Refill", price : "$3.50",productID : "44", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad70deb6/crop/026467605_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Iced Lemon Pound Cake", use : "3-Wick Candle", price : "$13.25",productID : "45", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ba36a12/hires/026441623_alt_1.jpg?sh=413&yocs=o_s_",name : "Waikiki Beach Coconut", use : "3-Wick Candle", price : "$13.25",productID : "46", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce12e2ad/crop/026517954_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Cucumber Melon", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "47", btnName: "ADD TO BAG",stars : ""},
    {image :"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6001e2b0/crop/026297834_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",name : "Sea Island Shore", use : "Ultimate Hydration Body Cream", price : "$3.87",productID : "48", btnName: "ADD TO BAG",stars : ""},
]

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