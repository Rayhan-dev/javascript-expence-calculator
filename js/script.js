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
        // displaying values on UI 
        totalExpenses.innerText= totalCost;
        balanceAfterExpenses.innerText=incomeAmmount-totalCost;
    }
}
// saving part calculations 
function calculatingSavings(){
    // diclaring variables to get values 
    var balanceAfterExpenses = getElement("balance");
    var totalExpenses = getElement("total_expenses");
    var incomeAmmount = getParsedValue("income_field");
    var savingsPercentage = getParsedValue("saving_field"); 
    var savingAmmout = getElement('saving_ammount');
    var remainingBalance = getElement('remaining_balance');
    // calculating savings 
    var savings = (savingsPercentage/100)*incomeAmmount;
    // last remaing money 
    var finalRemainingBalance= parseInt(balanceAfterExpenses.innerText) - savings;
    // validating errors in saving section 
    if(savings>parseInt(balanceAfterExpenses.innerText)){
        alert("you cant save more than you have!");
    }else if(savingsPercentage<0 || isNaN(savingsPercentage) ){
        alert("'saving percentage can't be negative or string!");
    }else{
        // displaying values on UI 
        savingAmmout.innerText=savings;
        remainingBalance.innerText=finalRemainingBalance;
    }
}