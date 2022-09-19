// https://www.omnicalculator.com/health/waist-height-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const waisttoheightratioRadio = document.getElementById('waisttoheightratioRadio');
const waistcircumferenceRadio = document.getElementById('waistcircumferenceRadio');
const heightRadio = document.getElementById('heightRadio');

let waisttoheightratio;
let waistcircumference = v1;
let height = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

waisttoheightratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist circumference';
  variable2.textContent = 'Height';
  waistcircumference = v1;
  height = v2;
  result.textContent = '';
});

waistcircumferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist to height ratio';
  variable2.textContent = 'Height';
  waisttoheightratio = v1;
  height = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist to height ratio';
  variable2.textContent = 'Waist circumference';
  waisttoheightratio = v1;
  waistcircumference = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(waisttoheightratioRadio.checked)
    result.textContent = `Waist to height ratio = ${computewaisttoheightratio().toFixed(2)}`;

  else if(waistcircumferenceRadio.checked)
    result.textContent = `Waist circumference = ${computewaistcircumference().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

function computewaisttoheightratio() {
  return Number(waistcircumference.value) / Number(height.value);
}

function computewaistcircumference() {
  return Number(waisttoheightratio.value) * Number(height.value);
}

function computeheight() {
  return Number(waistcircumference.value) / Number(waisttoheightratio.value);
}