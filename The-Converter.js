
function validateinput(input) {
    if (isNaN(input.value) || input.value.trim() === "") {
        alert("Only numeric values are allowed, and this field cannot be blank")
        input.value = "";
    } return true
}
const kmhFrom = document.getElementById("kmh-from");
const kmhTo = document.getElementById("kmh-to");

kmhFrom.addEventListener("input", (e) => {
    if (validateinput(kmhFrom)) {
        kmhTo.value = Number.parseFloat(e.target.value *(5/8)).toFixed(2) + " MPH";}
});

const mphFrom = document.getElementById("mph-from");
const mphTo = document.getElementById("mph-to");

mphFrom.addEventListener("input", (e) => {
    if (validateinput(mphFrom)) {
        mphTo.value = Number.parseFloat(e.target.value /(5/8)).toFixed(2) + " KM/H";}
});

const litresFrom = document.getElementById("litres-from");
const litresTo = document.getElementById("litres-to");

litresFrom.addEventListener("input", (e) => {
    if (validateinput(litresFrom)) {
        litresTo.value = Number.parseFloat(e.target.value /4.546).toFixed(2) + " Imperial Gallons";}
});

const gallonsFrom = document.getElementById("gallons-from");
const gallonsTo = document.getElementById("gallons-to");

gallonsFrom.addEventListener("input", (e) => {
    if (validateinput(gallonsFrom)) {
        gallonsTo.value = Number.parseFloat(e.target.value *4.546).toFixed(2) + " Litres";}
});