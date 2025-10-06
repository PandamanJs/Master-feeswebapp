import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ButtonPressAnimation } from "./PageTransition";
import { dataStore } from "../lib/data-store";

// SVG path data - inlined for portability
const svgPaths = {
  closeIcon: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
  decorativeLine1: "M18 76.8156L76.8918 18L135.272 76.3041",
  decorativeLine2: "M78.3141 2C82.935 2 87.3672 3.83358 90.6346 7.09677L149.014 65.4004C155.818 72.1956 155.818 83.2132 149.014 90.0084C142.21 96.8035 131.178 96.8036 124.374 90.0084L78.3141 44.0073L31.742 90.5201C24.938 97.3149 13.907 97.3149 7.10304 90.5201C0.298981 83.7249 0.298993 72.7073 7.10304 65.9121L65.9947 7.09677C69.262 3.83362 73.6934 2.00005 78.3141 2Z"
};

function CloseIcon({ onClick }: { onClick: () => void }) {
  return (
    <ButtonPressAnimation
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.closeIcon} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </ButtonPressAnimation>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      className="absolute content-stretch flex gap-[10px] h-[24px] items-center justify-start left-[17px] top-[73px] w-[297px]"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CloseIcon onClick={onBack} />
    </motion.div>
  );
}

function PaySchoolFeesButton({ onClick }: { onClick: () => void }) {
  return (
    <ButtonPressAnimation
      onClick={onClick}
      className="bg-[#003630] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[12px] shrink-0 w-[297px] hover:bg-[#004840] shadow-lg hover:shadow-xl transition-all duration-300" 
      data-name="Button"
    >
      <div className="css-ysbzhp font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">
        <p className="leading-[24px] whitespace-pre">Pay for School Fees</p>
      </div>
    </ButtonPressAnimation>
  );
}

function ViewHistoryButton({ onClick }: { onClick: () => void }) {
  return (
    <ButtonPressAnimation
      onClick={onClick}
      className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 hover:bg-gray-50 border border-gray-200 hover:border-[#003630]/20 transition-all duration-200" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-9d8df4 font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[#2d3648] text-[15px] text-nowrap tracking-[-0.15px]">
            <p className="leading-[24px] whitespace-pre">View my Payment History</p>
          </div>
        </div>
      </div>
    </ButtonPressAnimation>
  );
}

function DecorativeLines() {
  return (
    <>
      {/* Decorative Line 1 */}
      <motion.div 
        className="absolute flex h-[120.974px] items-center justify-center left-[29px] top-[697px] w-[127.501px] pointer-events-none"
        animate={{ 
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[58.816px] relative w-[117.272px]">
            <div className="absolute inset-[-29.75%_-14.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 95">
                <path d={svgPaths.decorativeLine1} stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Line 2 */}
      <motion.div 
        className="absolute flex h-[169.866px] items-center justify-center left-[48px] top-[604.56px] w-[176.894px] pointer-events-none"
        animate={{ 
          x: [0, -10, 0],
          y: [0, 8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[93.616px] relative w-[152.117px]">
            <div className="absolute inset-[-1.6%_-0.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 98">
                <path d={svgPaths.decorativeLine2} stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Line 3 */}
      <motion.div 
        className="absolute flex h-[120.974px] items-center justify-center left-[229px] top-[714px] w-[127.501px] pointer-events-none"
        animate={{ 
          x: [0, -12, 0],
          y: [0, 6, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[58.816px] relative w-[117.272px]">
            <div className="absolute inset-[-29.75%_-14.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 95">
                <path d={svgPaths.decorativeLine1} stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

interface ServicesPageProps {
  userName: string;
  onBack: () => void;
  onViewBalances: () => void;
  onViewHistory: () => void;
  onPaySchoolFees: () => void;
}

export default function ServicesPage({ userName, onBack, onViewBalances, onViewHistory, onPaySchoolFees }: ServicesPageProps) {
  /**
   * Get parent name based on student lookup from login input
   * Uses the DataStore to authenticate and find student, then returns guardian name
   */
  const getParentName = (loginInput: string): string => {
    try {
      // Try to find the student using the login input
      const student = dataStore.authenticateUser(loginInput);
      
      if (student) {
        // Use guardian name if available, otherwise fall back to surname-based name
        if (student.guardianName) {
          return student.guardianName;
        }
        
        // Fallback: Extract surname from student name and create parent name
        const nameParts = student.name.split(' ');
        const surname = nameParts[nameParts.length - 1]; // Get last part as surname
        return `Mr/Mrs ${surname}`;
      }
    } catch (error) {
      console.error('Error looking up student:', error);
    }
    
    // Final fallback: If email, extract username part; otherwise use "Parent/Guardian"
    if (userName.includes("@")) {
      return userName.split("@")[0];
    }
    
    // If phone number or other input, use generic greeting
    return "Parent/Guardian";
  };

  // Get the parent name to display
  const displayName = getParentName(userName);
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const handlePaySchoolFees = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onPaySchoolFees();
    }, 300);
  };

  const handleViewBalances = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onViewBalances();
    }, 300);
  };

  const handleViewHistory = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onViewHistory();
    }, 300);
  };



  const handleViewPlans = () => {
    alert("Loading payment plans...");
  };

  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 48">
      <BackButton onBack={onBack} />
      
      {/* Welcome Message */}
      <motion.div 
        className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[33px] leading-[0.5] left-[47px] not-italic text-[18px] text-black top-[151px] tracking-[-0.18px] w-[279px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] mb-[14px]">{`${(() => {
          const hour = new Date().getHours();
          if (hour >= 5 && hour < 12) return "Good Morning, ";
          if (hour >= 12 && hour < 18) return "Good Afternoon, ";
          return "Good Evening, ";
        })()}`}</p>
        <p className="font-['Agrandir:Grand_Heavy',_sans-serif] text-[#003630]">{displayName}</p>
      </motion.div>

      {/* Services Question */}
      <motion.div 
        className="absolute font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[46px] leading-[0] left-[48px] not-italic text-[12px] text-black top-[196px] tracking-[-0.12px] w-[296px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="leading-[1.5]">Which one of our services would you like us to help you with today?</p>
      </motion.div>

      {/* Service Buttons */}
      <motion.div 
        className="absolute content-stretch flex gap-[15px] h-[44px] items-start justify-start left-[48px] top-[266px] w-[297px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PaySchoolFeesButton onClick={handlePaySchoolFees} />
      </motion.div>

      <motion.div 
        className="absolute content-stretch flex gap-[15px] h-[44px] items-start justify-start left-[48px] top-[320px] w-[297px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ViewHistoryButton onClick={handleViewHistory} />
      </motion.div>

      <DecorativeLines />
      
      {/* Loading Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-[#003630] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}