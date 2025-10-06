/**
 * Input validation utilities for the school fee payment app
 * 
 * This file contains reusable validation functions for different input types
 * to ensure data integrity and user experience consistency across the app.
 */

// === PHONE NUMBER VALIDATION ===

/**
 * Validates phone number input for Zambian phone numbers
 * @param phone - Phone number string to validate
 * @returns Object with isValid boolean and cleaned phone number
 */
export function validatePhoneNumber(phone: string): { isValid: boolean; cleaned: string; error?: string } {
  const cleaned = phone.replace(/[\s\-\(\)]/g, ''); // Remove formatting
  
  // Check if empty
  if (!cleaned) {
    return { isValid: false, cleaned: '', error: 'Phone number is required' };
  }
  
  // Check if contains only digits
  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, cleaned, error: 'Phone number must contain only digits' };
  }
  
  // Zambian phone numbers: 9 or 10 digits (without country code)
  if (cleaned.length < 9 || cleaned.length > 10) {
    return { isValid: false, cleaned, error: 'Phone number must be 9-10 digits' };
  }
  
  // Check if starts with valid Zambian mobile prefix
  const validPrefixes = ['96', '97', '95', '76', '77', '75'];
  const isValidPrefix = validPrefixes.some(prefix => cleaned.startsWith(prefix));
  
  if (!isValidPrefix) {
    return { isValid: false, cleaned, error: 'Invalid phone number format' };
  }
  
  return { isValid: true, cleaned };
}

/**
 * Formats phone number input as user types
 * @param input - Raw input string
 * @returns Formatted phone number or original if invalid
 */
export function formatPhoneNumber(input: string): string {
  const digitsOnly = input.replace(/\D/g, '');
  
  if (digitsOnly.length <= 2) return digitsOnly;
  if (digitsOnly.length <= 5) return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2)}`;
  if (digitsOnly.length <= 8) return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5)}`;
  return `${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 9)}`;
}

// === EMAIL VALIDATION ===

/**
 * Validates email address format
 * @param email - Email string to validate
 * @returns Object with isValid boolean and error message if invalid
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  // Empty email is valid (optional field)
  if (!email.trim()) {
    return { isValid: true };
  }
  
  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  // Check reasonable length
  if (email.length > 254) {
    return { isValid: false, error: 'Email address is too long' };
  }
  
  return { isValid: true };
}

// === AMOUNT VALIDATION ===

/**
 * Validates monetary amount input
 * @param amount - Amount string to validate
 * @param maxAmount - Maximum allowed amount (optional)
 * @returns Object with isValid boolean, parsed number, and error message
 */
export function validateAmount(amount: string, maxAmount?: number): { 
  isValid: boolean; 
  value: number; 
  error?: string 
} {
  // Empty amount
  if (!amount.trim()) {
    return { isValid: false, value: 0, error: 'Amount is required' };
  }
  
  // Check if valid number format
  const numericRegex = /^\d*\.?\d{0,2}$/;
  if (!numericRegex.test(amount)) {
    return { isValid: false, value: 0, error: 'Please enter a valid amount' };
  }
  
  const value = parseFloat(amount);
  
  // Check if valid number
  if (isNaN(value)) {
    return { isValid: false, value: 0, error: 'Please enter a valid amount' };
  }
  
  // Check minimum amount
  if (value <= 0) {
    return { isValid: false, value, error: 'Amount must be greater than 0' };
  }
  
  // Check maximum amount if provided
  if (maxAmount && value > maxAmount) {
    return { isValid: false, value, error: `Amount cannot exceed K${maxAmount}` };
  }
  
  return { isValid: true, value };
}

/**
 * Formats amount input to ensure proper decimal places
 * @param input - Raw amount input
 * @returns Formatted amount string
 */
export function formatAmount(input: string): string {
  // Remove any non-numeric characters except decimal point
  const cleaned = input.replace(/[^\d.]/g, '');
  
  // Handle multiple decimal points
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limit decimal places to 2
  if (parts.length === 2 && parts[1].length > 2) {
    return parts[0] + '.' + parts[1].slice(0, 2);
  }
  
  return cleaned;
}

// === STUDENT ID VALIDATION ===

/**
 * Validates student ID format
 * @param studentId - Student ID to validate
 * @returns Object with isValid boolean and error message
 */
export function validateStudentId(studentId: string): { isValid: boolean; error?: string } {
  const cleaned = studentId.trim().toUpperCase();
  
  if (!cleaned) {
    return { isValid: false, error: 'Student ID is required' };
  }
  
  // Expected format: Letter(s) followed by numbers (e.g., C20012)
  const studentIdRegex = /^[A-Z]{1,3}\d{4,6}$/;
  
  if (!studentIdRegex.test(cleaned)) {
    return { isValid: false, error: 'Invalid student ID format (e.g., C20012)' };
  }
  
  return { isValid: true };
}

// === GENERAL INPUT SANITIZATION ===

/**
 * Sanitizes text input to prevent potential issues
 * @param input - Text input to sanitize
 * @param maxLength - Maximum allowed length
 * @returns Sanitized text
 */
export function sanitizeTextInput(input: string, maxLength = 100): string {
  return input
    .slice(0, maxLength)
    .replace(/[<>]/g, '') // Remove potential HTML characters
    .trim();
}

/**
 * Validates general login input (phone, email, or student ID)
 * @param input - Login input to validate
 * @returns Object with isValid boolean, input type, and error message
 */
export function validateLoginInput(input: string): { 
  isValid: boolean; 
  type: 'phone' | 'email' | 'studentId' | 'unknown'; 
  error?: string 
} {
  const cleaned = input.trim();
  
  if (!cleaned) {
    return { isValid: false, type: 'unknown', error: 'Please enter your phone number, email, or student ID' };
  }
  
  if (cleaned.length < 3) {
    return { isValid: false, type: 'unknown', error: 'Input is too short' };
  }
  
  // Check if it looks like an email
  if (cleaned.includes('@')) {
    const emailValidation = validateEmail(cleaned);
    return { 
      isValid: emailValidation.isValid, 
      type: 'email', 
      error: emailValidation.error 
    };
  }
  
  // Check if it looks like a student ID
  if (/^[A-Za-z]/.test(cleaned)) {
    const studentIdValidation = validateStudentId(cleaned);
    return { 
      isValid: studentIdValidation.isValid, 
      type: 'studentId', 
      error: studentIdValidation.error 
    };
  }
  
  // Assume it's a phone number
  const phoneValidation = validatePhoneNumber(cleaned);
  return { 
    isValid: phoneValidation.isValid, 
    type: 'phone', 
    error: phoneValidation.error 
  };
}