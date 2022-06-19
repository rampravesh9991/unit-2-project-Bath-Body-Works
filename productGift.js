let myCart = JSON.parse(localStorage.getItem("mycart")) || [];

let data = [
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8820ca90/large/025138699.jpg",name : "Japanese Cherry Blossom", use : "Gift Box Set", price : "$12.25",productID : "1", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw141dcb39/large/026171409.jpg",name : "Winter Candy Apple", use : "Super Smooth Body Lotion", price : "$3.75",productID : "2", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa9877c77/large/024471405.jpg",name : "A Thousand Wishes", use : "Super Smooth Body Lotion", price : "$3.50",productID : "3", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw84e8f4d7/large/mrkfjbzozkqxgnx_25137400.jpg",name : "Into the Night", use : "Gift Box Set", price : "$5.95",productID : "4", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0fcc76ea/large/026183228.jpg",name : "Pumpkin Treats", use : "Gift Bag Set", price : "$7.47",productID : "5", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw30d26b37/large/rmb7q54hulvjw2l_25137401.jpg",name : "Perfect Peony", use : "Gift Box Set", price : "$4.12",productID : "6", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0d27ef69/large/x8ge0t4shsme3op_25137403.jpg",name : "Japanese Cherry Blossom", use : "Gift Box Set", price : "$12.25",productID : "7", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw02cd342b/large/025140251.jpg",name : "Champagne Toast", use : "Gift Bag Set", price : "$3.37",productID : "8", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw37a0d211/large/3881v322mp7au3g_25137405.jpg",name : "Mad About You", use : "Mini Gift Box Setl", price : "$3.50",productID : "9", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4d337ebc/large/s9ajze7tnnfk9eu_25137397.jpg",name : "Dark Kiss", use : "Gift Bag Set", price : "$12.25",productID : "10", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwafd437d9/large/lqar1ujnbs8dk41_25137399.jpg",name : "Coastal Watermelon", use : "Gift Box Set", price : "$5.95",productID : "11", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw6e1394a4/large/025140295.jpg",name : "Endless Weekend", use : "Gift Bag Set", price : "$3.50",productID : "12", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7571b6d8/large/o3p1ju7vtjt3jb2_25127996.jpg",name : "Mahogany Teakwood", use : "Mini Candle Gift Set", price : "$5.95",productID : "13", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwc84de906/large/025140007.jpg",name : "Rose", use : "Gift Box Set", price : "$3.75",productID : "14", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw720c11ea/large/025140003.jpg",name : "Eucalyptus Spearmint", use : "Gift Box Set", price : "$3.50",productID : "15", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3401870f/large/cxu8r5bnnz14vdo_25140195.jpg",name : "Dark Kiss", use : "COR-BOX GS PCB", price : "$12.25",productID : "16", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw02cd342b/large/025140251.jpg",name : "Champagne Toast", use : "Gift Bag Set", price : "$3.37",productID : "17", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw6e1394a4/large/025140295.jpg",name : "Endless Weekend", use : "Gift Bag Set", price : "$12.25",productID : "18", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff0bb74c/large/t0tw5j6uyspw7i2_25141597.jpg",name : "Champagne Toast", use : "Gift Bag Set", price : "$3.75",productID : "19", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbfa5c6a7/large/026247618.jpg",name : "Marble & Wood Vent Clip", use : "Car Fragrance Holde", price : "$5.95",productID : "20", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw066c3461/large/026235742.jpg",name : "Gemstone Butterfly Visor Clipit", use : "Car Fragrance Holder", price : "$6.50",productID : "21", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8e9490b3/large/026410946.jpg",name : "Lavender Vanilla", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "22", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw214bcf4f/large/026411736.jpg",name : "Linen & Lavender Enhanced", use : "Wallflowers Fragrance Refill", price : "$12.25",productID : "23", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw15f2b8e5/large/026353933.jpg",name : "Sweet Cinnamon Pumpkin", use : "Wallflowers Fragrance Refill", price : "$5.95",productID : "24", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw251331aa/large/gjwt9654s81si99_667555537773.jpg",name : "LIGHT PINK", use : "Wallflowers Fragrance Plug", price : "$12.25",productID : "25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfa2716c2/large/026397332.jpg",name : "Eucalyptus Rain Enhanced", use : "Wallflowers Fragrance Refill", price : "$5.95",productID : "26", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3eafde59/large/026203991.jpg",name : "Eucalyptus Rain Enhanced", use : "Wallflowers Fragrance Refill",productID : "27", price : "$12.25", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7f0f5241/large/026397329.jpg",name : "Mahogany Teakwood", use : "Car Fragrance Refill", price : "$2.25",productID : "28", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwee7b6950/large/023940813.jpg",name : "Champagne Toast", use : "Single Wick Candle", price : "$4.25",productID : "29", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3e103b2c/large/026208145.jpg",name : "Eucalyptus Spearmint", use : "Wallflowers Fragrance Refill", price : "$3.75",productID : "30", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw076322f0/large/026421284.jpg",name : "Eucalyptus Spearmint", use : "Wallflowers Fragrance Refill", price : "$12.47",productID : "31", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw076322f0/large/026421284.jpg",name : "Cozy Linen", use : "Wallflowers Fragrance Refill", price : "$3.87",productID : "32", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw38b87af5/large/026395962.jpg",name : "Cinnamon Spiced Vanilla Enha", use : "Wallflowers Fragrance Refil;", price : "$4.25",productID : "33", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8807f7ca/large/026401726.jpg",name : "Mini Gift Bag", use : "Mini Gift Bage", price : "$12.25",productID : "34", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1fa210cb/large/026285431.jpg",name : "Gold Glitter", use : "Gift Bag", price : "$12.25",productID : "35", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf6c834c3/large/024512124.jpg",name : "Laundry Day", use : "3-Wick Candle", price : "$13.25",productID : "36", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwface79d7/large/026322804.jpg",name : "Champagne Toast", use : "3-Wick Candle", price : "$12.25",productID : "37", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw57fffeea/large/024512612.jpg",name : "Oceanfront Garden", use : "Gentle Foaming Hand Soap", price : "$3.75",productID : "38", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa8a05785/large/026195974.jpg",name : "White Tea & Sage", use : "3-Wick Candle", price : "$13.25",productID : "39", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb8f0f0b8/large/026401723.jpg",name : "Firecracker Pop", use : "3-Wick Candle", price : "$13.25",productID : "40", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwface79d7/large/026322804.jpg",name : "Endless Weekend", use : "3-Wick Candle", price : "$13.25",productID : "41", btnName: "ADD TO BAG",stars : ""},
    {image :"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf334d5ea/large/otg696ae8hagykc_24584769.jpg",name : "Exclusive Blue Gingham", use : "Bear", price : "$12.25",productID : "42", btnName: "ADD TO BAG",stars : ""},
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