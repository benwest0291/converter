// save the number entered to a var
let inputNumber = 1050;
// select the input number and display var
document.getElementById("input__number").textContent = inputNumber;

// select all 3 outputs
let resultLength = document.getElementById("result__length");
let resultGallon = document.getElementById("result__gallons");
let resultKilo = document.getElementById("result__kilos");

// calculation to feet

function toFeet() {
  feetResult = inputNumber / 12;
  Math.round(feetResult);
  resultLength.textContent = feetResult;
}

toFeet();

console.log(feetResult);

// calculation to gallons

function toGallon() {
  gallonResult = inputNumber * 4.5;
  Math.round(gallonResult);
  resultGallon.textContent = gallonResult;
}

toGallon();

console.log(gallonResult);

// calculation Kilograms

function toKilos() {
  kilosResult = inputNumber / 1000;
  Math.round(kilosResult);
  resultKilo.textContent = kilosResult;
}

toKilos();

console.log(kilosResult);
