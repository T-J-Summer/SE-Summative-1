const {
    kmhToMph,
    mphToKmh,
    litresToGallons,
    gallonsToLitres
} = require('./converter');
const {validateInput} = require("./converter");

describe('kmhToMph', () => {
    it('converts 80 km/h correctly (happy path)', () => {
        const result = kmhToMph('80');
        expect(result).toBe('50.00');
        expect(typeof result).toBe('string');
    });

    it('handles non-numeric input (unhappy path)', () => {
        const result = kmhToMph('fast');
        expect(result).toBe('NaN');
        expect(isNaN(Number(result))).toBe(true);
    });
});

describe('mphToKmh', () => {
    it('converts 80 mph correctly (happy path)', () => {
        const result = mphToKmh('80');
        expect(result).toBe('128.00');
        expect(typeof result).toBe('string');
    });

    it('handles non-numeric input (unhappy path)', () => {
        const result = mphToKmh('not as fast');
        expect(result).toBe('NaN');
        expect(isNaN(Number(result))).toBe(true);
    });
});

describe('gallonsToLitres', () => {
    it('converts 80 gallons correctly (happy path)', () => {
        const result = gallonsToLitres('80');
        expect(result).toBe('363.68');
        expect(typeof result).toBe('string');
    });

    it('handles non-numeric input (unhappy path)', () => {
        const result = gallonsToLitres('lots of coffee');
        expect(result).toBe('NaN');
        expect(isNaN(Number(result))).toBe(true);
    });
});

describe('LitresToGallons', () => {
    it('converts 80 litres correctly (happy path)', () => {
        const result = litresToGallons('80');
        expect(result).toBe('17.60');
        expect(typeof result).toBe('string');
    });

    it('handles non-numeric input (unhappy path)', () => {
        const result = litresToGallons('less coffee');
        expect(result).toBe('NaN');
        expect(isNaN(Number(result))).toBe(true);
    });
});

describe('validateInput', () => {
    it('provides an error message if text is entered (happy path)', () => {
        const result = validateInput('Test');
        expect(result).toStrictEqual({"isValid": false, "message": "Only numeric values are allowed, and this field cannot be blank"});
    });

    it('provides no error message if numbers entered (unhappy path)', () => {
        const result = validateInput('12');
        expect(result).toStrictEqual({
            "isValid": true,
            "message": ""
        });
    });
});