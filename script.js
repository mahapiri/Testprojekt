// Bitte hier Code eingeben

let menus = ['Pizza Salami', 'Hamburger'];
let prices = [10.99, 7.99];
let amounts = [1, 2];

function getValueFromInput(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;
}

function getMenuFromInput() {
    let myValue = getValueFromInput('menu').trim();
    return myValue;
}

function getPriceFromInput() {
    let myPrice = getValueFromInput('price');
    return +myPrice;
}

function onAddMenu() {
    let addMenu = getMenuFromInput('menu');
    let addPrice = getPriceFromInput('price');
    for (let i = 0; i < amounts.length; i++) {
        if (getMenuIndex() == "-1") {
            menus.push(addMenu);
            prices.push(addPrice);
            amounts.push(1);
        } else {
            amounts++;
        }
    }
    
}

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}