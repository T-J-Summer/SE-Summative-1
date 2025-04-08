function validateInput(value) {
    if (isNaN(value) || value.trim() === "") {
        return {
            isValid: false,
            message: "Only numeric values are allowed, and this field cannot be blank"
        };
    }
    return {
        isValid: true,
        message: ""
    };
}

function kmhToMph(kmh) {
    return (parseFloat(kmh) * 5 / 8).toFixed(2);
}

function mphToKmh(mph) {
    return (parseFloat(mph) * 8 / 5).toFixed(2);
}

function litresToGallons(litres) {
    return (parseFloat(litres) / 4.546).toFixed(2);
}

function gallonsToLitres(gallons) {
    return (parseFloat(gallons) * 4.546).toFixed(2);
}

module.exports = {
    validateInput,
    kmhToMph,
    mphToKmh,
    litresToGallons,
    gallonsToLitres
}