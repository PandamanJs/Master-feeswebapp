// SVG path data - inlined for portability
const svgPaths = {
  arrowRightIcon: "M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z",
  circleCheckIcon: "M91.875 61.25L67.375 85.75L55.125 73.5M73.5 128.625C43.0553 128.625 18.375 103.945 18.375 73.5C18.375 43.0553 43.0553 18.375 73.5 18.375C103.945 18.375 128.625 43.0553 128.625 73.5C128.625 103.945 103.945 128.625 73.5 128.625Z"
};

function WarningCircleCheck() {
  return (
    <div className="absolute left-[127px] size-[147px] top-[279px]" data-name="Warning / Circle_Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 147">
        <g id="Warning / Circle_Check">
          <path d={svgPaths.circleCheckIcon} id="Vector" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Right">
          <path d={svgPaths.arrowRightIcon} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconRightWrapper() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]" data-name="Icon Right Wrapper">
      <IconRight />
    </div>
  );
}

function ViewReceiptsButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[59px] items-center justify-center left-[46px] overflow-clip px-[24px] py-[10px] rounded-[6px] top-[484px] w-[308px] hover:bg-[#004840] active:scale-95 transition-all"
      data-name="Button"
    >
      <div className="css-n4hqbu font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px]">
        <p className="leading-[24px] whitespace-pre">View Receipts</p>
      </div>
      <IconRightWrapper />
    </button>
  );
}

interface ViewReceiptPageProps {
  onViewReceipts: () => void;
}

export default function ViewReceiptPage({ onViewReceipts }: ViewReceiptPageProps) {
  return (
    <div className="bg-white relative size-full" data-name="view receipt">
      <div className="absolute css-7l6wpt font-['Inter:Regular',_sans-serif] font-normal h-[23px] leading-[0] left-[200px] not-italic text-[15px] text-black text-center top-[448px] tracking-[-0.15px] translate-x-[-50%] w-[314px]">
        <p className="leading-[24px]">Payment Successfully made</p>
      </div>
      <WarningCircleCheck />
      <ViewReceiptsButton onClick={onViewReceipts} />
    </div>
  );
}