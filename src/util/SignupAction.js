import {
    isNotEmpty,
    hasMinLength,
    isEmail,
    isEqualToOtherValue,
  } from "./validation.js"; 
 
 export function handleSignupAction(prevActionState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const terms = formData.get("terms");
    const acquisitionChannel = formData.getAll("acquisition");

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (!hasMinLength(password, 6)) {
      errors.push("Password must be at least 6 characters long.");
    }

    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords do not match.");
    }

    if (!isNotEmpty(lastName) || !isNotEmpty(firstName)) {
      errors.push("Please enter both your first name and last name.");
    }

    if (role === "empty") {
      errors.push("Please select a role.");
    }

    if (!terms) {
      errors.push("Please accept the terms and conditions.");
    }

    if (acquisitionChannel.length === 0) {
      errors.push("Please select at least 1 acquisition channel.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          role,
          terms,
          acquisitionChannel,
        },
      };
    }

    return { errors: null };
  }