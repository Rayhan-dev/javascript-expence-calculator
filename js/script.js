// function for getting elements 
function gettingElement(idName){
    let element = document.getElementById(idName);
    return element;
}
// getting elements 
    let incomeAmmount = gettingElement('income_field'); 
    let foodCost = gettingElement('food_field'); 
    let rentCost = gettingElement('rent_field');
    let clothesCost = gettingElement('clothes_field');
    let totalExpenses = gettingElement('total_expenses'); //total expenses of food,rent,clothes
    let balanceAfterExpenses = gettingElement('balance'); 
 // function for calculation expences
function calculatingExpenses(){
   //total expenses of food,rent,clothes
    let totalCost = parseInt(foodCost.value)+parseInt(rentCost.value)+parseInt(clothesCost.value);
     // handling error with conditions 
    if(typeof(parseInt(incomeAmmount.value)) != 'number' || parseInt(incomeAmmount.value)<0 ){
        alert("please input a positive number in 'income field'");
    }else if(typeof(parseInt(foodCost.value)) != 'number' || parseInt(foodCost.value)<0 ){
        alert("please input a positive number in 'food field'");
    }else if(typeof(parseInt(rentCost.value)) != 'number'|| parseInt(rentCost.value)<0 ){
        alert("please input a positive number in 'rent field'");
    }else if(typeof(parseInt(clothesCost.value)) != 'number' || parseInt(clothesCost.value)<0 ){
        alert("please input a positive number in 'clothes field'");
        return ;
    }else if((parseInt(incomeAmmount.value))<totalCost){
        alert("You can't spend more than you have!");
    }else{
        totalExpenses.innerText= totalCost;
        balanceAfterExpenses.innerText=parseInt(incomeAmmount.value)-totalCost;
    }
}
let savingPercentage = gettingElement('saving_field');
let savingAmount = gettingElement('saving_ammount');
let remainingBalance = gettingElement('remaining_balance');

function savingCalculation(){
    let updatedSavings =(parseInt(savingPercentage.value)/100)*parseInt(incomeAmmount.value);
    let updatedRemainingBalance = parseInt(incomeAmmount.value)-(parseInt(totalExpenses.innerText)+updatedSavings);
    if(updatedSavings>balanceAfterExpenses.innerText){
        alert("you cant save more than you have!")
    }else if(savingPercentage.value<0){
        alert("'saving percentage' can't be negative")
    }else{
        savingAmount.innerText = updatedSavings;
        remainingBalance.innerText=updatedRemainingBalance;
    }
}

