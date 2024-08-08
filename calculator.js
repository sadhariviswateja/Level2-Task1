let billAmountElement = document.getElementById("billAmount");
let NoneAmount = document.getElementById("1");

let percentageTipElement = document.getElementById("percentageTip");
let NoneAmount2 = document.getElementById("2");

let tipAmountElement = document.getElementById("tipAmount");

let totalAmountElement = document.getElementById("totalAmount");

let errorMessageElement = document.getElementById("errorMessage");

function amountCalculation() {
    let billAmountElementValue = billAmountElement.value;
    let percentageTipElementValue = percentageTipElement.value;
    if (billAmountElement.value === "") {
        NoneAmount.textContent = "Please Enter a Valid Input";
        errorMessageElement.textContent = "Please Enter a Valid Input.";

    } else if (percentageTipElement.value === "") {
        NoneAmount2.textContent = "Please Enter a Valid Input";
        errorMessageElement.textContent = "Please Enter a Valid Input.";

    } else {
        let calculation = billAmountElementValue / percentageTipElementValue;
        tipAmountElement.value = calculation;
        let Totalcalculation = billAmountElementValue + percentageTipElementValue;
        totalAmountElement.value = Totalcalculation;

    }

}