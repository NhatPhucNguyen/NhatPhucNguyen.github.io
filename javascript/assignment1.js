const metricOption = document.getElementById("metric");
const imperialOption = document.getElementById("imperial");
const submitBtn = document.getElementById("submit-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.bmrForm');
const bmrNumber = document.getElementById("bmr-number");
const caloriesNeed = document.getElementById("calories-need");
const unitWeight = document.getElementById("unit-weight");
const imperialDisplay = document.querySelector(".imperial-display");
function bmrCalculate() {
    var bmr;
    var calNeed;
    var weight = document.getElementById('weight').value;
    var gender = document.getElementById('gender-option').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var level = document.getElementById("activity-level").value;
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;

    if (imperialOption.checked == true) {
        var height = (Number(feet) * 12) + Number(inches);
        (gender == "male") ? bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age) : bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        (gender == "female") ? bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age) : bmr = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    }
    else if (metricOption.checked == true) {
        (gender == "male") ? bmr = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age) : bmr = 665 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        (gender == "female") ? bmr = 665 + (9.563 * weight) + (1.850 * height) - (4.676 * age) : bmr = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age);
    }
    switch (level) {
        case "0":
            calNeed = bmr * 1.2;
            break;
        case "1":
            calNeed = bmr * 1.375;
            break;
        case "2":
            calNeed = bmr * 1.55;
            break;
        case "3":
            calNeed = bmr * 1.725;
            break;
        case "4":
            calNeed = bmr * 1.9;
            break;
        default:
            calNeed = 0;
            break;
    }
    bmrNumber.innerHTML = Math.round(bmr);
    caloriesNeed.innerHTML = Math.round(calNeed);
    if (gender != "" && weight != "" && weight >= 0 && height >= 0 && height != "" && age != "" && age > 0 && level != "") {
        modal.parentElement.classList.toggle('show');
    }
}
submitBtn.addEventListener('click', function () {
    bmrCalculate();    
});
closeBtn.addEventListener('click', function () {
    modal.parentElement.classList.toggle('show');
});
function unitCheck() {
    if (imperialOption.checked == true) {
        imperialDisplay.parentElement.classList.add('show');
        document.getElementById("feet").style.display = "block";
        document.getElementById("inches").style.display = "block";        
        unitWeight.innerHTML = "pounds";
    }
    else if (metricOption.checked == true) {
        imperialDisplay.parentElement.classList.remove('show');
        unitWeight.innerHTML = "kg";
        document.getElementById("feet").style.display = "none";
        document.getElementById("inches").style.display = "none";
    }
};



