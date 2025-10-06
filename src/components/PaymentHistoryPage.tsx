import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataStore } from "../lib/data-store";
import type { Student, PaymentHistory } from "../lib/data-types";

// SVG path data - inlined for portability
const svgPaths = {
  arrowRightIcon: "M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z",
  chatBubbleIcon: "M15.0304 53.2723C19.1417 55.6434 23.9119 57 28.9989 57C44.4629 57 57 44.4641 57 29.0001C57 13.5361 44.464 1 29 1C13.536 1 1 13.5361 1 29.0001C1 34.0871 2.35658 38.8573 4.72771 42.9686L4.73689 42.9845C4.96504 43.3801 5.08009 43.5796 5.1322 43.7681C5.18135 43.9459 5.19508 44.1058 5.18249 44.2898C5.16897 44.4876 5.10232 44.6926 4.96568 45.1026L2.57378 52.2783L2.57077 52.2877C2.06611 53.8017 1.81378 54.5587 1.99364 55.0631C2.15047 55.5029 2.49858 55.85 2.93837 56.0068C3.44165 56.1863 4.19525 55.9351 5.70259 55.4326L5.72135 55.4257L12.897 53.0338C13.3056 52.8976 13.5133 52.8285 13.7107 52.815C13.8948 52.8024 14.0535 52.819 14.2313 52.8682C14.4204 52.9204 14.6199 53.0355 15.0175 53.2649L15.0304 53.2723Z",
  menuMoreVertical: "M1 6.83333C1 7.29357 1.3731 7.66667 1.83333 7.66667C2.29357 7.66667 2.66667 7.29357 2.66667 6.83333C2.66667 6.3731 2.29357 6 1.83333 6C1.3731 6 1 6.3731 1 6.83333Z",
  menuMoreVertical2: "M1 1.83333C1 2.29357 1.3731 2.66667 1.83333 2.66667C2.29357 2.66667 2.66667 2.29357 2.66667 1.83333C2.66667 1.3731 2.29357 1 1.83333 1C1.3731 1 1 1.3731 1 1.83333Z",
  menuMoreVertical3: "M1 11.8333C1 12.2936 1.3731 12.6667 1.83333 12.6667C2.29357 12.6667 2.66667 12.2936 2.66667 11.8333C2.66667 11.3731 2.29357 11 1.83333 11C1.3731 11 1 11.3731 1 11.8333Z",
  menuMoreVertical20: "M9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10Z",
  menuMoreVertical21: "M9.16667 5C9.16667 5.46024 9.53976 5.83333 10 5.83333C10.4602 5.83333 10.8333 5.46024 10.8333 5C10.8333 4.53976 10.4602 4.16667 10 4.16667C9.53976 4.16667 9.16667 4.53976 9.16667 5Z",
  menuMoreVertical22: "M9.16667 15C9.16667 15.4602 9.53976 15.8333 10 15.8333C10.4602 15.8333 10.8333 15.4602 10.8333 15C10.8333 14.5398 10.4602 14.1667 10 14.1667C9.53976 14.1667 9.16667 14.5398 9.16667 15Z"
};

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-right">
          <path d={svgPaths.arrowRightIcon} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function BackButtonSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[21px] top-[113px] w-[339px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <BackButton onClick={onBack} />
        </div>
      </div>
    </div>
  );
}

