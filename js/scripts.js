//Business Logic


//UI Logic
function handleForm(event)  {
    event.preventDefault();
    const purchase =document.getElementById("purchase").value;
    const quantity = document.getElementById("quantity").value;
    let discountedPrice;
    let total;

    if (purchase === Rompers)   {

    } else if (purchase === 'DiaperVest' ) {

    } else if (purchase === 'Socks')  {

    }   else if (purchase === 'Shawl')  {

    }   else if (purchase === 'Blanket')    {

    }   else if (purchase === 'BabyCrib')   {

    }   else if (purchase === 'Sweaters')   {

    }   else if (purchase === 'Flannels')   {

    }   else if (purchase === 'BabyBathBasin')   {

    }   else if (purchase === 'ReceivingSet')   {

    }   else if (purchase === 'Vests')   {

    }   else if (purchase === 'babyWalker')   {

    }
}

window.addEventListener("load", function()  {
    const form = document.getElementById("items");
    form.addEventListener("submit", handleForm);
});
