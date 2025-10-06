// Data types for the school fee payment app

export interface Student {
  id: string;
  name: string;
  grade: string;
  guardianPhone?: string;
  guardianName?: string;
  email?: string;
}

export interface Fee {
  id: string;
  type: 'school_fees' | 'transport' | 'other';
  name: string;
  amount: number;
  term: string;
  year: number;
  dueDate?: Date;
}

export interface Payment {
  id: string;
  studentId: string;
  feeId: string;
  amount: number;
  date: Date;
  method: 'mobile_money' | 'bank_transfer' | 'cash';
  status: 'pending' | 'completed' | 'failed';
  receiptNumber?: string;
  transactionId?: string;
}

export interface Balance {
  studentId: string;
  feeId: string;
  totalAmount: number;
  paidAmount: number;
  outstandingAmount: number;
  lastPaymentDate?: Date;
}

export interface PaymentRequest {
  studentId: string;
  fees: Array<{
    feeId: string;
    amount: number;
  }>;
  whatsappNumber: string;
  email?: string;
  paymentMethod: 'mobile_money' | 'bank_transfer';
}

export interface Receipt {
  id: string;
  paymentId: string;
  studentName: string;
  items: Array<{
    description: string;
    amount: number;
  }>;
  totalAmount: number;
  date: Date;
  receiptNumber: string;
}

export interface PaymentHistory {
  id: string;
  studentId: string;
  date: Date;
  title: string;
  subtitle: string;
  amount: number;
  receiptNumber: string;
  type: 'school_fees' | 'transport' | 'other';
}