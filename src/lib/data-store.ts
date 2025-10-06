/**
 * Data Store for School Fee Payment App
 * 
 * This file implements a singleton data store pattern for managing application state.
 * In a production app, this would be replaced with a proper state management solution
 * like Redux, Zustand, or direct API calls to a backend service.
 * 
 * Current implementation uses mock data for demonstration purposes.
 * 
 * Features:
 * - Student authentication and lookup
 * - Payment processing simulation
 * - Balance management
 * - Data persistence during app session
 */

import { Student, Payment, Balance, PaymentRequest, PaymentHistory } from './data-types';
import { 
  mockStudents, 
  mockPayments, 
  mockBalances, 
  getStudentById, 
  getStudentByName, 
  getBalancesForStudent,
  getPaymentsForStudent,
  getTotalOutstandingForStudent,
  getPaymentHistoryForStudent,
  getStudentsByGuardian
} from './mock-data';

/**
 * DataStore class implementing Singleton pattern
 * Manages all application data and provides methods for data operations
 */
export class DataStore {
  private static instance: DataStore;
  
  // === DATA STORAGE ===
  // In-memory data arrays (in production, these would be API endpoints)
  private students: Student[] = [...mockStudents];
  private payments: Payment[] = [...mockPayments];
  private balances: Balance[] = [...mockBalances];

  /**
   * Private constructor to enforce singleton pattern
   */
  private constructor() {}

  /**
   * Get singleton instance of DataStore
   * @returns DataStore instance
   */
  static getInstance(): DataStore {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  // === STUDENT MANAGEMENT METHODS ===
  
  /**
   * Get all students (for admin purposes)
   * @returns Array of all students
   */
  getStudents(): Student[] {
    return [...this.students];
  }

  /**
   * Get student by ID
   * @param id - Student ID to search for
   * @returns Student object or undefined if not found
   */
  getStudentById(id: string): Student | undefined {
    return getStudentById(id);
  }

  /**
   * Get student by name (partial match)
   * @param name - Student name to search for
   * @returns Student object or undefined if not found
   */
  getStudentByName(name: string): Student | undefined {
    return getStudentByName(name);
  }

  /**
   * Get all students associated with a guardian (by phone, email, or student ID)
   * @param guardianIdentifier - Guardian's phone, email, or student ID
   * @returns Array of students associated with the guardian
   */
  getStudentsByGuardian(guardianIdentifier: string): Student[] {
    return getStudentsByGuardian(guardianIdentifier);
  }

  /**
   * Authenticate user with flexible input (phone, email, student ID, or name)
   * This method simulates a login system that accepts multiple input formats
   * 
   * @param input - User input for authentication
   * @returns Student object if authenticated, undefined if not found
   */
  authenticateUser(input: string): Student | undefined {
    const cleanInput = input.trim();
    
    // Try to find by student ID first (exact match, case insensitive)
    let student = this.students.find(s => 
      s.id.toLowerCase() === cleanInput.toLowerCase()
    );
    
    // If not found, try by phone number (partial match to handle different formats)
    if (!student) {
      student = this.students.find(s => 
        s.guardianPhone && s.guardianPhone.includes(cleanInput.replace(/\D/g, ''))
      );
    }
    
    // If not found, try by email (case insensitive)
    if (!student) {
      student = this.students.find(s => 
        s.email && s.email.toLowerCase().includes(cleanInput.toLowerCase())
      );
    }
    
    // If not found, try by name (partial match, case insensitive)
    if (!student) {
      student = this.students.find(s => 
        s.name.toLowerCase().includes(cleanInput.toLowerCase())
      );
    }
    
    return student;
  }

  // Balance methods
  getBalancesForStudent(studentId: string): Balance[] {
    return getBalancesForStudent(studentId);
  }

  getTotalOutstandingForStudent(studentId: string): number {
    return getTotalOutstandingForStudent(studentId);
  }

  // Payment methods
  getPaymentsForStudent(studentId: string): Payment[] {
    return getPaymentsForStudent(studentId);
  }

  /**
   * Get payment history for a student
   * @param studentId - Student ID to get payment history for
   * @returns Array of payment history records sorted by most recent first
   */
  getPaymentHistoryForStudent(studentId: string): PaymentHistory[] {
    return getPaymentHistoryForStudent(studentId);
  }

  processPayment(request: PaymentRequest): Promise<{ success: boolean; transactionId?: string; error?: string }> {
    return new Promise((resolve) => {
      // Simulate processing delay
      setTimeout(() => {
        try {
          const student = this.getStudentById(request.studentId);
          if (!student) {
            resolve({ success: false, error: 'Student not found' });
            return;
          }

          // Create new payment records
          const transactionId = `TXN${Date.now()}`;
          const paymentDate = new Date();

          request.fees.forEach((feePayment, index) => {
            const payment: Payment = {
              id: `pay_${Date.now()}_${index}`,
              studentId: request.studentId,
              feeId: feePayment.feeId,
              amount: feePayment.amount,
              date: paymentDate,
              method: request.paymentMethod,
              status: 'completed',
              receiptNumber: `${String(Math.floor(Math.random() * 90000) + 10000).padStart(5, '0')}`,
              transactionId
            };

            this.payments.push(payment);

            // Update balance
            const balance = this.balances.find(b => 
              b.studentId === request.studentId && b.feeId === feePayment.feeId
            );
            if (balance) {
              balance.paidAmount += feePayment.amount;
              balance.outstandingAmount = Math.max(0, balance.totalAmount - balance.paidAmount);
              balance.lastPaymentDate = paymentDate;
            }
          });

          resolve({ success: true, transactionId });
        } catch (error) {
          resolve({ success: false, error: 'Payment processing failed' });
        }
      }, 2000); // 2 second delay to simulate real processing
    });
  }

  // Reset data to initial state (useful for testing)
  reset(): void {
    this.students = [...mockStudents];
    this.payments = [...mockPayments];
    this.balances = [...mockBalances];
  }
}

// Export singleton instance
export const dataStore = DataStore.getInstance();