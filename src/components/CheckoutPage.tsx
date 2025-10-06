import { useState } from "react";

// SVG path data - inlined for portability
const svgPaths = {
  closeIcon: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
  shoppingBagIcon: "M9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8M3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8036C21 17.9215 21 18.4805 20.7822 18.9079C20.5905 19.2842 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20H6.19691C5.07899 20 4.5192 20 4.0918 19.7822C3.71547 19.5905 3.40973 19.2842 3.21799 18.9079C3 18.4801 3 17.9203 3 16.8002Z",
  checkmarkIcon: "M5 7.63331L6.59082 9.5L8.29541 7.5L10 5.5",
  arrowRightIcon: "M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
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
      <div className="absolute content-stretch flex gap-[10px] items-center left-[36px] top-[101px] w-[327px]">
        <CloseButton onClick={onBack} />
      </div>
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] left-[44px] not-italic text-[18px] text-black top-[171px] tracking-[-0.18px] w-[311px]">
        <p className="leading-[24px]">Checkout</p>
      </div>
    </>
  );
}

function ShoppingBagIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Interface / Shopping_Bag_01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Interface / Shopping_Bag_01">
          <path d={svgPaths.shoppingBagIcon} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PaymentInstructions() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[30px] items-start pl-0 pr-[10px] py-0 relative w-full">
          <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#2d3648] text-[8px] tracking-[-0.08px] w-full">
            <p className="leading-[15px]">You can pay the complete balance at one go or you can choose to pay in part for each of the balances</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <div className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[20px] leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] w-full">
        <p className="leading-[24px]">Payment</p>
      </div>
      <PaymentInstructions />
    </div>
  );
}

function AmountInput({ amount, onProceed }: { amount: number; onProceed: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      {/* Amount Display */}
      <div className="bg-[#f5f4f7] box-border content-stretch flex h-[56px] items-center justify-between leading-[0] not-italic px-[12px] py-[14px] relative rounded-[10px] shrink-0 w-full">
        <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] relative shrink-0 text-[12px] text-[rgba(45,54,72,0.58)] w-[48.835px]">
          <p className="leading-[1.4]">ZMW</p>
        </div>
        <div className="font-['IBM_Plex_Sans_Condensed:Regular',_sans-serif] relative shrink-0 text-[20px] text-black text-right w-[87px]">
          <p className="leading-[1.4]">{amount}</p>
        </div>
      </div>
      
      {/* Proceed to Payment Gateway Button */}
      <button
        onClick={onProceed}
        className="bg-[#003630] w-full h-[56px] relative rounded-[10px] hover:bg-[#004840] active:scale-95 transition-all flex items-center justify-between px-[20px]" 
        data-name="Button"
        aria-label="Proceed to payment gateway"
      >
        <span className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] text-[16px] text-white">
          Proceed
        </span>
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Icon Right">
              <path d={svgPaths.arrowRightIcon} fill="white" />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame 58">
          <rect fill="var(--fill-0, #95E36C)" height="15" rx="7.5" width="15" />
          <path d={svgPaths.checkmarkIcon} id="Vector" stroke="var(--stroke-0, #003630)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Displays the breakdown of student services and total amount
 * @param studentServices - Array of student names and their service amounts
 * @param total - Total amount for all services
 */
function BalanceBreakdown({ studentServices, total }: { studentServices: Array<{ studentName: string; amount: number }>; total: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      {/* Student Services List */}
      {studentServices && studentServices.length > 0 ? (
        studentServices.map((service, index) => (
          <div key={index} className="box-border content-stretch flex items-center justify-between pl-[5px] pr-0 py-0 relative shrink-0 w-[296px]">
            <CheckmarkIcon />
            <div className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] h-[23px] leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.12px] w-[186px]">
              <p className="leading-[24px]">{service.studentName}</p>
            </div>
            <div className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right tracking-[-0.12px] w-[49px]">
              <p className="leading-[24px]">K{service.amount.toLocaleString()}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="box-border content-stretch flex items-center justify-between pl-[5px] pr-0 py-0 relative shrink-0 w-[296px]">
          <CheckmarkIcon />
          <div className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] h-[23px] leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.12px] w-[186px]">
            <p className="leading-[24px]">No services added</p>
          </div>
          <div className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right tracking-[-0.12px] w-[49px]">
            <p className="leading-[24px]">K0</p>
          </div>
        </div>
      )}
      
      {/* Subtotal */}
      <div className="relative shrink-0 w-full mt-2">
        <div className="relative size-full">
          <div className="box-border content-stretch flex items-start justify-between leading-[0] not-italic pl-[41px] pr-0 py-0 relative text-[12px] text-black tracking-[-0.12px] w-full">
            <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] h-[23px] relative shrink-0 w-[86px]">
              <p className="leading-[24px]">Subtotal</p>
            </div>
            <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] relative shrink-0 text-right w-[51px]">
              <p className="leading-[24px]">K{total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrDivider() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 1">
            <line id="Line 19" stroke="var(--stroke-0, black)" x2="98.6667" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="basis-0 font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.16px]">
        <p className="leading-[24px]">or</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 1">
            <line id="Line 18" stroke="var(--stroke-0, black)" x2="98.6667" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PayInPartButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
      <button
        onClick={onClick}
        className="basis-0 grow min-h-px min-w-px relative rounded-[10px] shrink-0 hover:bg-gray-100 active:scale-95 transition-all" 
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
            <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
              <p className="leading-[24px] whitespace-pre">Pay in part</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#003630] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </button>
    </div>
  );
}

function CheckoutCard({ studentServices, total, onProceed, onPayInPart }: { studentServices: Array<{ studentName: string; amount: number }>; total: number; onProceed: () => void; onPayInPart: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[444px] items-start left-[24px] pb-[30px] pt-[20px] px-[25px] rounded-[20px] top-[210px] w-[346px]">
      <ShoppingBagIcon />
      <PaymentHeader />
      <AmountInput amount={total} onProceed={onProceed} />
      <BalanceBreakdown studentServices={studentServices} total={total} />
      <OrDivider />
      <PayInPartButton onClick={onPayInPart} />
    </div>
  );
}

interface CheckoutPageProps {
  total: number;
  studentServices: Array<{ studentName: string; amount: number }>;
  onBack: () => void;
  onPayInPart: () => void;
  onProceedToPayment: () => void;
}

/**
 * Main checkout page component
 * Displays payment summary with student services breakdown and payment options
 * @param total - Total payment amount
 * @param studentServices - Array of student services with names and amounts
 * @param onBack - Handler to navigate back to services selection
 * @param onPayInPart - Handler to navigate to partial payment page
 * @param onProceedToPayment - Handler to proceed to full payment
 */
export default function CheckoutPage({ total, studentServices, onBack, onPayInPart, onProceedToPayment }: CheckoutPageProps) {
  return (
    <div className="bg-[#f5f4f7] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 100">
      <HeaderSection onBack={onBack} />
      <CheckoutCard 
        studentServices={studentServices}
        total={total}
        onProceed={onProceedToPayment}
        onPayInPart={onPayInPart}
      />
    </div>
  );
}