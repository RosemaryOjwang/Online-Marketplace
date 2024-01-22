//Business Logic


//UI Logic
function handleForm(event)  {
    event.preventDefault();
    const purchase =document.getElementById("purchase").value;
    const quantity = document.getElementById("quantity").value;
    let discountedPrice;
    let total;

    if (purchase === 'Rompers')   {
        console.log("kenya")

    } else if (purchase === 'DiaperVest' ) {
        console.log("kenya")
    } else if (purchase === 'Socks')  {
        console.log("kenya")
    }   else if (purchase === 'Shawl')  {
        console.log("kenya")
    }   else if (purchase === 'Blanket')    {
        console.log("kenya")
    }   else if (purchase === 'BabyCrib')   {
        console.log("kenya")
    }   else if (purchase === 'Sweaters')   {
        console.log("kenya")
    }   else if (purchase === 'Flannels')   {
        console.log("kenya")
    }   else if (purchase === 'BabyBathBasin')   {
        console.log("kenya")
    }   else if (purchase === 'ReceivingSet')   {
        console.log("kenya")
    }   else if (purchase === 'Vests')   {
        console.log("kenya")
    }   else if (purchase === 'babyWalker')   {
        console.log("kenya")
    }
}

window.addEventListener("load", function()  {
    const form = document.getElementById("items");
    form.addEventListener("submit", handleForm);
});
