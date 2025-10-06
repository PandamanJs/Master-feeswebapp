import { useState } from "react";
import { LoadingButton } from "./PageTransition";

// SVG path data - inlined for portability
const svgPaths = {
  closeIcon: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
  receiptIcon: "M3 19.8C2.16667 19.8 1.45833 19.5083 0.875 18.925C0.291667 18.3417 0 17.6333 0 16.8V14.8C0 14.5167 0.0960001 14.2793 0.288 14.088C0.479333 13.896 0.716667 13.8 1 13.8H3V0.525C3 0.375 3.06667 0.283333 3.2 0.25C3.33333 0.216667 3.46667 0.266667 3.6 0.4L4.5 1.3L5.65 0.15C5.75 0.0499999 5.86667 0 6 0C6.13333 0 6.25 0.0499999 6.35 0.15L7.5 1.3L8.65 0.15C8.75 0.0499999 8.86667 0 9 0C9.13333 0 9.25 0.0499999 9.35 0.15L10.5 1.3L11.65 0.15C11.75 0.0499999 11.8667 0 12 0C12.1333 0 12.25 0.0499999 12.35 0.15L13.5 1.3L14.65 0.15C14.75 0.0499999 14.8667 0 15 0C15.1333 0 15.25 0.0499999 15.35 0.15L16.5 1.3L17.4 0.4C17.5333 0.266667 17.6667 0.212333 17.8 0.237C17.9333 0.262333 18 0.358333 18 0.525V16.8C18 17.6333 17.7083 18.3417 17.125 18.925C16.5417 19.5083 15.8333 19.8 15 19.8H3ZM15 17.8C15.2833 17.8 15.5207 17.704 15.712 17.512C15.904 17.3207 16 17.0833 16 16.8V2.8H5V13.8H13C13.2833 13.8 13.5207 13.896 13.712 14.088C13.904 14.2793 14 14.5167 14 14.8V16.8C14 17.0833 14.096 17.3207 14.288 17.512C14.4793 17.704 14.7167 17.8 15 17.8ZM6.975 6.8C6.69167 6.8 6.45833 6.704 6.275 6.512C6.09167 6.32067 6 6.08333 6 5.8C6 5.51667 6.096 5.279 6.288 5.087C6.47933 4.89567 6.71667 4.8 7 4.8H11C11.2833 4.8 11.521 4.89567 11.713 5.087C11.9043 5.279 12 5.51667 12 5.8C12 6.08333 11.9043 6.32067 11.713 6.512C11.521 6.704 11.2833 6.8 11 6.8H6.975ZM6.975 9.8C6.69167 9.8 6.45833 9.704 6.275 9.512C6.09167 9.32067 6 9.08333 6 8.8C6 8.51667 6.096 8.279 6.288 8.087C6.47933 7.89567 6.71667 7.8 7 7.8H11C11.2833 7.8 11.521 7.89567 11.713 8.087C11.9043 8.279 12 8.51667 12 8.8C12 9.08333 11.9043 9.32067 11.713 9.512C11.521 9.704 11.2833 9.8 11 9.8H6.975ZM14 6.8C13.7167 6.8 13.4793 6.704 13.288 6.512C13.096 6.32067 13 6.08333 13 5.8C13 5.51667 13.096 5.279 13.288 5.087C13.4793 4.89567 13.7167 4.8 14 4.8C14.2833 4.8 14.5207 4.89567 14.712 5.087C14.904 5.279 15 5.51667 15 5.8C15 6.08333 14.904 6.32067 14.712 6.512C14.5207 6.704 14.2833 6.8 14 6.8ZM14 9.8C13.7167 9.8 13.4793 9.704 13.288 9.512C13.096 9.32067 13 9.08333 13 8.8C13 8.51667 13.096 8.279 13.288 8.087C13.4793 7.89567 13.7167 7.8 14 7.8C14.2833 7.8 14.5207 7.89567 14.712 8.087C14.904 8.279 15 8.51667 15 8.8C15 9.08333 14.904 9.32067 14.712 9.512C14.5207 9.704 14.2833 9.8 14 9.8Z",
  lockIcon: "M7.69206 7.5H6.00016C5.06674 7.5 4.59968 7.5 4.24316 7.68166C3.92956 7.84144 3.67478 8.09623 3.51499 8.40983C3.33333 8.76635 3.33333 9.23341 3.33333 10.1668V14.8335C3.33333 15.7669 3.33333 16.2334 3.51499 16.5899C3.67478 16.9035 3.92956 17.1587 4.24316 17.3185C4.59934 17.5 5.06585 17.5 5.99745 17.5H14.0026C14.9342 17.5 15.4 17.5 15.7562 17.3185C16.0698 17.1587 16.3254 16.9035 16.4852 16.5899C16.6667 16.2337 16.6667 15.7679 16.6667 14.8363V10.1641C16.6667 9.23249 16.6667 8.766 16.4852 8.40983C16.3254 8.09623 16.0698 7.84144 15.7562 7.68166C15.3996 7.5 14.9336 7.5 14.0002 7.5H12.3074M7.69206 7.5H12.3074M7.69206 7.5C7.58585 7.5 7.5 7.4139 7.5 7.30769V5C7.5 3.61929 8.61929 2.5 10 2.5C11.3807 2.5 12.5 3.61929 12.5 5V7.30769C12.5 7.4139 12.4137 7.5 12.3074 7.5"
};

