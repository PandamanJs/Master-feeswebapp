import { dataStore } from '../lib/data-store';

// SVG path data - inlined for portability
const svgPaths = {
  checkIcon: "M5.39817 9.54268L9.92043 5.02042L14.4034 9.50336",
  diamondShape: "M20 10L10 0L-6.16352e-07 10L10 20L20 10Z",
  arrowRightIcon: "M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
};

function LogoIcon() {
  return (
    <div className="absolute left-[116px] size-[20px] top-[22.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 15">
          <path d={svgPaths.diamondShape} fill="var(--fill-0, #003630)" id="rect84" />
          <path d={svgPaths.checkIcon} id="path60" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="absolute h-[66px] left-0 top-0 w-[393px]">
        <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      </div>
      <LogoIcon />
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] left-[144px] not-italic text-[20px] text-black text-nowrap top-[17px]">
        <p className="leading-[normal] whitespace-pre">master-fees</p>
      </div>
    </>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-arrow-right"
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
    <div className="absolute content-stretch flex gap-[10px] items-center justify-start left-[33px] top-[113px] w-[327px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <BackButton onClick={onBack} />
        </div>
      </div>
    </div>
  );
}

function BalanceCard({ userName }: { userName: string }) {
  // Get student data from mock data store
  const student = dataStore.authenticateUser(userName);
  const studentName = student ? student.name : "Isaac Kapambwe";
  const balances = student ? dataStore.getBalancesForStudent(student.id) : [];
  const totalOutstanding = balances.reduce((sum, balance) => sum + balance.outstandingAmount, 0) || 1550;
  
  return (
    <div className="absolute contents left-[71px] top-[511px]">
      {/* Title */}
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] left-[121px] not-italic text-[#003630] text-[18px] text-nowrap top-[511px] tracking-[-0.18px]">
        <p className="leading-[0.5] whitespace-pre">Detailed Balance info</p>
      </div>

      {/* Student Info */}
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] leading-[0] left-[81px] not-italic text-[#003630] text-[15px] text-nowrap top-[534px] tracking-[-0.15px]">
        <p className="leading-[24px] whitespace-pre">{studentName}'s School Fees - Grade 3B</p>
      </div>

      {/* Balance Amount */}
      <div className="absolute flex flex-col font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] h-[21px] justify-center leading-[0] left-[312px] not-italic text-[#003630] text-[10px] top-[641.5px] tracking-[-0.1px] translate-y-[-50%] w-[25px]">
        <p className="leading-[24px]">K{totalOutstanding.toLocaleString()}</p>
      </div>

      {/* Transaction History */}
      <div className="absolute contents left-[71px] top-[571px]">
        {/* Balance Header */}
        <div className="absolute flex flex-col font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] h-[21px] justify-center leading-[0] left-[94px] not-italic text-[#003630] text-[10px] top-[642.5px] tracking-[-0.1px] translate-y-[-50%] w-[82px]">
          <p className="leading-[24px]">Balance</p>
        </div>

        {/* Transaction 1 */}
        <div className="absolute content-stretch flex font-['Inter:Light',_sans-serif] font-light gap-[102px] items-center justify-start leading-[0] left-[94px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap top-[580px] w-[242px]">
          <div className="relative shrink-0">
            <p className="leading-[1.4] text-nowrap whitespace-pre">Grade 3 - Term 1 2025</p>
          </div>
          <div className="relative shrink-0">
            <p className="leading-[1.4] text-nowrap whitespace-pre">K1,500</p>
          </div>
        </div>

        {/* Transaction 2 */}
        <div className="absolute content-stretch flex font-['Inter:Light',_sans-serif] font-light gap-[78px] items-center justify-start leading-[0] left-[94px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap top-[601px] w-[245px]">
          <div className="relative shrink-0">
            <p className="leading-[1.4] text-nowrap whitespace-pre">Airtel Payment on 13/1/2025</p>
          </div>
          <div className="relative shrink-0 text-right">
            <p className="leading-[1.4] text-nowrap whitespace-pre">-K900</p>
          </div>
        </div>

        {/* Transaction 3 */}
        <div className="absolute content-stretch flex font-['Inter:Light',_sans-serif] font-light gap-[79px] items-center justify-start leading-[0] left-[94px] not-italic text-[10px] text-[rgba(45,54,72,0.52)] text-nowrap top-[615px] w-[245px]">
          <div className="relative shrink-0">
            <p className="leading-[1.4] text-nowrap whitespace-pre">Airtel Payment on 27/1/2025</p>
          </div>
          <div className="relative shrink-0">
            <p className="leading-[1.4] text-nowrap whitespace-pre">-K450</p>
          </div>
        </div>

        {/* Number Badges */}
        <div className="absolute left-[79px] rounded-[100px] size-[9px] top-[583px]">
          <div aria-hidden="true" className="absolute border-[0.25px] border-[rgba(45,54,72,0.52)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-[9px]">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[5px] text-[rgba(45,54,72,0.52)] text-center w-full">
                <p className="leading-[1.4]">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[79px] rounded-[100px] size-[9px] top-[604px]">
          <div aria-hidden="true" className="absolute border-[0.25px] border-[rgba(45,54,72,0.52)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-[9px]">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[5px] text-[rgba(45,54,72,0.52)] text-center w-full">
                <p className="leading-[1.4]">2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[79px] rounded-[100px] size-[9px] top-[618px]">
          <div aria-hidden="true" className="absolute border-[0.25px] border-[rgba(45,54,72,0.52)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-[9px]">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[5px] text-[rgba(45,54,72,0.52)] text-center w-full">
                <p className="leading-[1.4]">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute h-0 left-[71px] top-[632px] w-[271px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271 1">
              <line id="Line 28" stroke="var(--stroke-0, #003049)" strokeOpacity="0.5" strokeWidth="0.5" x2="271" y1="0.75" y2="0.75" />
            </svg>
          </div>
        </div>

        {/* Card Border */}
        <div className="absolute h-[82px] left-[71px] rounded-[6px] top-[571px] w-[271px]">
          <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,48,73,0.5)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
      </div>
    </div>
  );
}

