// src/formValidation.ts

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
    barangay: string;
    region: string;
}

export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    postalCode?: string;
}

const validatePhoneNumber = (phoneNumber: string): string | null => {
    const regex = /^(09\d{9}|\+63\d{10})$/;
    return regex.test(phoneNumber) ? null : "Please enter a valid Philippine contact number starting with +63 or 09";
};

const validateEmail = (email: string): string | null => {
    const regex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;
    return regex.test(email) ? null : "Please enter a valid email address with @gmail.com or @yahoo.com";
};

export function validateForm(formData: FormData): FormErrors {
    let errors: FormErrors = {};

    // First Name validation
    if (!formData.firstName) {
        errors.firstName = "First name is required.";
    }

    // Last Name validation
    if (!formData.lastName) {
        errors.lastName = "Last name is required.";
    }

    // Email validation
    const emailError = validateEmail(formData.email);
    if (emailError) {
        errors.email = emailError;
    }

    // Phone Number validation
    const phoneError = validatePhoneNumber(formData.phone);
    if (phoneError) {
        errors.phone = phoneError;
    }

    // Postal Code validation
    if (!formData.postalCode || !/^\d{4,5}$/.test(formData.postalCode)) {
        errors.postalCode = "Invalid postal code.";
    }

    return errors;
}
