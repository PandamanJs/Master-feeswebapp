import { useState } from "react";
import { motion } from "motion/react";
import { LoadingButton, ButtonPressAnimation } from "./PageTransition";

// SVG path data - inlined for portability
const svgPaths = {
  checkIcon: "M5.39817 9.54268L9.92043 5.02042L14.4034 9.50336",
  diamondShape: "M20 10L10 0L-6.16352e-07 10L10 20L20 10Z",
  decorativeLine1: "M18 75.9476L76.2219 18L133.938 75.4437",
  decorativeLine2: "M77.446 2C82.0143 2 86.3961 3.80652 89.6263 7.02155L147.341 64.4647C154.068 71.1597 154.068 82.0146 147.341 88.7096C140.615 95.4044 129.708 95.4045 122.982 88.7096L77.446 43.3874L31.4037 89.2137C24.6771 95.9082 13.7716 95.9082 7.04499 89.2137C0.318331 82.5188 0.318342 71.6638 7.04499 64.9689L65.2667 7.02155C68.4969 3.80656 72.8778 2.00005 77.446 2Z"
};

function LogoIcon() {
  return (
    <motion.div 
      className="relative shrink-0 size-[20px]"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 15">
          <path d={svgPaths.diamondShape} fill="var(--fill-0, #003630)" id="rect84" />
          <path d={svgPaths.checkIcon} id="path60" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </motion.div>
  );
}

function Header() {
  return (
    <motion.div 
      className="absolute box-border content-stretch flex gap-[8px] h-[66px] items-center justify-center left-1/2 px-[12px] py-0 top-0 translate-x-[-50%] w-[393px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoIcon />
      <div className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">master-fees</p>
      </div>
    </motion.div>
  );
}

function TitleSection() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col gap-[10px] h-[78px] items-center justify-center top-[201px] translate-x-[-50%]" 
      style={{ left: "calc(50% - 0.5px)" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[0px] text-black text-center w-[286px]">
        <p className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] mb-0 text-[12px]">Pay School fees for</p>
        <p className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] text-[24px]">Twalumbu Education Centre</p>
      </div>
    </motion.div>
  );
}

/**
 * Text input component for login page
 * Accepts phone numbers, student IDs, or email addresses
 * @param value - Current input value
 * @param onChange - Handler for input changes
 * @param placeholder - Placeholder text to show when empty
 */
