// getting element by ID 
function gettingElement(idName){
    let element = document.getElementById(idName);
    return element;
}

function calculatingExpenses(){
    // getting values 
    const incomeAmmount = gettingElement('income_field').value;
    const foodCost = gettingElement('food_field').value;
    const rentCost = gettingElement('rent_field').value;
    const clothesCost = gettingElement('clothes_field').value;
    // getting innerTexts 
    const totalExpenses = gettingElement('total_expenses');
    const balanceAfterExpenses = gettingElement('balance');
    // handling error with conditions 
    if(isNaN(parseInt(incomeAmmount)) || parseInt(incomeAmmount)<0 ){
        alert("please input a positive number in income field");
    }else if(isNaN(parseInt(foodCost)) || parseInt(foodCost)<0 ){
        alert("please input a positive number in food field");
    }else if(isNaN(parseInt(rentCost)) || parseInt(rentCost)<0 ){
        alert("please input a positive number in rent field");
    }else if(isNaN(parseInt(clothesCost)) || parseInt(clothesCost)<0 ){
        alert("please input a positive number in clothes field");
    }else{
        totalExpenses.innerText= parseInt(foodCost)+parseInt(rentCost)+parseInt(clothesCost);
        balanceAfterExpenses.innerText=parseInt(incomeAmmount)-parseInt(totalExpenses.innerText);
    }
}

