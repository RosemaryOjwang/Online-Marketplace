//Business Logic
var receipt = document.getElementById("my-receipt");
let discountedPrice;
function rompersDiscount()  {
    const rompersPrice = 100;
    const percentageDiscount = 10;
    discountedPrice = (100- percentageDiscount)/100 * rompersPrice;
    return discountedPrice;

}
function diaperVestDiscount()   {
    const percentageDiscount = 5;
}
function socksDiscount()    {
    const percentageDiscount = 10;
}
function shawlDiscount()    {
    const percentageDiscount = 25;
}
function blanketDiscount()  {
    const percentageDiscount = 25;
}
function babyCribDiscount() {
    const percentageDiscount = 15;
}
function sweatersDiscount() {
    const percentageDiscount = 20;
}
function babyWalkerDiscount()   {
    const percentageDiscount = 25;
}
function vestsDiscount()    {
    const percentageDiscount = 5;
}
function receivingSetsDiscount()    {
    const percentageDiscount = 15;
}
function babyBasinDiscount()    {
    const percentageDiscount = 20;
}
function flannelsDiscount() {
    const percentageDiscount = 5;
}
function shippingDetails()  {
    document.getElementById("receiver-name").innerHTML = document.getElementById("name").value;
    document.getElementById("receiver-address").innerHTML = document.getElementById("address").value;
    document.getElementById("receiver-contact").innerHTML = document.getElementById("phone-number").value;
}

//UI Logic
function handleForm(event)  {
    event.preventDefault();
    const purchase =document.getElementById("purchase").value;
    const quantity1 = document.getElementById("noOfItems").value;
    console.log(quantity1);
    
    receipt = document.getElementById("my-receipt");
    receipt.style.display = "block";
    receipt.style.width = "450px";
    receipt.style.marginLeft = "400px";
    let form = document.getElementById("items");
    form.style.display = "none";
    const dateNow = new Date();
    document.getElementById("todays-date").innerHTML = dateNow;
    document.getElementById("selected-item").innerHTML = purchase;
    document.getElementById("quantity").innerHTML = quantity1;
    document.getElementById("quantity").style.marginLeft = "50px";
    document.getElementById("quantity").style.marginRight = "50px";

    shippingDetails();
    
    

    let total;

    if (purchase === 'Rompers')   {
        rompersDiscount();
        console.log(document.getElementById("discounted-price").innerText = "@" + discountedPrice);

        total = discountedPrice * quantity1;
        document.getElementById("amount").innerText = "KES. " + total;

    } else if (purchase === 'DiaperVest' ) {
        console.log("kenya1")
    } else if (purchase === 'Socks')  {
        console.log("kenya2")
    }   else if (purchase === 'Shawl')  {
        console.log("kenya3")
    }   else if (purchase === 'Blanket')    {
        console.log("kenya4")
    }   else if (purchase === 'BabyCrib')   {
        console.log("kenya5")
    }   else if (purchase === 'Sweaters')   {
        console.log("kenya6")
    }   else if (purchase === 'Flannels')   {
        console.log("kenya7")
    }   else if (purchase === 'BabyBathBasin')   {
        console.log("kenya8")
    }   else if (purchase === 'ReceivingSet')   {
        console.log("kenya9")
    }   else if (purchase === 'Vests')   {
        console.log("kenya10")
    }   else if (purchase === 'babyWalker')   {
        console.log("kenya11")
    }
}

window.addEventListener("load", function()  {
    const form = document.getElementById("items");
    form.addEventListener("submit", handleForm);
    
});
