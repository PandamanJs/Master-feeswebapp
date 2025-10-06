import svgPaths from "./svg-lbe3shxndc";

function WarningCircleCheck() {
  return (
    <div className="absolute left-[127px] size-[147px] top-[279px]" data-name="Warning / Circle_Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 147">
        <g id="Warning / Circle_Check">
          <path d={svgPaths.pfd993f0} id="Vector" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
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
          <path d={svgPaths.p9206b00} fill="var(--fill-0, white)" id="Shape" />
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

function Button() {
  return (
    <div className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[59px] items-center justify-center left-[46px] overflow-clip px-[24px] py-[10px] rounded-[6px] top-[484px] w-[308px]" data-name="Button">
      <div className="css-n4hqbu font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.18px]">
        <p className="leading-[24px] whitespace-pre">View Receipts</p>
      </div>
      <IconRightWrapper />
    </div>
  );
}

export default function ViewReceipt() {
  return (
    <div className="bg-white relative size-full" data-name="view receipt">
      <div className="absolute css-7l6wpt font-['Inter:Regular',_sans-serif] font-normal h-[23px] leading-[0] left-[200px] not-italic text-[15px] text-black text-center top-[448px] tracking-[-0.15px] translate-x-[-50%] w-[314px]">
        <p className="leading-[24px]">Payment Successfully made</p>
      </div>
      <WarningCircleCheck />
      <Button />
    </div>
  );
}