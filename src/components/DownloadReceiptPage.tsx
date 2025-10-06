// SVG path data - inlined for portability
const svgPaths = {
  circleCheckIcon: "M62.5 41.6667L45.8333 58.3333L37.5 50M50 87.5C29.2893 87.5 12.5 70.7107 12.5 50C12.5 29.2893 29.2893 12.5 50 12.5C70.7107 12.5 87.5 29.2893 87.5 50C87.5 70.7107 70.7107 87.5 50 87.5Z"
};

function WarningCircleCheck() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="Warning / Circle_Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Warning / Circle_Check">
          <path d={svgPaths.circleCheckIcon} id="Vector" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

function Frame1707478895({ total }: { total: number }) {
  return (
    <div className="bg-[#003630] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pb-[36px] pt-[24px] px-[24px] relative w-full">
          <WarningCircleCheck />
          <div className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[16px] text-white text-nowrap tracking-[-0.16px]">
            <p className="leading-[24px] whitespace-pre">Payment Success</p>
          </div>
          <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[32px] text-white text-nowrap tracking-[-0.32px]">
            <p className="leading-[24px] whitespace-pre">K{total.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1707478897({ refNumber }: { refNumber: string }) {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Ref Number</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">{refNumber}</p>
      </div>
    </div>
  );
}

function Frame1707478898() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Payment Status</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Success</p>
      </div>
    </div>
  );
}

function Frame1707478899() {
  // Generate current date and time
  const now = new Date();
  const dateTime = now.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }) + ' ' + now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">{`Date & Time`}</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">{dateTime}</p>
      </div>
    </div>
  );
}

function Frame1707478900() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Schedule ID</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">#02415</p>
      </div>
    </div>
  );
}

function Frame1707478896({ refNumber }: { refNumber: string }) {
  return (
    <div className="bg-[#d4f4dd] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[24px] relative w-full">
          <div className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[0] not-italic relative shrink-0 text-[#003630] text-[16px] text-nowrap tracking-[-0.16px]">
            <p className="leading-[24px] whitespace-pre">Payment Details</p>
          </div>
          <Frame1707478897 refNumber={refNumber} />
          <Frame1707478898 />
          <Frame1707478899 />
          <Frame1707478900 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#dc3b3b] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[20px]">
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white w-full">
        <p className="leading-[1.4]">3</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#003630] h-[59px] relative rounded-[12px] shrink-0 w-full hover:bg-[#004840] active:scale-95 transition-all"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[59px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-h47lh3 font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.2px]">
            <p className="leading-[24px] whitespace-pre">Download Receipts</p>
          </div>
          <Frame43 />
        </div>
      </div>
    </button>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Button">
      <button
        onClick={onClick}
        className="flex flex-row items-center justify-center overflow-clip relative size-full hover:bg-gray-50 active:scale-95 transition-all"
      >
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative size-full">
          <div className="css-mi4qse font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
            <p className="leading-[24px] whitespace-pre">Go to homepage</p>
          </div>
        </div>
      </button>
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame32({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div className="content-stretch flex gap-[15px] h-[60px] items-start relative shrink-0 w-full">
      <Button1 onClick={onGoHome} />
    </div>
  );
}

function Frame1707478901({ onDownload, onGoHome }: { onDownload: () => void; onGoHome: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Button onClick={onDownload} />
      <Frame32 onGoHome={onGoHome} />
    </div>
  );
}

function Frame1707478902({ total, refNumber, onDownload, onGoHome }: { total: number; refNumber: string; onDownload: () => void; onGoHome: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center translate-x-[-50%] w-[368px]" style={{ top: "180px", left: "calc(50% + 0.5px)" }}>
      <Frame1707478895 total={total} />
      <Frame1707478896 refNumber={refNumber} />
      <Frame1707478901 onDownload={onDownload} onGoHome={onGoHome} />
    </div>
  );
}

interface DownloadReceiptPageProps {
  total: number;
  onDownload: () => void;
  onGoHome: () => void;
}

export default function DownloadReceiptPage({ total, onDownload, onGoHome }: DownloadReceiptPageProps) {
  // Generate unique reference number based on timestamp
  const refNumber = `REF${Date.now().toString().slice(-10)}`;
  
  const handleDownload = () => {
    // Simulate download
    alert("Downloading 3 receipts...\n- Payment Receipt\n- School Fees Receipt\n- Transport Fees Receipt");
    onDownload();
  };

  return (
    <div className="bg-[#f5f4f7] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="download receipt">
      <Frame1707478902 total={total} refNumber={refNumber} onDownload={handleDownload} onGoHome={onGoHome} />
    </div>
  );
}