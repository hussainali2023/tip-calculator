const billAmountInput = document.getElementById("billAmount")
const tipPercentageInput = document.getElementById("tipPercentage")
const numPeopleInput = document.getElementById("numPeople")
const calculateButton = document.getElementById("calculateButton")
const totalTipDisplay = document.getElementById("totalTip")
const tipPerPersonDisplay = document.getElementById("tipPerPerson")

calculateButton.addEventListener("click", calculateTip)

function calculateTip(){
    const billAmount = parseFloat(billAmountInput.value)
    const tipPercentage = parseFloat(tipPercentageInput.value)
    const numPeople = parseInt(numPeopleInput.value)
    
    // validation 
    // if(billAmount !== isNaN || tipPercentage !== isNaN ||numPeople !== isNaN  ){
    //     console.log("hello")
    // }

    if(Number.isNaN(billAmount) || Number.isNaN(tipPercentage) || Number.isNaN(numPeople)){
alert("Please enter the valid values for all fields")
billAmountInput.value = "";
tipPercentageInput.value = "";
numPeopleInput.value = ""
return;
    }

    const totalTip = ((billAmount * tipPercentage)/100).toFixed(2);
    const tipPerPerson = (totalTip / numPeople).toFixed(2)


    totalTipDisplay.textContent = `Total Tip: $${totalTip}`
    tipPerPersonDisplay.textContent = `Tip for each member is: $${tipPerPerson}`

    billAmountInput.value = "";
tipPercentageInput.value = "";
numPeopleInput.value = ""
}