function TextInput({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  // Handle input validation - allow alphanumeric, spaces, hyphens, dots, @ symbols
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow letters, numbers, spaces, hyphens, dots, @ symbols for flexible login input
    const isValid = /^[a-zA-Z0-9\s\-\.@+]*$/.test(newValue);
    
    if (isValid || newValue === '') {
      onChange(e);
    }
  };

  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#003049] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-start p-[12px] relative size-full">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full bg-transparent border-none outline-none font-['IBM_Plex_Sans:Regular',_sans-serif] text-[14px] text-black tracking-[-0.14px] placeholder:text-[rgba(45,54,72,0.44)] placeholder:leading-[1.5]"
            maxLength={50}
            autoComplete="username"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Input section with instructions and text input
 * @param inputValue - Current input value
 * @param onInputChange - Handler for input changes
 */
function InputSection({ inputValue, onInputChange }: { inputValue: string; onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col gap-[12px] h-[91px] items-center justify-start leading-[0] left-[48px] top-[291px] w-[297px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="font-['IBM_Plex_Sans:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[12px] text-black text-center" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Enter your registered phone number, email, or the Student ID number to proceed.</p>
      </div>
      <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start justify-start ml-0 mt-0 relative w-[297px]">
        <TextInput 
          value={inputValue} 
          onChange={onInputChange} 
          placeholder="e.g. 09xx-xxx-xxx, C20012, or email@example.com" 
        />
      </div>
    </motion.div>
  );
}

/**
 * Error message component for authentication failures
 * @param message - Error message to display
 */
function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  
  return (
    <motion.div
      className="absolute left-[48px] top-[395px] w-[297px]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-red-50 border border-red-200 rounded-[8px] px-[12px] py-[8px]">
        <p className="text-red-600 text-[12px] font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[1.4]">
          {message}
        </p>
      </div>
    </motion.div>
  );
}

function ProceedButton({ onClick, disabled, isLoading, hasError }: { onClick: () => void; disabled: boolean; isLoading: boolean; hasError: boolean }) {
  return (
    <motion.div
      className={`absolute left-[48px] w-[297px] ${hasError ? 'top-[445px]' : 'top-[389px]'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <LoadingButton
        onClick={onClick}
        disabled={disabled}
        loading={isLoading}
        className="bg-[#003630] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[10px] rounded-[12px] w-full hover:bg-[#004840] shadow-lg hover:shadow-xl transition-all duration-300"
        data-name="Button"
      >
        <div className="css-yrs6wc font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.16px]">
          <p className="leading-[24px] whitespace-pre">Proceed</p>
        </div>
      </LoadingButton>
    </motion.div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] gap-[3px] h-[31px] items-center justify-start leading-[0] left-[105px] not-italic text-[#bdbdbd] text-[10px] text-center top-[461px] w-[183px]">
      <div className="relative shrink-0 w-full">
        <p className="leading-[normal] text-[#bdbdbd] whitespace-pre-wrap">
          <span>{`view the `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#95E36C] transition-colors">terms</span>
          <span>{` and `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#95E36C] transition-colors">conditions</span>
          <span>{`  of service`}</span>
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[normal]">All rights reserved ©</p>
      </div>
    </div>
  );
}

function DecorativeLines() {
  return (
    <>
      {/* Decorative Line 1 */}
      <motion.div 
        className="absolute flex h-[117.757px] items-center justify-center left-[11px] top-[683.17px] w-[127.501px] pointer-events-none"
        animate={{ 
          x: [0, 10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[57.948px] relative w-[115.938px]">
            <div className="absolute inset-[-30.2%_-15.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 94">
                <path d={svgPaths.decorativeLine1} stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Line 2 */}
      <motion.div 
        className="absolute flex h-[165.354px] items-center justify-center left-[49px] top-[587.77px] w-[176.895px] pointer-events-none"
        animate={{ 
          x: [0, -8, 0],
          y: [0, 8, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[92.235px] relative w-[150.386px]">
            <div className="absolute inset-[-1.63%_-1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 96">
                <path d={svgPaths.decorativeLine2} stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Line 3 */}
      <motion.div 
        className="absolute flex h-[117.757px] items-center justify-center left-[144px] top-[734.24px] w-[127.501px] pointer-events-none"
        animate={{ 
          x: [0, -12, 0],
          y: [0, 6, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[57.948px] relative w-[115.938px]">
            <div className="absolute inset-[-30.2%_-15.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 94">
                <path d={svgPaths.decorativeLine1} stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

interface LoginPageProps {
  onProceed: (inputValue: string) => void;
  isLoading?: boolean;
  authError?: string;
  onClearError?: () => void;
}

export default function LoginPage({ onProceed, isLoading = false, authError = "", onClearError }: LoginPageProps) {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handle input changes with basic validation
   * @param e - React change event from input element
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // Clear authentication error when user starts typing
    if (authError && onClearError) {
      onClearError();
    }
  };

  /**
   * Handle proceed button click
   * Validates input before proceeding to next page
   */
  const handleProceed = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;
    
    // Basic validation - ensure minimum input length
    if (trimmedInput.length < 3) {
      alert("Please enter a valid phone number, student ID, or email address");
      return;
    }
    
    onProceed(trimmedInput);
  };

  return (
    <div className="absolute bg-white h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="iPhone 16 - 46">
      <Header />
      <TitleSection />
      <InputSection inputValue={inputValue} onInputChange={handleInputChange} />
      <ErrorMessage message={authError} />
      <ProceedButton onClick={handleProceed} disabled={!inputValue.trim()} isLoading={isLoading} hasError={!!authError} />
      <Footer />
      <DecorativeLines />
    </div>
  );
}