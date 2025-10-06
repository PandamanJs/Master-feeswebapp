/**
 * School Fee Payment App for Twalumbu Education Centre
 * 
 * Main application component that manages navigation between different pages
 * and maintains global state for user data and payment information.
 * 
 * Features:
 * - User authentication via phone/email/student ID
 * - Balance viewing and payment history
 * - Partial and full payment options
 * - Receipt generation and download
 * - Mobile-first responsive design
 */

import { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import ServicesPage from "./components/ServicesPage";
import ServicesSelectPage from "./components/ServicesSelectPage";
import BalancesPage from "./components/BalancesPage";
import PaymentHistoryPage from "./components/PaymentHistoryPage";
import PaySchoolFeesPage from "./components/PaySchoolFeesPage";
import CheckoutPage from "./components/CheckoutPage";
import PartialPaymentPage from "./components/PartialPaymentPage";
import PaymentDetailsPage from "./components/PaymentDetailsPage";
import CompletionPage from "./components/CompletionPage";
import ViewReceiptPage from "./components/ViewReceiptPage";
import DownloadReceiptPage from "./components/DownloadReceiptPage";
import PageTransition from "./components/PageTransition";
import { dataStore } from "./lib/data-store";

export default function App() {
  // === STATE MANAGEMENT ===
  
  // Log available test credentials for development
  console.log("Available test credentials for student lookup:");
  console.log("\nTest Student Account:");
  console.log("  Student ID: C20012");
  console.log("  Phone: +260977123456 or 0977123456");
  console.log("  Email: stephen.k@example.com");
  console.log("\nNote: Login performs database lookup, no OTP required");
  console.log("\nMary Mwansa's account:");
  console.log("  Student ID: C40014");
  console.log("  Phone: +260966987654 or 0966987654");
  console.log("  Email: mary.m@example.com");
  console.log("\nJohn Phiri's account:");
  console.log("  Student ID: C50015");
  console.log("  Phone: +260955876543 or 0955876543");
  console.log("  Email: john.p@example.com");
  
  /**
   * Current active page in the application
   * Possible values: "login", "services", "balances", "history", "payFees", 
   * "servicesSelect", "servicesAdd", "servicesView", "checkout", 
   * "partialPayment", "paymentDetails", "completion", "viewReceipt", "downloadReceipt"
   */
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPage");
    return saved || "login";
  });
  
  /**
   * Current logged-in user name (extracted from login input)
   */
  const [userName, setUserName] = useState(() => {
    const saved = localStorage.getItem("userName");
    return saved || "";
  });
  
  /**
   * Total amount for selected services (used in checkout flow)
   */
  const [servicesTotal, setServicesTotal] = useState(() => {
    const saved = localStorage.getItem("servicesTotal");
    return saved ? parseFloat(saved) : 0;
  });
  
  /**
   * Selected student IDs for payment (from PaySchoolFeesPage)
   */
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>(() => {
    const saved = localStorage.getItem("selectedStudentIds");
    return saved ? JSON.parse(saved) : [];
  });
  
  /**
   * Student services breakdown for checkout (student name and amount pairs)
   */
  const [studentServices, setStudentServices] = useState<Array<{ studentName: string; amount: number }>>(() => {
    const saved = localStorage.getItem("studentServices");
    return saved ? JSON.parse(saved) : [];
  });
  
  /**
   * Detailed student services for partial payment (includes student ID, fee title, term)
   */
  const [detailedStudentServices, setDetailedStudentServices] = useState<Array<{ 
    studentName: string; 
    studentId: string; 
    feeTitle: string; 
    term: string; 
    amount: number 
  }>>(() => {
    const saved = localStorage.getItem("detailedStudentServices");
    return saved ? JSON.parse(saved) : [];
  });
  
  /**
   * Global loading state for async operations
   */
  const [isLoading, setIsLoading] = useState(false);
  
  /**
   * Authentication error state for login page
   */
  const [authError, setAuthError] = useState("");

  // === MOCK DATA INITIALIZATION ===
  useEffect(() => {
    // Initialize mock data store
    console.log('📊 Mock data store initialized');
    console.log('Available students:', dataStore.getStudents().length);
  }, []);
  
  // === PERSISTENCE - Save state to localStorage ===
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("servicesTotal", servicesTotal.toString());
  }, [servicesTotal]);

  useEffect(() => {
    localStorage.setItem("selectedStudentIds", JSON.stringify(selectedStudentIds));
  }, [selectedStudentIds]);

  useEffect(() => {
    localStorage.setItem("studentServices", JSON.stringify(studentServices));
  }, [studentServices]);

  useEffect(() => {
    localStorage.setItem("detailedStudentServices", JSON.stringify(detailedStudentServices));
  }, [detailedStudentServices]);

  // === AUTHENTICATION HANDLERS ===
  
  /**
   * Handle user login/authentication with student database lookup
   * Validates user credentials against the student database
   * @param inputValue - User input (phone, email, or student ID)
   */
  const handleProceed = async (inputValue: string) => {
    setIsLoading(true);
    setAuthError(""); // Clear any previous errors
    
    try {
      // Simulate API authentication call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Authenticate user using the DataStore (mock data)
      const student = dataStore.authenticateUser(inputValue);
      
      if (student) {
        // Authentication successful
        console.log(`✅ Authentication successful for student: ${student.name} (${student.id})`);
        setUserName(inputValue);
        setCurrentPage("services");
      } else {
        // Authentication failed
        setAuthError("Student not found. Please check your phone number, email, or student ID and try again.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setAuthError("Login failed. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle logout - return to login page and clear user data
   */
  const handleBackToLogin = () => {
    setCurrentPage("login");
    setUserName("");
    setServicesTotal(0);
    setAuthError(""); // Clear any authentication errors
  };

  // === NAVIGATION HANDLERS ===
  
  /**
   * Navigate to balances page to view outstanding amounts
   */
  const handleViewBalances = () => {
    setCurrentPage("balances");
  };

  /**
   * Navigate to payment history page
   */
  const handleViewHistory = () => {
    setCurrentPage("history");
  };

  /**
   * Navigate to school fees payment page
   */
  const handlePaySchoolFees = () => {
    setCurrentPage("payFees");
  };

  // === SERVICES FLOW HANDLERS ===
  
  /**
   * Navigate to services selection page
   */
  const handleSelectServices = () => {
    setCurrentPage("servicesSelect");
  };

  /**
   * Close services flow and return to pay fees page
   */
  const handleServicesClose = () => {
    setCurrentPage("payFees");
  };

  /**
   * Navigate to add school fees page
   */
  const handleAddSchoolFees = () => {
    setCurrentPage("servicesAdd");
  };

  /**
   * Handle adding other services (placeholder for future functionality)
   */
  const handleAddOtherServices = () => {
    // TODO: Implement other services addition
    alert("Add Other Services functionality coming soon!");
  };

  /**
   * Complete services addition and update total
   * Simulates processing of selected services
   */
  const handleServicesDone = async () => {
    setIsLoading(true);
    
    try {
      // Simulate service processing delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update total (in real app, this would be calculated from selected services)
      setServicesTotal(1500);
      setCurrentPage("servicesView");
    } catch (error) {
      alert("Failed to process services. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Navigate to checkout from services flow
   */
  const handleServicesNext = () => {
    setCurrentPage("checkout");
  };



  // === PAYMENT FLOW HANDLERS ===
  
  /**
   * Navigate directly to checkout (from balances page)
   */
  const handleProceedToCheckout = () => {
    setCurrentPage("checkout");
  };

  /**
   * Navigate to payment details page for full payment
   */
  const handleProceedToPayment = () => {
    setCurrentPage("paymentDetails");
  };

  /**
   * Navigate to partial payment page for custom amounts
   */
  const handlePayInPart = () => {
    setCurrentPage("partialPayment");
  };

  /**
   * Process partial payment amounts and navigate to payment details
   * @param amounts - Array of student names and their partial payment amounts
   */
  const handlePartialPaymentProceed = async (amounts: Array<{ studentName: string; amount: number }>) => {
    setIsLoading(true);
    
    try {
      console.log('Processing partial payment:', amounts);
      
      // Calculate new total from partial amounts
      const partialTotal = amounts.reduce((sum, item) => sum + item.amount, 0);
      setServicesTotal(partialTotal);
      
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to payment details page
      setCurrentPage("paymentDetails");
    } catch (error) {
      console.error("Error processing partial payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Submit final payment with contact details
   * @param whatsappNumber - WhatsApp number for receipt delivery
   * @param email - Email address for receipt delivery (optional)
   */
  const handlePaymentSubmit = async (whatsappNumber: string, email: string) => {
    setIsLoading(true);
    
    try {
      console.log(`Payment submitted!\nWhatsApp: +260${whatsappNumber}\nEmail: ${email || 'Not provided'}`);
      
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, this would process payment via payment gateway
      setCurrentPage("completion");
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle payment completion and navigate to receipt view
   */
  const handlePaymentCompletion = () => {
    setCurrentPage("viewReceipt");
  };

  // === RECEIPT HANDLERS ===
  
  /**
   * Navigate to download receipts page
   */
  const handleViewReceipts = () => {
    setCurrentPage("downloadReceipt");
  };

  /**
   * Handle receipt download action
   */
  const handleDownloadReceipts = () => {
    // In real app, this would trigger actual download
    console.log("Downloading receipts...");
    // Could navigate elsewhere or show confirmation
  };

  /**
   * Navigate back to homepage (services page)
   */
  const handleGoToHomepage = () => {
    setCurrentPage("services");
  };

  // === BACK NAVIGATION HANDLERS ===
  
  /**
   * Navigate back to services page
   */
  const handleBackToServices = () => {
    setCurrentPage("services");
  };

  /**
   * Navigate back to balances page
   */
  const handleBackToBalances = () => {
    setCurrentPage("balances");
  };

  /**
   * Navigate back to checkout page
   */
  const handleBackToCheckout = () => {
    setCurrentPage("checkout");
  };

  /**
   * Navigate back to partial payment page
   */
  const handleBackToPartialPayment = () => {
    setCurrentPage("partialPayment");
  };

  // === RENDER ===
  
  return (
    <div className="min-h-screen bg-white w-full max-w-[393px] mx-auto lg:max-w-none lg:mx-0 relative overflow-hidden">
      {/* 
        PageTransition wrapper provides smooth animations between pages
        The pageKey prop triggers animations when the page changes
      */}
      <PageTransition pageKey={currentPage}>
        
        {/* === LOGIN PAGE === */}
        {currentPage === "login" && (
          <LoginPage 
            onProceed={handleProceed} 
            isLoading={isLoading} 
            authError={authError}
            onClearError={() => setAuthError("")}
          />
        )}
        
        {/* === MAIN SERVICES PAGE === */}
        {currentPage === "services" && (
          <ServicesPage 
            userName={userName} 
            onBack={handleBackToLogin}
            onViewBalances={handleViewBalances}
            onViewHistory={handleViewHistory}
            onPaySchoolFees={handlePaySchoolFees}
          />
        )}
        
        {/* === BALANCES AND HISTORY PAGES === */}
        {currentPage === "balances" && (
          <BalancesPage 
            userName={userName}
            onBack={handleBackToServices}
            onProceed={handleProceedToCheckout}
          />
        )}
        
        {currentPage === "history" && (
          <PaymentHistoryPage 
            userName={userName}
            onBack={handleBackToServices}
          />
        )}
        
        {/* === PAYMENT FLOW PAGES === */}
        {currentPage === "payFees" && (
          <PaySchoolFeesPage 
            userName={userName}
            onBack={handleBackToServices}
            onSelectServices={(studentIds) => {
              setSelectedStudentIds(studentIds);
              handleSelectServices();
            }}
          />
        )}
        
        {/* === SERVICES SELECTION FLOW === */}
        {currentPage === "servicesSelect" && (
          <ServicesSelectPage 
            userName={userName}
            selectedStudentIds={selectedStudentIds}
            onClose={handleServicesClose}
            onAddSchoolFees={handleAddSchoolFees}
            onAddOtherServices={handleAddOtherServices}
            onNext={handleProceedToCheckout}
            total={servicesTotal}
            setTotal={setServicesTotal}
            setStudentServices={setStudentServices}
            setDetailedStudentServices={setDetailedStudentServices}
          />
        )}
        
        {/* === CHECKOUT FLOW === */}
        {currentPage === "checkout" && (
          <CheckoutPage 
            total={servicesTotal}
            studentServices={studentServices}
            onBack={() => setCurrentPage("servicesSelect")}
            onPayInPart={handlePayInPart}
            onProceedToPayment={handleProceedToPayment}
          />
        )}
        
        {currentPage === "partialPayment" && (
          <PartialPaymentPage 
            studentServices={detailedStudentServices}
            onBack={handleBackToCheckout}
            onProceed={handlePartialPaymentProceed}
            isLoading={isLoading}
          />
        )}
        
        {currentPage === "paymentDetails" && (
          <PaymentDetailsPage 
            onBack={handleBackToPartialPayment}
            onPay={handlePaymentSubmit}
            isLoading={isLoading}
          />
        )}
        
        {/* === COMPLETION AND RECEIPT PAGES === */}
        {currentPage === "completion" && (
          <CompletionPage 
            onTimeout={handlePaymentCompletion}
          />
        )}
        
        {currentPage === "viewReceipt" && (
          <ViewReceiptPage 
            onViewReceipts={handleViewReceipts}
          />
        )}
        
        {currentPage === "downloadReceipt" && (
          <DownloadReceiptPage 
            total={servicesTotal}
            onDownload={handleDownloadReceipts}
            onGoHome={handleGoToHomepage}
          />
        )}
        
      </PageTransition>
    </div>
  );
}