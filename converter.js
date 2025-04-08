export function validateInput(value) {
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

export function kmhToMph(kmh) {
    return (parseFloat(kmh) * 5 / 8).toFixed(2);
}

export function mphToKmh(mph) {
    return (parseFloat(mph) * 8 / 5).toFixed(2);
}

export function litresToGallons(litres) {
    return (parseFloat(litres) / 4.546).toFixed(2);
}

export function gallonsToLitres(gallons) {
    return (parseFloat(gallons) * 4.546).toFixed(2);
}