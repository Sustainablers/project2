// formValidation.test.js
import { describe, it, expect } from 'vitest';

// Import the validation functions
import { isValidEmail, isValidPhone, validateForm } from './shop';

describe('Form Validation Tests', () => {
    it('should validate email format', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('invalid-email')).toBe(false);
    });

    it('should validate phone number format', () => {
        expect(isValidPhone('1234567890')).toBe(true);
        expect(isValidPhone('123')).toBe(false);
    });

    it('should validate form fields correctly', () => {
        const validData = {
            name: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '1234567890',
            address: '123 Street',
            postalCode: '1000',
            city: 'City',
            barangay: 'Barangay',
            region: 'Region',
        };

        const invalidData = {
            ...validData,
            email: 'invalid-email', // Incorrect email format
        };

        expect(validateForm(validData)).toBe(true);
        expect(validateForm(invalidData)).toBe(false);
    });
});
