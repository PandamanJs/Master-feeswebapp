// Mock data for the school fee payment app
import { Student, Fee, Payment, Balance, Receipt, PaymentHistory } from './data-types';

export const mockStudents: Student[] = [
  // Stephen Kapambwe's children
  {
    id: 'C20012',
    name: 'Talitha Kapambwe',
    grade: 'Grade 3B',
    guardianPhone: '+260977123456',
    guardianName: 'Stephen Kapambwe',
    email: 'stephen.k@example.com'
  },
  {
    id: 'C30013',
    name: 'Isaiah Kapambwe',
    grade: 'Grade 2B',
    guardianPhone: '+260977123456',
    guardianName: 'Stephen Kapambwe',
    email: 'stephen.k@example.com'
  },
  {
    id: 'Isaac001',
    name: 'Isaac Kapambwe',
    grade: 'Grade 1A',
    guardianPhone: '+260977123456',
    guardianName: 'Stephen Kapambwe',
    email: 'stephen.k@example.com'
  },
  
  // Mary Mwansa's child
  {
    id: 'C40014',
    name: 'Grace Mwansa',
    grade: 'Grade 4A',
    guardianPhone: '+260966987654',
    guardianName: 'Mary Mwansa',
    email: 'mary.m@example.com'
  },
  
  // John Phiri's child
  {
    id: 'C50015',
    name: 'Daniel Phiri',
    grade: 'Grade 5B',
    guardianPhone: '+260955876543',
    guardianName: 'John Phiri',
    email: 'john.p@example.com'
  }
];

export const mockFees: Fee[] = [
  {
    id: 'fee_001',
    type: 'school_fees',
    name: 'School Fees - Term 1 2025',
    amount: 1500,
    term: 'Term 1',
    year: 2025,
    dueDate: new Date('2025-03-31')
  },
  {
    id: 'fee_002',
    type: 'transport',
    name: 'Transport - Term 1 2025',
    amount: 750,
    term: 'Term 1',
    year: 2025,
    dueDate: new Date('2025-03-31')
  },
  {
    id: 'fee_003',
    type: 'other',
    name: 'Textbooks',
    amount: 200,
    term: 'Term 1',
    year: 2025,
    dueDate: new Date('2025-02-28')
  }
];

export const mockPayments: Payment[] = [
  {
    id: 'pay_001',
    studentId: 'C20012',
    feeId: 'fee_001',
    amount: 900,
    date: new Date('2025-01-10'),
    method: 'mobile_money',
    status: 'completed',
    receiptNumber: '00202',
    transactionId: 'TXN001'
  },
  {
    id: 'pay_002',
    studentId: 'C20012',
    feeId: 'fee_002',
    amount: 750,
    date: new Date('2025-01-10'),
    method: 'mobile_money',
    status: 'completed',
    receiptNumber: '00201',
    transactionId: 'TXN002'
  },
  {
    id: 'pay_003',
    studentId: 'C30013',
    feeId: 'fee_001',
    amount: 750,
    date: new Date('2025-01-08'),
    method: 'mobile_money',
    status: 'completed',
    receiptNumber: '00155',
    transactionId: 'TXN003'
  },
  {
    id: 'pay_004',
    studentId: 'C20012',
    feeId: 'fee_001',
    amount: 150,
    date: new Date('2025-01-19'),
    method: 'mobile_money',
    status: 'completed',
    receiptNumber: '00352',
    transactionId: 'TXN004'
  }
];

export const mockBalances: Balance[] = [
  {
    studentId: 'C20012',
    feeId: 'fee_001',
    totalAmount: 1500,
    paidAmount: 1500,
    outstandingAmount: 0,
    lastPaymentDate: new Date('2025-10-19')
  },
  {
    studentId: 'C20012',
    feeId: 'fee_002',
    totalAmount: 750,
    paidAmount: 750,
    outstandingAmount: 0,
    lastPaymentDate: new Date('2025-08-10')
  },
  {
    studentId: 'C30013',
    feeId: 'fee_001',
    totalAmount: 1500,
    paidAmount: 750,
    outstandingAmount: 750,
    lastPaymentDate: new Date('2025-08-08')
  },
  {
    studentId: 'Isaac001',
    feeId: 'fee_001',
    totalAmount: 1500,
    paidAmount: 0,
    outstandingAmount: 1500
  },
  {
    studentId: 'C40014',
    feeId: 'fee_001',
    totalAmount: 1500,
    paidAmount: 1200,
    outstandingAmount: 300,
    lastPaymentDate: new Date('2025-09-15')
  },
  {
    studentId: 'C50015',
    feeId: 'fee_001',
    totalAmount: 1500,
    paidAmount: 1500,
    outstandingAmount: 0,
    lastPaymentDate: new Date('2025-10-01')
  }
];

