// src/formValidation.ts

export interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export interface ContactFormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const validateEmail = (email: string): string | null => {
    const regex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;
    return regex.test(email) ? null : "Please enter a valid email address with @gmail.com or @yahoo.com";
};

export function validateForm(formData: ContactFormData): { isValid: boolean; errors: ContactFormErrors } {
    const errors: ContactFormErrors = {};

    // Name validation
    if (!formData.name) {
        errors.name = "Name is required.";
    }

    // Email validation
    const emailError = validateEmail(formData.email);
    if (emailError) {
        errors.email = emailError;
    }

    // Message validation
    if (!formData.message) {
        errors.message = "Message is required.";
    }

    // Check if form is valid (no errors)
    const isValid = Object.keys(errors).length === 0;

    return { isValid, errors };
}
