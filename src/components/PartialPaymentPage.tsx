import { useState } from "react";
import { LoadingButton } from "./PageTransition";

// SVG path data - inlined for portability
const svgPaths = {
  closeIcon: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
  shoppingBagIcon: "M9 8.33333C9 10.0592 10.3431 11.4583 12 11.4583C13.6569 11.4583 15 10.0592 15 8.33333M3 17.5002V7.5002C3 6.33343 3 5.7496 3.21799 5.30396C3.40973 4.91195 3.71547 4.59347 4.0918 4.39374C4.51962 4.16667 5.08009 4.16667 6.2002 4.16667H17.8002C18.9203 4.16667 19.4796 4.16667 19.9074 4.39374C20.2837 4.59347 20.5905 4.91195 20.7822 5.30396C21 5.74917 21 6.33229 21 7.49678V17.5037C21 18.6682 21 19.2505 20.7822 19.6957C20.5905 20.0877 20.2837 20.4068 19.9074 20.6065C19.48 20.8333 18.921 20.8333 17.8031 20.8333H6.19691C5.07899 20.8333 4.5192 20.8333 4.0918 20.6065C3.71547 20.4068 3.40973 20.0877 3.21799 19.6957C3 19.2501 3 18.667 3 17.5002Z",
  arrowRightIcon: "M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z",
  curvedPath1: "M13 52.0425L52.0424 13L90.7455 51.703",
  curvedPath2: "M52.5418 1C55.8569 0.999998 59.0365 2.31706 61.3806 4.66113L100.084 43.3643L100.309 43.5947C104.965 48.4918 104.889 56.2366 100.084 61.042C95.2784 65.8471 87.5345 65.9218 82.6375 61.2666L82.406 61.042L52.5418 31.1777L22.3387 61.3809L22.1072 61.6064C17.2101 66.2614 9.46616 66.1861 4.66092 61.3809C-0.2203 56.4994 -0.220314 48.5856 4.66092 43.7041L43.7029 4.66113L43.9256 4.44434C46.2463 2.23598 49.3303 1.00011 52.5418 1Z"
};

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.closeIcon} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function HeaderSection({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="absolute content-stretch flex gap-[10px] items-center left-[44px] top-[101px] w-[327px]">
        <CloseButton onClick={onBack} />
      </div>
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] left-[44px] not-italic text-[18px] text-black top-[171px] tracking-[-0.18px] w-[311px]">
        <p className="leading-[24px]">Checkout</p>
      </div>
    </>
  );
}

function StudentInfo({ name, id }: { name: string; id: string }) {
  return (
    <div className="content-stretch flex gap-[71px] items-center relative shrink-0 w-[198px]">
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#a7aaa7] text-[8px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">{name} - {id}</p>
      </div>
    </div>
  );
}

function FeeDetails({ title, term, amount }: { title: string; term: string; amount: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black">
      <div className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] justify-center relative shrink-0 text-[14px] tracking-[-0.14px] w-full">
        <p className="leading-[14px]">{title}</p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] justify-end relative shrink-0 text-[8px] tracking-[-0.08px] w-full">
        <p className="leading-[8px]">{term}</p>
      </div>
    </div>
  );
}

function AmountDisplay({ amount }: { amount: string }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-right tracking-[-0.14px] w-full">
        <p className="leading-[15px]">{amount}</p>
      </div>
    </div>
  );
}

