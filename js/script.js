const incomeAmmount = gettingElement('income_field');
const foodCost = gettingElement('food_field');
const rentCost = gettingElement('rent_field');
const clothesCost = gettingElement('clothes_field');
const totalExpenses = gettingElement('total_expenses');
const balanceAfterExpenses = gettingElement('balance');

function gettingElement(name){
    let element = document.getElementById(name);
    return element;
}

function calculateExpences(){
    totalExpenses.innerText= parseInt(foodCost.value)+parseInt(rentCost.value)+parseInt(clothesCost.value);
    balanceAfterExpenses.innerText=parseInt(incomeAmmount.value)-parseInt(totalExpenses.innerText);
}