function StudentCard({ 
  name, 
  id, 
  grade,
  balance,
  onClick, 
  isSelected 
}: { 
  name: string; 
  id: string; 
  grade: string;
  balance: number;
  onClick: () => void; 
  isSelected?: boolean;
}) {
  return (
    <button 
      onClick={onClick}
      className={`relative rounded-[6px] shrink-0 min-w-[85px] max-w-[85px] transition-all ${
        isSelected 
          ? 'bg-[#95e36c]' 
          : 'bg-[#edf0f7] hover:bg-gray-100 active:scale-95'
      }`}
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <div className={`font-['IBM_Plex_Sans_Devanagari:${isSelected ? 'SemiBold' : 'ExtraLight'}',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center tracking-[-0.1px] ${
            isSelected ? 'text-[#003630]' : 'text-[#2d3648]'
          }`}>
            <p className="mb-0">{name}</p>
            <p className="text-[8px] opacity-70">{id}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function StudentCardsScrollContainer({ 
  students, 
  selectedStudent, 
  onSelectStudent 
}: { 
  students: Student[]; 
  selectedStudent: Student | null;
  onSelectStudent: (student: Student) => void;
}) {
  if (students.length === 0) {
    return (
      <div className="absolute box-border content-stretch flex flex-col gap-[26px] items-center justify-center left-[21px] pb-[30px] pt-[20px] px-[20px] rounded-[12px] top-[163px] w-[354px] h-[200px]">
        <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] text-[14px] text-gray-500 text-center">
          No students found for this account
        </div>
      </div>
    );
  }

  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[26px] items-start left-[21px] pb-[30px] pt-[20px] px-[20px] rounded-[12px] top-[163px] w-[354px]">
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] w-full">
        <p className="leading-[0.5]">Payment History</p>
      </div>
      
      <div className="relative shrink-0 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <motion.div 
          className="flex gap-[15px] items-start pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {students.map((student, index) => {
            const balance = dataStore.getTotalOutstandingForStudent(student.id);
            return (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <StudentCard
                  name={student.name}
                  id={student.id}
                  grade={student.grade}
                  balance={balance}
                  onClick={() => onSelectStudent(student)}
                  isSelected={selectedStudent?.id === student.id}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function MenuMoreVertical({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 13">
        <g id="Vector">
          <path d={svgPaths.menuMoreVertical3} fill="var(--fill-0, #2D3648)" />
          <path d={svgPaths.menuMoreVertical} fill="var(--fill-0, #2D3648)" />
          <path d={svgPaths.menuMoreVertical2} fill="var(--fill-0, #2D3648)" />
          <path d={svgPaths.menuMoreVertical3} stroke="var(--stroke-0, #2D3648)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.menuMoreVertical} stroke="var(--stroke-0, #2D3648)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.menuMoreVertical2} stroke="var(--stroke-0, #2D3648)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </button>
  );
}

function MenuMoreVertical20({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Menu / More_Vertical">
          <g id="Vector">
            <path d={svgPaths.menuMoreVertical22} fill="var(--fill-0, black)" />
            <path d={svgPaths.menuMoreVertical20} fill="var(--fill-0, black)" />
            <path d={svgPaths.menuMoreVertical21} fill="var(--fill-0, black)" />
            <path d={svgPaths.menuMoreVertical22} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
            <path d={svgPaths.menuMoreVertical20} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
            <path d={svgPaths.menuMoreVertical21} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function PaymentEntry({ 
  id,
  day, 
  date, 
  title, 
  subtitle, 
  amount, 
  useSmallIcon = false,
  onMenuClick
}: { 
  id: string;
  day: string; 
  date: string; 
  title: string; 
  subtitle: string; 
  amount: string; 
  useSmallIcon?: boolean;
  onMenuClick: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[12px] w-[363px]">
      <div className="content-stretch flex flex-col gap-[2px] items-center leading-[0] not-italic relative shrink-0 size-[18px] text-black text-center">
        <div className="flex flex-col font-['Inter:Light',_sans-serif] font-light h-[8px] justify-center relative shrink-0 text-[8px] tracking-[-0.08px] w-[19px]">
          <p className="leading-[15px]">{day}</p>
        </div>
        <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[8px] justify-center relative shrink-0 text-[12px] tracking-[-0.12px] w-[19px]">
          <p className="leading-[15px]">{date}</p>
        </div>
      </div>
      
      <div className="content-stretch flex gap-[25px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-[226px]">
          <div className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] justify-center relative shrink-0 text-[14px] text-black tracking-[-0.14px] w-full">
            <p className="leading-[15px]">{title}</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#a7aaa7] text-[8px] tracking-[-0.08px] w-full">
            <p className="leading-[15px]">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex flex-col font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.14px]">
          <p className="leading-[15px] whitespace-pre">{amount}</p>
        </div>
        
        {useSmallIcon ? (
          <MenuMoreVertical onClick={(e) => onMenuClick(id, e)} />
        ) : (
          <MenuMoreVertical20 onClick={(e) => onMenuClick(id, e)} />
        )}
      </div>
    </div>
  );
}

function DetailedPaymentHistory({ 
  student,
  paymentHistory,
  onMenuClick 
}: { 
  student: Student;
  paymentHistory: PaymentHistory[];
  onMenuClick: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  // Calculate the current month and previous two months
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11
  const currentYear = today.getFullYear();
  
  // Get previous month
  const previousMonthDate = new Date(currentYear, currentMonth - 1, 1);
  const previousMonth = previousMonthDate.toLocaleString('en-US', { month: 'long' });
  const previousMonthYear = previousMonthDate.getFullYear();
  
  // Get month before that
  const twoMonthsAgoDate = new Date(currentYear, currentMonth - 2, 1);
  const twoMonthsAgo = twoMonthsAgoDate.toLocaleString('en-US', { month: 'long' });
  const twoMonthsAgoYear = twoMonthsAgoDate.getFullYear();
  
  // Format month strings with year if different from current year
  const previousMonthLabel = previousMonthYear !== currentYear 
    ? `${previousMonth} ${previousMonthYear}` 
    : previousMonth;
  const twoMonthsAgoLabel = twoMonthsAgoYear !== currentYear 
    ? `${twoMonthsAgo} ${twoMonthsAgoYear}` 
    : twoMonthsAgo;

  // Group payments by month
  const currentMonthPayments = paymentHistory.filter(p => {
    const paymentDate = new Date(p.date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
  });

  const previousMonthPayments = paymentHistory.filter(p => {
    const paymentDate = new Date(p.date);
    return paymentDate.getMonth() === previousMonthDate.getMonth() && 
           paymentDate.getFullYear() === previousMonthYear;
  });

  const twoMonthsAgoPayments = paymentHistory.filter(p => {
    const paymentDate = new Date(p.date);
    return paymentDate.getMonth() === twoMonthsAgoDate.getMonth() && 
           paymentDate.getFullYear() === twoMonthsAgoYear;
  });

  if (paymentHistory.length === 0) {
    return (
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] left-[150px] not-italic text-[#2d3648] text-[14px] text-center top-[450px] tracking-[-0.14px] translate-x-[-50%]">
        <p className="leading-[15px]">No payment history available for {student.name}</p>
      </div>
    );
  }

  // Check student's balance/debt
  const balance = dataStore.getTotalOutstandingForStudent(student.id);
  const hasDebt = balance > 0;

  // Dynamic positioning calculations
  const startTop = 320; // Starting position for first month (moved lower to create space from student selectors)
  const monthHeaderHeight = 25;
  const monthHeaderGap = 5;
  const paymentEntryHeight = 62;
  const emptyMessageHeight = 40;
  const sectionGap = 20;

  // Calculate positions dynamically
  let currentTop = startTop;
  
  // Current month section
  const currentMonthHeaderTop = currentTop;
  currentTop += monthHeaderHeight + monthHeaderGap;
  const currentMonthContentTop = currentTop;
  const currentMonthPaymentsHeight = currentMonthPayments.length > 0 
    ? currentMonthPayments.length * paymentEntryHeight 
    : emptyMessageHeight;
  currentTop += currentMonthPaymentsHeight + sectionGap;

  // Previous month section
  const previousMonthHeaderTop = currentTop;
  currentTop += monthHeaderHeight + monthHeaderGap;
  const previousMonthContentTop = currentTop;
  const previousMonthPaymentsHeight = previousMonthPayments.length > 0 
    ? previousMonthPayments.length * paymentEntryHeight 
    : emptyMessageHeight;
  currentTop += previousMonthPaymentsHeight + sectionGap;

  // Two months ago section
  const twoMonthsAgoHeaderTop = currentTop;
  currentTop += monthHeaderHeight + monthHeaderGap;
  const twoMonthsAgoContentTop = currentTop;

  return (
    <>
      {/* Month headers */}
      <motion.div 
        className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-[43px] not-italic text-[10px] text-black text-nowrap tracking-[-0.1px]" 
        style={{ top: `${currentMonthHeaderTop}px` }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p className="leading-[15px] whitespace-pre">This Month</p>
      </motion.div>
      <motion.div 
        className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-[43px] not-italic text-[10px] text-black text-nowrap tracking-[-0.1px]" 
        style={{ top: `${previousMonthHeaderTop}px` }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className="leading-[15px] whitespace-pre">{previousMonthLabel}</p>
      </motion.div>
      <motion.div 
        className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-[43px] not-italic text-[10px] text-black text-nowrap tracking-[-0.1px]" 
        style={{ top: `${twoMonthsAgoHeaderTop}px` }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <p className="leading-[15px] whitespace-pre">{twoMonthsAgoLabel}</p>
      </motion.div>

      {/* Current Month Payments */}
      {currentMonthPayments.length > 0 ? (
        currentMonthPayments.map((payment, index) => {
          const paymentDate = new Date(payment.date);
          const day = paymentDate.toLocaleString('en-US', { weekday: 'short' });
          const date = paymentDate.getDate().toString();
          
          return (
            <motion.div 
              key={payment.id} 
              className="absolute" 
              style={{ top: `${currentMonthContentTop + index * paymentEntryHeight}px` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <PaymentEntry 
                id={payment.id}
                day={day}
                date={date}
                title={payment.title}
                subtitle={payment.subtitle}
                amount={`K${payment.amount}`}
                useSmallIcon={index === 0}
                onMenuClick={onMenuClick}
              />
            </motion.div>
          );
        })
      ) : (
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[120px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap tracking-[-0.1px]" style={{ top: `${currentMonthContentTop + 10}px` }}>
          <p className="leading-[15px] whitespace-pre">No Payments This Month</p>
        </div>
      )}

      {/* Previous Month Payments */}
      {previousMonthPayments.length > 0 ? (
        previousMonthPayments.map((payment, index) => {
          const paymentDate = new Date(payment.date);
          const day = paymentDate.toLocaleString('en-US', { weekday: 'short' });
          const date = paymentDate.getDate().toString();
          
          return (
            <motion.div 
              key={payment.id} 
              className="absolute" 
              style={{ top: `${previousMonthContentTop + index * paymentEntryHeight}px` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <PaymentEntry 
                id={payment.id}
                day={day}
                date={date}
                title={payment.title}
                subtitle={payment.subtitle}
                amount={`K${payment.amount}`}
                onMenuClick={onMenuClick}
              />
              {index < previousMonthPayments.length - 1 && (
                <div className="absolute h-0 left-[31px] w-[295px]" style={{ top: '61px' }}>
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                      <line stroke="var(--stroke-0, #F5F4F7)" x2="295" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })
      ) : (
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[100px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap tracking-[-0.1px]" style={{ top: `${previousMonthContentTop + 10}px` }}>
          <p className="leading-[15px] whitespace-pre">No Payments in {previousMonth}</p>
        </div>
      )}

      {/* Two Months Ago Payments */}
      {twoMonthsAgoPayments.length > 0 ? (
        twoMonthsAgoPayments.map((payment, index) => {
          const paymentDate = new Date(payment.date);
          const day = paymentDate.toLocaleString('en-US', { weekday: 'short' });
          const date = paymentDate.getDate().toString();
          
          return (
            <motion.div 
              key={payment.id} 
              className="absolute" 
              style={{ top: `${twoMonthsAgoContentTop + index * paymentEntryHeight}px` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <PaymentEntry 
                id={payment.id}
                day={day}
                date={date}
                title={payment.title}
                subtitle={payment.subtitle}
                amount={`K${payment.amount}`}
                onMenuClick={onMenuClick}
              />
              {index < twoMonthsAgoPayments.length - 1 && (
                <div className="absolute h-0 left-[31px] w-[295px]" style={{ top: '61px' }}>
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
                      <line stroke="var(--stroke-0, #F5F4F7)" x2="295" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })
      ) : (
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[100px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap tracking-[-0.1px]" style={{ top: `${twoMonthsAgoContentTop + 10}px` }}>
          <p className="leading-[15px] whitespace-pre">No Payments in {twoMonthsAgo}</p>
        </div>
      )}

      {/* Show debt warning if student has outstanding balance */}
      {hasDebt && (
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[43px] not-italic text-[12px] text-red-600 top-[290px] tracking-[-0.12px]">

        </div>
      )}
    </>
  );
}

function ChatBubbleIcon() {
  return (
    <div className="absolute inset-[52.11%_45.8%_41.31%_39.95%]">
      <div className="absolute inset-[-1.786%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <path d={svgPaths.chatBubbleIcon} id="Vector" stroke="var(--stroke-0, #A7AAA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function SelectInstructions() {
  return (
    <>
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] left-[180px] not-italic text-[#2d3648] text-[14px] text-center top-[525px] tracking-[-0.14px] translate-x-[-50%] w-[146px]">
        <p className="leading-[15px]">Select a Pupil to View Payment History</p>
      </div>
      <ChatBubbleIcon />
    </>
  );
}

// Enhanced Frame47 component with click handlers
function DropdownMenu({ onAction }: { onAction: (action: string) => void }) {
  return (
    <div className="bg-white relative rounded-[10px] size-full">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(139,144,154,0.37)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <button
            onClick={() => onAction('details')}
            className="relative rounded-[6px] shrink-0 w-full hover:bg-gray-100 active:scale-95 transition-all"
          >
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
                <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
                  <p className="leading-[22px]">View payment Details</p>
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onAction('receipt')}
            className="relative rounded-[6px] shrink-0 w-full hover:bg-gray-100 active:scale-95 transition-all"
          >
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
                <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
                  <p className="leading-[22px]">View payment Receipt</p>
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onAction('download')}
            className="relative rounded-[6px] shrink-0 w-full hover:bg-gray-100 active:scale-95 transition-all"
          >
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
                <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
                  <p className="leading-[22px]">Download Receipt</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

interface PaymentHistoryPageProps {
  userName: string;
  onBack: () => void;
}

export default function PaymentHistoryPage({ userName, onBack }: PaymentHistoryPageProps) {
  // Get all students for this guardian/parent
  const students = dataStore.getStudentsByGuardian(userName);
  
  // Debug logging
  console.log("PaymentHistoryPage - userName:", userName);
  console.log("PaymentHistoryPage - students found:", students.length);
  console.log("PaymentHistoryPage - students:", students);
  
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get payment history for selected student
  const paymentHistory = selectedStudent 
    ? dataStore.getPaymentHistoryForStudent(selectedStudent.id) 
    : [];

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
    setOpenDropdownId(null); // Close any open dropdowns when switching students
  };

  const handleBackToSelection = () => {
    setSelectedStudent(null);
    setOpenDropdownId(null);
  };

  const handleMenuClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    // If clicking the same dropdown, close it
    if (openDropdownId === id) {
      setOpenDropdownId(null);
      setDropdownPosition(null);
      return;
    }

    // Get button position for dropdown placement
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.closest('[data-name="iPhone 16 - 56"]')?.getBoundingClientRect();
    
    if (containerRect) {
      // Position dropdown to the left of the button
      const top = buttonRect.top - containerRect.top;
      const left = buttonRect.left - containerRect.left - 180; // 180px is approximately the dropdown width
      
      setDropdownPosition({ top, left });
      setOpenDropdownId(id);
    }
  };

  const handleDropdownAction = (action: string) => {
    console.log(`Action selected: ${action} for payment ${openDropdownId}`);
    // TODO: Implement actual actions
    // - "details": Navigate to payment details view
    // - "receipt": Navigate to receipt view
    // - "download": Trigger download
    setOpenDropdownId(null);
    setDropdownPosition(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
        setDropdownPosition(null);
      }
    };

    if (openDropdownId) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [openDropdownId]);

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full min-h-screen overflow-y-auto" data-name="iPhone 16 - 56">
      <BackButtonSection onBack={selectedStudent ? handleBackToSelection : onBack} />
      
      {selectedStudent ? (
        <>
          {/* Title for detailed view */}
          <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[52px] not-italic text-[18px] text-black text-nowrap top-[182px] tracking-[-0.18px]">
            <p className="leading-[0.5] whitespace-pre">Payment History</p>
          </div>
          
          {/* Student tabs for detailed view - horizontal scroll */}
          <div className="absolute left-[52px] top-[217px] w-[310px] overflow-x-auto">
            <div className="flex gap-[15px] items-start pb-2">
              {students.map((student) => {
                const balance = dataStore.getTotalOutstandingForStudent(student.id);
                return (
                  <StudentCard
                    key={student.id}
                    name={student.name}
                    id={student.id}
                    grade={student.grade}
                    balance={balance}
                    onClick={() => handleSelectStudent(student)}
                    isSelected={selectedStudent?.id === student.id}
                  />
                );
              })}
            </div>
          </div>
          
          <DetailedPaymentHistory 
            student={selectedStudent}
            paymentHistory={paymentHistory}
            onMenuClick={handleMenuClick} 
          />

          {/* Dropdown Menu */}
          {openDropdownId && dropdownPosition && (
            <div
              ref={dropdownRef}
              className="absolute z-50 w-[180px] h-[170px]"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
              }}
            >
              <DropdownMenu onAction={handleDropdownAction} />
            </div>
          )}
        </>
      ) : (
        <>
          <StudentCardsScrollContainer 
            students={students}
            selectedStudent={selectedStudent}
            onSelectStudent={handleSelectStudent}
          />
          <SelectInstructions />
        </>
      )}
    </div>
  );
}
