import { validateForm } from "$lib/formValidator";
import { describe, expect, it } from 'vitest';

describe('validateForm', () => {
  it('should return no errors if all fields are valid', () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phone: '09123456789',
      address: '123 Main St',
      postalCode: '12345',
      city: 'City',
      barangay: 'Barangay',
      region: 'Region',
    };

    const errors = validateForm(formData);
    expect(Object.keys(errors).length).toBe(0);  // No errors
  });

  it('should return errors for invalid phone number and email', () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      phone: '123456789',
      address: '123 Main St',
      postalCode: '12345',
      city: 'City',
      barangay: 'Barangay',
      region: 'Region',
    };

    const errors = validateForm(formData);
    expect(errors.email).toBe('Please enter a valid email address with @gmail.com or @yahoo.com');
    expect(errors.phone).toBe('Please enter a valid Philippine contact number starting with +63 or 09');
  });

  it('should return an error if required fields are empty', () => {
    const formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      city: '',
      barangay: '',
      region: '',
    };

    const errors = validateForm(formData);
    expect(errors.firstName).toBe('First name is required.');
    expect(errors.lastName).toBe('Last name is required.');
    expect(errors.email).toBe('Please enter a valid email address with @gmail.com or @yahoo.com');
    expect(errors.phone).toBe('Please enter a valid Philippine contact number starting with +63 or 09');
    expect(errors.postalCode).toBe('Invalid postal code.');
  });
});
