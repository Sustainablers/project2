import { validateForm } from "$lib/formValidator2";
import { describe, expect, it } from "vitest";

describe("validateForm", () => {
    it("should return no errors if all fields are valid", () => {
        const formData = {
            name: "John Doe",
            email: "john.doe@gmail.com",
            message: "This is a valid message",
            subject: "Optional subject"
        };

        const { isValid, errors } = validateForm(formData);
        expect(isValid).toBe(true); // No errors
        expect(Object.keys(errors).length).toBe(0);
    });

    it("should return an error for an invalid email address", () => {
        const formData = {
            name: "John Doe",
            email: "invalid-email",
            message: "This is a valid message"
        };

        const { isValid, errors } = validateForm(formData);
        expect(isValid).toBe(false);
        expect(errors.email).toBe("Please enter a valid email address with @gmail.com or @yahoo.com");
    });

    it("should return errors if required fields are missing", () => {
        const formData = {
            name: "",
            email: "",
            message: ""
        };

        const { isValid, errors } = validateForm(formData);
        expect(isValid).toBe(false);
        expect(errors.name).toBe("Name is required.");
        expect(errors.email).toBe("Please enter a valid email address with @gmail.com or @yahoo.com");
        expect(errors.message).toBe("Message is required.");
    });

    it("should not require 'subject' and return no errors when only required fields are present", () => {
        const formData = {
            name: "Jane Doe",
            email: "jane.doe@gmail.com",
            message: "This is another valid message"
        };

        const { isValid, errors } = validateForm(formData);
        expect(isValid).toBe(true);
        expect(Object.keys(errors).length).toBe(0);
    });
});