function FeeRow({ title, term, amount }: { title: string; term: string; amount: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex items-start justify-center pl-0 pr-[10px] py-0 relative w-full">
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[149px]">
            <div className="basis-0 content-stretch flex gap-[25px] grow items-start min-h-px min-w-px relative shrink-0">
              <FeeDetails title={title} term={term} amount={amount} />
            </div>
          </div>
          <div className="basis-0 content-stretch flex gap-[20px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
            <AmountDisplay amount={amount} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Numeric input component for payment amounts
 * Only allows numbers and decimal points with validation
 * @param amount - Current amount value as string
 * @param onChange - Handler for amount changes
 */
function AmountInput({ amount, onChange }: { amount: string; onChange: (value: string) => void }) {
  /**
   * Handle numeric input with validation
   * Only allows numbers, decimal point, and basic formatting
   */
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty input
    if (value === '') {
      onChange('');
      return;
    }
    
    // Only allow numbers and decimal point
    const numericRegex = /^\d*\.?\d{0,2}$/;
    if (!numericRegex.test(value)) {
      return; // Don't update if invalid
    }
    
    // Prevent values over 10000 (reasonable maximum)
    const numValue = parseFloat(value);
    if (numValue > 10000) {
      return;
    }
    
    onChange(value);
  };

  return (
    <div className="box-border content-stretch flex gap-[4px] h-[56px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 w-[297px]">
      <div aria-hidden="true" className="absolute border border-[#d4d6da] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(45,54,72,0.52)] w-[48.835px]">
        <p className="leading-[1.4]">ZMW</p>
      </div>
      <input
        type="text"
        inputMode="decimal"
        value={amount}
        onChange={handleAmountChange}
        className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[#8d919c] text-[16px] text-right tracking-[-0.16px] w-[229px] bg-transparent border-none outline-none"
        placeholder="0.00"
        maxLength={8}
      />
    </div>
  );
}

function PaymentItem({ 
  studentName, 
  studentId, 
  feeTitle, 
  term, 
  totalAmount, 
  paymentAmount, 
  onAmountChange 
}: { 
  studentName: string; 
  studentId: string; 
  feeTitle: string; 
  term: string; 
  totalAmount: string; 
  paymentAmount: string; 
  onAmountChange: (value: string) => void; 
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <StudentInfo name={studentName} id={studentId} />
        <FeeRow title={feeTitle} term={term} amount={totalAmount} />
      </div>
      <AmountInput amount={paymentAmount} onChange={onAmountChange} />
    </div>
  );
}

function ShoppingBagIcon() {
  return (
    <div className="h-[25px] relative shrink-0 w-[24px]" data-name="Interface / Shopping_Bag_01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
        <g id="Interface / Shopping_Bag_01">
          <path d={svgPaths.shoppingBagIcon} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TotalSection({ total }: { total: number }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[56px] ml-0 mt-0 rounded-[10px] w-[278.625px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] justify-end ml-[215px] mt-[42px] not-italic relative text-[24px] text-black translate-y-[-100%] w-[82px]">
        <p className="leading-[1.4]">{total.toFixed(1)}</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] justify-center ml-0 mt-[26.5px] not-italic relative text-[12px] text-black translate-y-[-50%] w-[59px]">
        <p className="leading-[1.4]">Total</p>
      </div>
    </div>
  );
}

function CreditPaymentSection({ total }: { total: number }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] h-[144px] items-start left-[33px] overflow-clip pb-[20px] pt-[15px] px-[15px] rounded-[18px] top-[212px] w-[327px]">
      <ShoppingBagIcon />
      <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px]" style={{ width: "min-content" }}>
        <p className="leading-[24px]">Credit Payment</p>
      </div>
      <TotalSection total={total} />
      
      {/* Decorative curved elements */}
      <div className="absolute flex h-[78.334px] items-center justify-center left-[190px] top-[-16px] w-[40.24px]">
        <div className="flex-none rotate-[270.895deg]">
          <div className="h-[39.042px] relative w-[77.746px]">
            <div className="absolute inset-[-32.02%_-16.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 65">
                <path d={svgPaths.curvedPath1} stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[109.227px] items-center justify-center left-[227.19px] top-[-34.81px] w-[75.076px]">
        <div className="flex-none rotate-[263.605deg]">
          <div className="h-[64.042px] relative w-[102.745px]">
            <div className="absolute inset-[-0.78%_-0.49%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 66">
                <path d={svgPaths.curvedPath2} stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[85.954px] items-center justify-center left-[290px] top-[-35px] w-[60.969px]">
        <div className="flex-none rotate-[252.16deg]">
          <div className="h-[39.042px] relative w-[77.746px]">
            <div className="absolute inset-[-32.02%_-16.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 65">
                <path d={svgPaths.curvedPath1} stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentCard({ studentServices, paymentAmounts, onAmountChange }: {
  studentServices: Array<{ studentName: string; studentId: string; feeTitle: string; term: string; amount: number }>;
  paymentAmounts: Record<number, string>;
  onAmountChange: (index: number, value: string) => void;
}) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] items-center left-[33px] overflow-clip pb-[50px] pt-[24px] px-[15px] rounded-[18px] top-[369px] w-[327px]" style={{ height: 'auto', maxHeight: '379px' }}>
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.12px] w-full">
        <p className="leading-[12px]">Enter the amount you want to pay.</p>
      </div>
      
      {studentServices.map((service, index) => (
        <PaymentItem
          key={index}
          studentName={service.studentName}
          studentId={service.studentId}
          feeTitle={service.feeTitle}
          term={service.term}
          totalAmount={`K${service.amount.toLocaleString()}`}
          paymentAmount={paymentAmounts[index] || ''}
          onAmountChange={(value) => onAmountChange(index, value)}
        />
      ))}
    </div>
  );
}

