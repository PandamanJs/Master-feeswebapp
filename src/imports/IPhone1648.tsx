import svgPaths from "./svg-yvivkn45sv";

function IconX({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.p2f9c6900} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function Frame3({ onBack }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[24px] items-center justify-start left-[17px] top-[73px] w-[297px]">
      <IconX onClick={onBack} />
    </div>
  );
}

function Button({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#003630] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[12px] shrink-0 w-[297px] hover:bg-[#004840] active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="css-ysbzhp font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">
        <p className="leading-[24px] whitespace-pre">Pay for School Fees</p>
      </div>
    </button>
  );
}

function Frame32({ onPaySchoolFees }) {
  return (
    <div className="absolute content-stretch flex gap-[15px] h-[44px] items-start justify-start left-[48px] top-[266px] w-[297px]">
      <Button onClick={onPaySchoolFees} />
    </div>
  );
}

function Button1({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-9d8df4 font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[#2d3648] text-[15px] text-nowrap tracking-[-0.15px]">
            <p className="leading-[24px] whitespace-pre">View/Clear Current Balances</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame33({ onViewBalances }) {
  return (
    <div className="absolute content-stretch flex gap-[15px] h-[44px] items-start justify-start left-[48px] top-[321px] w-[296px]">
      <Button1 onClick={onViewBalances} />
    </div>
  );
}

function Button2({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-9d8df4 font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[#2d3648] text-[15px] text-nowrap tracking-[-0.15px]">
            <p className="leading-[24px] whitespace-pre">View my Payment History</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame34({ onViewHistory }) {
  return (
    <div className="absolute content-stretch flex gap-[15px] h-[43px] items-start justify-start left-[48px] top-[377px] w-[296px]">
      <Button2 onClick={onViewHistory} />
    </div>
  );
}

function Button3({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-9d8df4 font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[#2d3648] text-[15px] text-nowrap tracking-[-0.15px]">
            <p className="leading-[24px] whitespace-pre">View School Payment plans</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame35({ onViewPlans }) {
  return (
    <div className="absolute content-stretch flex gap-[15px] h-[44px] items-start justify-start left-[48px] top-[432px] w-[296px]">
      <Button3 onClick={onViewPlans} />
    </div>
  );
}

function Group26({ userName, onBack, onPaySchoolFees, onViewBalances, onViewHistory, onViewPlans }) {
  // Extract name from phone number or student ID
  const displayName = userName.includes("@") ? userName.split("@")[0] : "Mr Stephen Kapambwe";
  
  return (
    <div className="absolute contents left-[17px] top-[73px]">
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[46px] leading-[0] left-[48px] not-italic text-[12px] text-black top-[196px] tracking-[-0.12px] w-[296px]">
        <p className="leading-[1.5]">Which one of our services would you like us to help you with today?</p>
      </div>
      <Frame3 onBack={onBack} />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[33px] leading-[0.5] left-[47px] not-italic text-[18px] text-black top-[151px] tracking-[-0.18px] w-[279px]">
        <p className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] mb-[14px]">{`Good Afternoon, `}</p>
        <p className="font-['Agrandir:Grand_Heavy',_sans-serif] text-[#003630]">{displayName}</p>
      </div>
      <Frame32 onPaySchoolFees={onPaySchoolFees} />
      <Frame33 onViewBalances={onViewBalances} />
      <Frame34 onViewHistory={onViewHistory} />
      <Frame35 onViewPlans={onViewPlans} />
      <div className="absolute flex h-[120.974px] items-center justify-center left-[29px] top-[697px] w-[127.501px]">
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[58.816px] relative w-[117.272px]" data-name="path60">
            <div className="absolute inset-[-29.75%_-14.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 95">
                <path d={svgPaths.p19d2ffc0} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[169.866px] items-center justify-center left-[48px] top-[604.56px] w-[176.894px]">
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[93.616px] relative w-[152.117px]" data-name="path60 (Stroke)">
            <div className="absolute inset-[-1.6%_-0.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 98">
                <path d={svgPaths.peb3f700} id="path60 (Stroke)" stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[120.974px] items-center justify-center left-[229px] top-[714px] w-[127.501px]">
        <div className="flex-none rotate-[41.054deg] skew-x-[359.421deg]">
          <div className="h-[58.816px] relative w-[117.272px]" data-name="path60">
            <div className="absolute inset-[-29.75%_-14.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 95">
                <path d={svgPaths.p19d2ffc0} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group27({ userName, onBack, onPaySchoolFees, onViewBalances, onViewHistory, onViewPlans }) {
  return (
    <div className="absolute contents left-[17px] top-[73px]">
      <Group26 
        userName={userName}
        onBack={onBack}
        onPaySchoolFees={onPaySchoolFees}
        onViewBalances={onViewBalances}
        onViewHistory={onViewHistory}
        onViewPlans={onViewPlans}
      />
    </div>
  );
}

export default function IPhone1648({ userName, onBack, onViewBalances }) {
  const handlePaySchoolFees = () => {
    alert("Redirecting to payment portal...");
  };

  const handleViewBalances = () => {
    onViewBalances();
  };

  const handleViewHistory = () => {
    alert("Loading payment history...");
  };

  const handleViewPlans = () => {
    alert("Loading payment plans...");
  };

  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 48">
      <Group27 
        userName={userName}
        onBack={onBack}
        onPaySchoolFees={handlePaySchoolFees}
        onViewBalances={handleViewBalances}
        onViewHistory={handleViewHistory}
        onViewPlans={handleViewPlans}
      />
    </div>
  );
}