export const mockReceipts: Receipt[] = [
  {
    id: 'receipt_001',
    paymentId: 'pay_001',
    studentName: 'Talitha Kapambwe',
    items: [
      {
        description: 'School Fees - Grade 3B Term 1 2025 (Part payment)',
        amount: 900
      }
    ],
    totalAmount: 900,
    date: new Date('2025-01-10'),
    receiptNumber: '00202'
  },
  {
    id: 'receipt_002',
    paymentId: 'pay_002',
    studentName: 'Talitha Kapambwe',
    items: [
      {
        description: 'Bus Fare - ZNS Bus Station Term 1 2025 (Full Payment)',
        amount: 750
      }
    ],
    totalAmount: 750,
    date: new Date('2025-01-10'),
    receiptNumber: '00201'
  },
  {
    id: 'receipt_003',
    paymentId: 'pay_004',
    studentName: 'Talitha Kapambwe',
    items: [
      {
        description: 'School Fees - Grade 3B Term 1 2025 (Balance payment)',
        amount: 150
      }
    ],
    totalAmount: 150,
    date: new Date('2025-01-19'),
    receiptNumber: '00352'
  }
];

// Helper functions to get data
export function getStudentById(id: string): Student | undefined {
  return mockStudents.find(student => student.id === id);
}

export function getStudentByName(name: string): Student | undefined {
  return mockStudents.find(student => student.name.toLowerCase().includes(name.toLowerCase()));
}

export function getBalancesForStudent(studentId: string): Balance[] {
  return mockBalances.filter(balance => balance.studentId === studentId);
}

export function getPaymentsForStudent(studentId: string): Payment[] {
  return mockPayments.filter(payment => payment.studentId === studentId);
}

export function getTotalOutstandingForStudent(studentId: string): number {
  const balances = getBalancesForStudent(studentId);
  return balances.reduce((total, balance) => total + balance.outstandingAmount, 0);
}

