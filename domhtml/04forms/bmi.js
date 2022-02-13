document.querySelector("#btnCalculate").addEventListener('click', function() {
    let weight = document.querySelector('#weight');
    let height = document.querySelector('#height');
    //pseudo-selector
    let unitOfMeasurement = document.querySelector(".measurement:checked")
    
    if (unitOfMeasurement.value=="metric") {
        bmi = parseFloat(weight.value) / parseFloat(height.value) ** 2;
        alert("kek")
    } else {
        bmi = (parseFloat(weight.value) * 703) / parseFloat(height.value) ** 2;
    }

    document.querySelector("#result").innerHTML = "Your BMI is " + bmi


})












