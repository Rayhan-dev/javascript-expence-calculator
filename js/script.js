// function for getting values as numbers 
function getParsedValue(idName){
    var persedValue =parseInt(document.getElementById(idName).value);
    return persedValue
}
// getting elements 
function getElement(idName){
    var element =document.getElementById(idName);
    return element;
}
function calculatingExpenses(){
    // getting values and elements 
    var incomeAmmount = getParsedValue("income_field"); 
    var foodCost = getParsedValue("food_field"); 
    var rentCost = getParsedValue("rent_field");
    var clothesCost = getParsedValue("clothes_field");
    var totalExpenses = getElement("total_expenses");
    var balanceAfterExpenses = getElement("balance");
    // total cost 
    var totalCost = foodCost + rentCost + clothesCost;

    //  handling error with conditions 
    if(isNaN(incomeAmmount) || incomeAmmount < 0 ){
        alert("please input a positive number in 'income field'");
    }else if(isNaN(foodCost) || foodCost < 0 ){
        alert("please input a positive number in 'food field'");
    }else if(isNaN(rentCost) || rentCost < 0 ){
        alert("please input a positive number in 'rent field'");
    }else if(isNaN(clothesCost) || clothesCost < 0 ){
        alert("please input a positive number in 'clothes field'");
    }else if(incomeAmmount<totalCost){
        alert("You can't spend more than you have!");
    }else{
        totalExpenses.innerText= totalCost;
        balanceAfterExpenses.innerText=incomeAmmount-totalCost;
    }
}
function calculatingSavings(){
    var balanceAfterExpenses = getElement("balance");
    var totalExpenses = getElement("total_expenses");
    var incomeAmmount = getParsedValue("income_field");
    var savingsPercentage = getParsedValue("saving_field"); 
    var savingAmmout = getElement('saving_ammount');
    var remainingBalance = getElement('remaining_balance');
    var savings = (savingsPercentage/100)*incomeAmmount;
    var finalRemainingBalance= incomeAmmount-(savings+ parseInt(totalExpenses.innerText));
    if(savings>parseInt(balanceAfterExpenses.innerText)){
        alert("you cant save more than you have!");
    }else if(savingsPercentage<0 || isNaN(savingsPercentage) ){
        alert("'saving percentage can't be negative or string!");
    }else{
        savingAmmout.innerText=savings;
        remainingBalance.innerText=finalRemainingBalance;
    }
}

        



// function savingCalculation(){
//     var savingPercentage = getParsedValue('saving_field');
//     var savingAmount = getElement('saving_ammount');
//     var remainingBalance = getElement('remaining_balance');
//     var updatedSavings =(savingPercentage/100)*incomeAmmount;
//     var updatedRemainingBalance = incomeAmmount-(parseInt(totalExpenses.innerText)+updatedSavings);
//     if(updatedSavings>balanceAfterExpenses.innerText){
//         alert("you cant save more than you have!");
//     }else if(savingPercentage.value<0){
//         alert("'saving percentage' can't be negative");
//     }else{
//         savingAmount.innerText = updatedSavings;
//         remainingBalance.innerText=updatedRemainingBalance;
//     }
// }   
