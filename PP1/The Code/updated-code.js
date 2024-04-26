// Price on switch
function switcherClick() {
    if (myCheckbox.checked == true) {

        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;
    } else {
        refreshPrices();
        duration.textContent = `/month`;
    }
}

//update price 
function updatePrices() {
    let myCheckbox = document.querySelector(".myCheckbox");
    let pageViews = document.querySelector(".page-views")
    //let duration = document.querySelector(".month");
    let price = document.querySelector(".pricefix");
    //let switcher = document.querySelector(".switch");
    let range = document.querySelector(".DavidRange");

    if (range.value == 1) {
        if (myCheckbox.checked) {
            price.textContent = `${(8 * 12) * .75}`;
        } else {
            price.textContent = 8;
        }
        pageViews.textContent = "10k";
    }
    if (range.value == 2) {

        if (myCheckbox.checked) {
            price.textContent = 108;
        } else {
            price.textContent = 12;
        }
        pageViews.textContent = "50k";
    }

    if (range.value == 3) {
        if (myCheckbox.checked) {
            price.textContent = 144;
        }
        else {
            price.textContent = 26;
        }
        pageViews.textContent = "100k";
    }

    if (range.value == 4) {
        if (myCheckbox.checked) {
            price.textContent = 216;
        }
        else {
            price.textContent = 24;
        }
        pageViews.textContent = "500k";
    }
}

function helloWorld() {
    console.log("Hello World!");
}

updatePrices();