// Payment history data
export const mockPaymentHistory: PaymentHistory[] = [
  // Talitha Kapambwe (C20012) - Has recent payments
  {
    id: 'ph_001',
    studentId: 'C20012',
    date: new Date('2025-10-19'),
    title: 'Paid School Fees - Grade 3B',
    subtitle: 'Term 3 2025 (Balance payment) - Receipt No. 00352',
    amount: 450,
    receiptNumber: '00352',
    type: 'school_fees'
  },
  {
    id: 'ph_002',
    studentId: 'C20012',
    date: new Date('2025-10-10'),
    title: 'Paid School Fees - Grade 3B',
    subtitle: 'Term 3 2025 (Part payment) - Receipt No. 00340',
    amount: 600,
    receiptNumber: '00340',
    type: 'school_fees'
  },
  {
    id: 'ph_003',
    studentId: 'C20012',
    date: new Date('2025-08-10'),
    title: 'Paid Bus Fare - ZNS Bus Station',
    subtitle: 'Term 2 2025 (Full Payment) - Receipt No. 00201',
    amount: 750,
    receiptNumber: '00201',
    type: 'transport'
  },
  {
    id: 'ph_004',
    studentId: 'C20012',
    date: new Date('2025-08-08'),
    title: 'Paid School Fees - Grade 3B',
    subtitle: 'Term 2 2025 (Full payment) - Receipt No. 00155',
    amount: 1500,
    receiptNumber: '00155',
    type: 'school_fees'
  },
  
  // Isaiah Kapambwe (C30013) - Has some debt
  {
    id: 'ph_005',
    studentId: 'C30013',
    date: new Date('2025-08-10'),
    title: 'Paid School Fees - Grade 2B',
    subtitle: 'Term 2 2025 (Part payment) - Receipt No. 00202',
    amount: 750,
    receiptNumber: '00202',
    type: 'school_fees'
  },
  {
    id: 'ph_006',
    studentId: 'C30013',
    date: new Date('2025-08-08'),
    title: 'Paid Bus Fare - ZNS Bus Station',
    subtitle: 'Term 2 2025 (Full Payment) - Receipt No. 00200',
    amount: 750,
    receiptNumber: '00200',
    type: 'transport'
  },
  
  // Isaac Kapambwe (Isaac001) - No payment history (empty state)
  
  // Grace Mwansa (C40014) - Has recent payments
  {
    id: 'ph_007',
    studentId: 'C40014',
    date: new Date('2025-10-05'),
    title: 'Paid School Fees - Grade 4A',
    subtitle: 'Term 3 2025 (Part payment) - Receipt No. 00380',
    amount: 600,
    receiptNumber: '00380',
    type: 'school_fees'
  },
  {
    id: 'ph_008',
    studentId: 'C40014',
    date: new Date('2025-09-15'),
    title: 'Paid School Fees - Grade 4A',
    subtitle: 'Term 3 2025 (Part payment) - Receipt No. 00360',
    amount: 600,
    receiptNumber: '00360',
    type: 'school_fees'
  },
  {
    id: 'ph_009',
    studentId: 'C40014',
    date: new Date('2025-08-20'),
    title: 'Paid Bus Fare - ZNS Bus Station',
    subtitle: 'Term 2 2025 (Full Payment) - Receipt No. 00250',
    amount: 750,
    receiptNumber: '00250',
    type: 'transport'
  },
  
  // Daniel Phiri (C50015) - Has recent payments, all paid up
  {
    id: 'ph_010',
    studentId: 'C50015',
    date: new Date('2025-10-01'),
    title: 'Paid School Fees - Grade 5B',
    subtitle: 'Term 3 2025 (Full payment) - Receipt No. 00370',
    amount: 1500,
    receiptNumber: '00370',
    type: 'school_fees'
  },
  {
    id: 'ph_011',
    studentId: 'C50015',
    date: new Date('2025-09-28'),
    title: 'Paid Bus Fare - ZNS Bus Station',
    subtitle: 'Term 3 2025 (Full Payment) - Receipt No. 00368',
    amount: 750,
    receiptNumber: '00368',
    type: 'transport'
  },
  {
    id: 'ph_012',
    studentId: 'C50015',
    date: new Date('2025-08-15'),
    title: 'Paid Textbooks Fee',
    subtitle: 'Term 2 2025 (Full Payment) - Receipt No. 00240',
    amount: 300,
    receiptNumber: '00240',
    type: 'other'
  },
];

export function getPaymentHistoryForStudent(studentId: string): PaymentHistory[] {
  return mockPaymentHistory
    .filter(history => history.studentId === studentId)
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by most recent first
}

export function getStudentsByGuardian(guardianIdentifier: string): Student[] {
  const cleanInput = guardianIdentifier.trim().toLowerCase();
  const cleanedPhone = cleanInput.replace(/\D/g, '');
  
  console.log("getStudentsByGuardian called with:", guardianIdentifier);
  
  // First, try to find the authenticated student
  let authenticatedStudent = mockStudents.find(s => 
    s.id.toLowerCase() === cleanInput ||
    s.name.toLowerCase().includes(cleanInput) ||
    (s.guardianPhone && s.guardianPhone.replace(/\D/g, '').includes(cleanedPhone)) ||
    (s.email && s.email.toLowerCase().includes(cleanInput))
  );
  
  console.log("Authenticated student found:", authenticatedStudent);
  
  // If we found a student, get all students with the same guardian phone
  if (authenticatedStudent && authenticatedStudent.guardianPhone) {
    const guardianPhone = authenticatedStudent.guardianPhone;
    
    console.log("Looking for students with guardian phone:", guardianPhone);
    
    // Return all students that share the same guardian phone (primary grouping method)
    const studentsWithSameGuardian = mockStudents.filter(student => 
      student.guardianPhone === guardianPhone
    );
    
    console.log("Found students:", studentsWithSameGuardian.length);
    return studentsWithSameGuardian;
  }
  
  // Fallback: try direct match by phone
  if (cleanedPhone) {
    const studentsByPhone = mockStudents.filter(student => 
      student.guardianPhone && student.guardianPhone.replace(/\D/g, '').includes(cleanedPhone)
    );
    
    if (studentsByPhone.length > 0) {
      console.log("Found students by phone fallback:", studentsByPhone.length);
      return studentsByPhone;
    }
  }
  
  console.log("No students found, returning empty array");
  return [];
}