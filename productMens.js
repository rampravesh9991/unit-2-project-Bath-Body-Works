let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw829a3b20/large/026169885.jpg",name : "Freshwater", use : "Cologne Set", price : "$12.25",productID : "1", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw81c7096e/large/026183300.jpg",name : "Freshwater", use : "Mini Cologne", price : "$3.75",productID : "2", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw229f4014/large/023430486.jpg",name : "Teakwood", use : "Cologne", price : "$3.50",productID : "3", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe9fdfade/large/026311427.jpg",name : "Noir", use : "Ultimate Hydration Body Cream", price : "$5.95",productID : "4", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwdb947c7a/large/026419444.jpg",name : "Clear Horizon", use : "Ultimate Hydration Body Cream", price : "$7.47",productID : "5", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2c8c50d1/large/026339139.jpg",name : "Marble", use : "2-In-1 Body Wash & Scrub", price : "$4.12",productID : "6", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw11eb4dae/large/023430476.jpg",name : "Teakwood", use : "2-In-1 Hair + Body Wash", price : "$12.25",productID : "7", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw296bd718/large/026282784.jpg",name : "Marble", use : "Ultimate Hydration Body Cream", price : "$3.37",productID : "8", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0faed088/large/026281138.jpg",name : "Stone", use : "Deodorizing Body Spray", price : "$3.50",productID : "9", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw5e6d370e/large/026299760.jpg",name : "Bourbon", use : "Cologne", price : "$12.25",productID : "10", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw36694a1b/large/026281144.jpg",name : "Stone", use : "Cologone", price : "$5.95",productID : "11", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcf114e33/large/026134831.jpg",name : "Bourbon", use : "Cologne", price : "$3.50",productID : "12", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw11eb4dae/large/023430476.jpg",name : "Teakwood", use : "2-In-1 Hair + Body Wash", price : "$5.95",productID : "13", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcaf30557/large/026281150.jpg",name : "Stone", use : "Gift Box Set", price : "$3.75",productID : "14", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4d479953/large/026414629.jpg",name : "Clean Slate", use : "Ultra Shea Body Cream", price : "$3.50",productID : "15", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw90540de1/large/026098883.jpg",name : "Ocean", use : "Body Lotion", price : "$12.25",productID : "16", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2de2ccf7/large/026311425.jpg",name : "Noir", use : "3-In-1 Hair, Face &Amp; Body Wash", price : "$3.37",productID : "17", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw6e1394a4/large/025140295.jpg",name : "Endless Weekend", use : "Gift Bag Set", price : "$12.25",productID : "18", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw11a2a987/large/026237209.jpg",name : "Ocean", use : "Gift Bag Set", price : "$3.75",productID : "19", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbfa5c6a7/large/026247618.jpg",name : "Marble & Wood Vent Clip", use : "Car Fragrance Holde", price : "$5.95",productID : "20", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw066c3461/large/026235742.jpg",name : "Gemstone Butterfly Visor Clipit", use : "Car Fragrance Holder", price : "$6.50",productID : "21", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8e9490b3/large/026410946.jpg",name : "Lavender Vanilla", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "22", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw214bcf4f/large/026411736.jpg",name : "Linen & Lavender Enhanced", use : "Wallflowers Fragrance Refill", price : "$12.25",productID : "23", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw15f2b8e5/large/026353933.jpg",name : "Sweet Cinnamon Pumpkin", use : "Wallflowers Fragrance Refill", price : "$5.95",productID : "24", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd3db40c2/large/026172263.jpg",name : "Marble", use : "Wallflowers Fragrance Plug", price : "$12.25",productID : "25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfa2716c2/large/026397332.jpg",name : "Eucalyptus Rain Enhanced", use : "Wallflowers Fragrance Refill", price : "$5.95",productID : "26", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw5e6d370e/large/026299760.jpg",name : "Eucalyptus Rain Enhanced", use : "Wallflowers Fragrance Refill",productID : "27", price : "$12.25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7f0f5241/large/026397329.jpg",name : "Mahogany Teakwood", use : "Car Fragrance Refill", price : "$2.25",productID : "28", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwee7b6950/large/023940813.jpg",name : "Champagne Toast", use : "Single Wick Candle", price : "$4.25",productID : "29", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3e103b2c/large/026208145.jpg",name : "Eucalyptus Spearmint", use : "Wallflowers Fragrance Refill", price : "$3.75",productID : "30", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw076322f0/large/026421284.jpg",name : "Eucalyptus Spearmint", use : "Wallflowers Fragrance Refill", price : "$12.47",productID : "31", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw076322f0/large/026421284.jpg",name : "Cozy Linen", use : "Wallflowers Fragrance Refill", price : "$3.87",productID : "32", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw38b87af5/large/026395962.jpg",name : "Cinnamon Spiced Vanilla Enha", use : "Wallflowers Fragrance Refil;", price : "$4.25",productID : "33", btnName: "ADD TO BAG",stars : ""},
    {image :"hhttps://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe9fdfade/large/026311427.jpg",name : "Mini Gift Bag", use : "Mini Gift Bage", price : "$12.25",productID : "34", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw90540de1/large/026098883.jpg",name : "Gold Glitter", use : "Gift Bag", price : "$12.25",productID : "35", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf6c834c3/large/024512124.jpg",name : "Laundry Day", use : "3-Wick Candle", price : "$13.25",productID : "36", btnName: "ADD TO BAG",stars : ""},
    {image :"hthttps://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf8e062e8/large/026339138.jpg",name : "Bourbon", use : "3-Wick Candle", price : "$12.25",productID : "37", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw57fffeea/large/024512612.jpg",name : "Oceanfront Garden", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "38", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa8a05785/large/026195974.jpg",name : "White Tea & Sage", use : "3-Wick Candle", price : "$13.25",productID : "39", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb8f0f0b8/large/026401723.jpg",name : "Firecracker Pop", use : "3-Wick Candle", price : "$13.25",productID : "40", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwface79d7/large/026322804.jpg",name : "Endless Weekend", use : "3-Wick Candle", price : "$13.25",productID : "41", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbb8506f6/large/026098885.jpg",name : "Ocean", use : "Bear", price : "$12.25",productID : "42", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2e196d2f/large/026124858.jpg",name : "Dahlia", use : "Mini Perfume Spray", price : "$3.87",productID : "43", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4da5cd3d/large/026393537.jpg",name : "Gingham Love", use : "Fine Fragrance Mist", price : "$3.50",productID : "44", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd6418f04/large/026400333.jpg",name : "Fine Fragrance Mist", use : "Confetti Daydream", price : "$13.25",productID : "45", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw5ea546e2/large/025135605.jpg",name : "Into the Night", use : "Gift Bag Set", price : "$13.25",productID : "46", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw5387e932/large/026398821.jpg",name : "Pear Crème Brulee", use : "Fine Fragrance Mist", price : "$3.75",productID : "47", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1677f2e3/large/026400316.jpg",name : "Sunshine Mimosa Shower Gel", use : "Shower Gel", price : "$3.87",productID : "48", btnName: "ADD TO BAG",stars : ""},
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