// Payment method logos as SVG components
const VisaLogo = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="20" rx="2" fill="#1434CB"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">VISA</text>
  </svg>
);

const MastercardLogo = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="6" fill="#EB001B"/>
    <circle cx="20" cy="10" r="6" fill="#F79E1B"/>
    <path d="M16 6C17.5 7.5 17.5 12.5 16 14C14.5 12.5 14.5 7.5 16 6Z" fill="#FF5F00"/>
  </svg>
);

const PayPalLogo = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="20" rx="2" fill="#003087"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">PayPal</text>
  </svg>
);

const MTNLogo = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="20" rx="2" fill="#FFCB05"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold" fontFamily="Arial">MTN</text>
  </svg>
);

const AirtelLogo = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="20" rx="2" fill="#ED1C24"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">airtel</text>
  </svg>
);

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
      <div className="absolute content-stretch flex gap-[10px] items-center left-[36px] top-[101px] w-[327px]">
        <CloseButton onClick={onBack} />
      </div>
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] left-[44px] not-italic text-[18px] text-black top-[171px] tracking-[-0.18px] w-[311px]">
        <p className="leading-[24px]">Checkout</p>
      </div>
    </>
  );
}

function ReceiptIcon() {
  return (
    <div className="h-[19.8px] relative shrink-0 w-[18px]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <path d={svgPaths.receiptIcon} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function ReceiptInstructions() {
  return (
    <div className="bg-[#e0f7d4] box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start p-[10px] relative rounded-[10px] shrink-0 w-[297px]">
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#003630] text-[8px] tracking-[-0.08px] w-full">
        <p className="leading-[15px]">The receipts for all your transactions will be sent to your whatsapp as well as your email upon payment.</p>
      </div>
    </div>
  );
}

function ReceiptsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px]" style={{ width: "min-content" }}>
        <p className="leading-[24px]">Receipts</p>
      </div>
      <ReceiptInstructions />
    </div>
  );
}

/**
 * WhatsApp number input component with country code selector
 * Only allows numeric input for phone numbers
 * @param value - Current phone number value
 * @param onChange - Handler for phone number changes
 */
function WhatsAppInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [countryCode, setCountryCode] = useState("+260");
  
  /**
   * Handle phone number input with validation
   * Only allows digits and basic formatting characters
   */
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Only allow digits and basic formatting characters (spaces, hyphens)
    const phoneRegex = /^[0-9\s\-]*$/;
    if (!phoneRegex.test(newValue)) {
      return; // Don't update if invalid characters
    }
    
    // Limit length to reasonable phone number size
    if (newValue.length > 15) {
      return;
    }
    
    onChange(newValue);
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal min-w-full not-italic relative shrink-0 text-[12px] text-black tracking-[-0.12px]" style={{ width: "min-content" }}>
        <p className="leading-[24px]">Enter the WhatsApp number to receive your receipt</p>
      </div>
      <div className="flex gap-[8px] items-center w-full">
        {/* Country Code Selector */}
        <div className="relative">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="h-[60px] px-[16px] py-[18px] rounded-[10px] border-2 border-[#d4d6da] font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] text-[15px] text-[rgba(45,54,72,0.8)] bg-white cursor-pointer focus:outline-none focus:border-[#003630]"
          >
            <option value="+260">+260</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+27">+27</option>
            <option value="+254">+254</option>
            <option value="+255">+255</option>
            <option value="+256">+256</option>
          </select>
        </div>
        
        {/* Phone Number Input */}
        <div className="flex-1 relative">
          <input
            type="tel"
            inputMode="numeric"
            value={value}
            onChange={handlePhoneChange}
            placeholder="97 123 4567"
            className="w-full h-[60px] px-[16px] py-[18px] rounded-[10px] border-2 border-[#d4d6da] font-['Inter:Medium',_sans-serif] font-medium text-[18px] text-black placeholder:text-[#bdbdbd] bg-white focus:outline-none focus:border-[#003630]"
            maxLength={15}
            autoComplete="tel"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Email input component with basic email validation
 * Optional field for receipt delivery
 * @param value - Current email value
 * @param onChange - Handler for email changes
 */
function EmailInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  /**
   * Handle email input with basic validation
   * Allows standard email characters
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Allow standard email characters: letters, numbers, @, ., -, _
    const emailRegex = /^[a-zA-Z0-9@.\-_]*$/;
    if (!emailRegex.test(newValue)) {
      return; // Don't update if invalid characters
    }
    
    // Reasonable email length limit
    if (newValue.length > 254) {
      return;
    }
    
    onChange(newValue);
  };

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-[12px] text-black tracking-[-0.12px] w-full">
        <p className="leading-[24px]">Enter your email (optional)</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
        <div className="[grid-area:1_/_1] h-[56px] ml-0 mt-0 relative rounded-[10px] w-[296px]">
          <div aria-hidden="true" className="absolute border border-[#d4d6da] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <input
          type="email"
          value={value}
          onChange={handleEmailChange}
          placeholder="your@email.com"
          className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[12px] mt-[17px] not-italic relative text-[14px] text-[#bdbdbd] w-[272px] bg-transparent border-none outline-none"
          maxLength={254}
          autoComplete="email"
        />
      </div>
    </div>
  );
}

function PaymentDetailsCard({ 
  whatsappNumber, 
  email, 
  onWhatsAppChange, 
  onEmailChange 
}: { 
  whatsappNumber: string; 
  email: string; 
  onWhatsAppChange: (value: string) => void; 
  onEmailChange: (value: string) => void; 
}) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[419px] items-start left-[23px] pb-[30px] pt-[20px] px-[25px] rounded-[18px] top-[213px] w-[346px]">
      <ReceiptIcon />
      <ReceiptsSection />
      <WhatsAppInput value={whatsappNumber} onChange={onWhatsAppChange} />
      <EmailInput value={email} onChange={onEmailChange} />
    </div>
  );
}

function SecuredPayments() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[47px] top-[563px] w-[296px]">
      <div className="relative shrink-0 size-[20px]" data-name="Interface / Lock">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Interface / Lock">
            <path d={svgPaths.lockIcon} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[-0.12px]">
        <p className="leading-[24px] whitespace-pre">Secured payments</p>
      </div>
    </div>
  );
}

function PayButton({ onClick, disabled, isLoading }: { onClick: () => void; disabled: boolean; isLoading: boolean }) {
  return (
    <div className="absolute left-[47px] top-[664px] w-[296px]">
      <LoadingButton
        onClick={onClick}
        disabled={disabled}
        loading={isLoading}
        className={`box-border content-stretch flex gap-[8px] h-[59px] items-center justify-center overflow-clip px-[24px] py-[10px] rounded-[12px] w-full transition-all shadow-lg hover:shadow-xl ${
          disabled || isLoading
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-[#003630] hover:bg-[#004840]'
        }`}
      >
        <div className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.2px]">
          <p className="leading-[24px] whitespace-pre">Pay</p>
        </div>
      </LoadingButton>
    </div>
  );
}

function PaymentLogos() {
  return (
    <div className="absolute top-[734px] left-0 right-0 flex items-center justify-center opacity-[0.6]">
      <div className="flex gap-[8px] items-center">
        <div className="shrink-0">
          <VisaLogo />
        </div>
        <div className="shrink-0">
          <MastercardLogo />
        </div>
        <div className="shrink-0">
          <PayPalLogo />
        </div>
        <div className="shrink-0">
          <MTNLogo />
        </div>
        <div className="shrink-0">
          <AirtelLogo />
        </div>
      </div>
    </div>
  );
}

interface PaymentDetailsPageProps {
  onBack: () => void;
  onPay: (whatsappNumber: string, email: string) => void;
  isLoading?: boolean;
}

/**
 * Main component for payment details page
 * Collects WhatsApp number and optional email for receipt delivery
 * @param onBack - Handler for back navigation
 * @param onPay - Handler for payment submission
 * @param isLoading - Loading state for payment processing
 */
export default function PaymentDetailsPage({ onBack, onPay, isLoading = false }: PaymentDetailsPageProps) {
  // State for form inputs
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  
  // Form validation - WhatsApp number is required, email is optional
  const isFormValid = whatsappNumber.trim().length >= 7; // Minimum valid phone number length

  /**
   * Handle payment submission with validation
   * Ensures required fields are filled before proceeding
   */
  const handlePay = () => {
    if (!isFormValid) {
      alert("Please enter a valid WhatsApp number");
      return;
    }
    
    if (isLoading) return;
    
    // Basic email validation if provided
    if (email.trim() && !email.includes('@')) {
      alert("Please enter a valid email address or leave it empty");
      return;
    }
    
    onPay(whatsappNumber.trim(), email.trim());
  };

  return (
    <div className="bg-[#f5f4f7] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 76">
      <HeaderSection onBack={onBack} />
      <PaymentDetailsCard 
        whatsappNumber={whatsappNumber}
        email={email}
        onWhatsAppChange={setWhatsappNumber}
        onEmailChange={setEmail}
      />
      <SecuredPayments />
      <PayButton onClick={handlePay} disabled={!isFormValid} isLoading={isLoading} />
      <PaymentLogos />
    </div>
  );
}