function TotalBalanceSection() {
  return (
    <div className="absolute contents left-[53px] top-[193px]">
      <div className="absolute font-['Agrandir:Regular',_sans-serif] leading-[0] left-[103px] not-italic text-[#003630] text-[18px] text-nowrap top-[193px] tracking-[-0.18px]">
        <p className="leading-[0.5] whitespace-pre">Current Balances Owing</p>
      </div>

      {/* Open Invoice Button */}
      <div className="absolute content-stretch flex gap-[15px] items-start justify-start left-[53px] top-[290px] w-[296px]">
        <button 
          onClick={() => alert("Opening invoice document...")}
          className="basis-0 bg-[#003630] grow min-h-px min-w-px relative rounded-[6px] shrink-0 hover:bg-[#004840] active:scale-95 transition-all" 
          data-name="Button"
        >
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
              <div className="css-ysbzhp font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">
                <p className="leading-[24px] whitespace-pre">Open Invoice</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Total Balance Display */}
      <div className="absolute content-stretch flex flex-col items-start justify-start leading-[0] left-[59px] not-italic text-center top-[222px] w-[281px]">
        <div className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] relative shrink-0 text-[#9a9a9a] text-[12px] tracking-[-0.12px] w-full">
          <p className="leading-[24px]">Total Balance</p>
        </div>
        <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] relative shrink-0 text-[#003630] text-[32px] tracking-[-0.32px] w-full">
          <p className="leading-[24px]">ZMW 150.00</p>
        </div>
      </div>
    </div>
  );
}

function ProceedButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center left-[70px] overflow-clip px-[24px] py-[10px] rounded-[6px] top-[711px] w-[267px] hover:bg-[#004840] active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="css-n4hqbu font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px]">
        <p className="leading-[24px] whitespace-pre">Proceed</p>
      </div>
      <div className="h-[24px] relative shrink-0 w-[16px]">
        <div className="absolute left-0 size-[24px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Icon Right">
              <path d={svgPaths.arrowRightIcon} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </svg>
        </div>
      </div>
    </button>
  );
}

function SeparatorLine() {
  return (
    <div className="absolute h-0 left-0 top-[458px] w-[393px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 3">
          <line id="Line 35" stroke="var(--stroke-0, #D9D9D9)" strokeOpacity="0.5" strokeWidth="3" x2="393" y1="1.5" y2="1.5" />
        </svg>
      </div>
    </div>
  );
}

interface BalancesPageProps {
  userName: string;
  onBack: () => void;
  onProceed: () => void;
}

export default function BalancesPage({ userName, onBack, onProceed }: BalancesPageProps) {
  const handleProceed = () => {
    onProceed();
  };

  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 64">
      <Header />
      <BackButtonSection onBack={onBack} />
      <TotalBalanceSection />
      <SeparatorLine />
      <BalanceCard userName={userName} />
      <ProceedButton onClick={handleProceed} />
    </div>
  );
}