function ProceedButton({ onClick, total, isLoading }: { onClick: () => void; total: number; isLoading: boolean }) {
  return (
    <div className="absolute left-1/2 top-[771px] translate-x-[-50%] w-[327px]">
      <LoadingButton
        onClick={onClick}
        disabled={total <= 0}
        loading={isLoading}
        className={`box-border content-stretch flex gap-[8px] h-[59px] items-center justify-center overflow-clip px-[24px] py-[10px] rounded-[12px] w-full transition-all shadow-lg hover:shadow-xl ${
          total > 0 && !isLoading
            ? 'bg-[#003630] hover:bg-[#004840]' 
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        <div className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px]">
          <p className="leading-[24px] whitespace-pre">Proceed</p>
        </div>
        {!isLoading && (
          <div className="h-[24px] relative shrink-0 w-[16px]">
            <div className="absolute left-0 size-[24px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Icon Right">
                  <path d={svgPaths.arrowRightIcon} fill="var(--fill-0, white)" id="Shape" />
                </g>
              </svg>
            </div>
          </div>
        )}
      </LoadingButton>
    </div>
  );
}

interface PartialPaymentPageProps {
  studentServices: Array<{ studentName: string; studentId: string; feeTitle: string; term: string; amount: number }>;
  onBack: () => void;
  onProceed: (amounts: Array<{ studentName: string; amount: number }>) => void;
  isLoading?: boolean;
}

/**
 * Main component for partial payment page
 * Allows users to enter custom payment amounts for different fee types
 * @param onBack - Handler for back navigation
 * @param onProceed - Handler for proceeding with payment amounts
 * @param isLoading - Loading state for button
 */
/**
 * Main component for partial payment page
 * Allows users to enter custom payment amounts for different fee types
 * @param studentServices - Array of student services with details
 * @param onBack - Handler for back navigation
 * @param onProceed - Handler for proceeding with payment amounts
 * @param isLoading - Loading state for button
 */
export default function PartialPaymentPage({ studentServices, onBack, onProceed, isLoading = false }: PartialPaymentPageProps) {
  // State for payment amounts - one for each service
  const [paymentAmounts, setPaymentAmounts] = useState<Record<number, string>>(() => {
    // Initialize with half of each service amount as default
    const initial: Record<number, string> = {};
    studentServices.forEach((service, index) => {
      initial[index] = (service.amount / 2).toFixed(2);
    });
    return initial;
  });

  // Handle amount change for a specific service
  const handleAmountChange = (index: number, value: string) => {
    setPaymentAmounts(prev => ({
      ...prev,
      [index]: value
    }));
  };

  // Calculate total amount
  const total = Object.values(paymentAmounts).reduce((sum, amount) => {
    return sum + parseFloat(amount || "0");
  }, 0);

  /**
   * Handle proceed button click with validation
   * Ensures amounts are valid before proceeding
   */
  const handleProceed = () => {
    if (total <= 0) {
      alert("Please enter a valid payment amount");
      return;
    }
    
    if (isLoading) return;
    
    // Build payment data with student names and amounts
    const paymentData = studentServices.map((service, index) => ({
      studentName: service.studentName,
      amount: parseFloat(paymentAmounts[index] || "0")
    }));
    
    onProceed(paymentData);
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 81">
      <HeaderSection onBack={onBack} />
      <CreditPaymentSection total={total} />
      <PaymentCard 
        studentServices={studentServices}
        paymentAmounts={paymentAmounts}
        onAmountChange={handleAmountChange}
      />
      <ProceedButton onClick={handleProceed} total={total} isLoading={isLoading} />
    </div>
  );
}