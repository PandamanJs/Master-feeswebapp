import svgPaths from "./svg-u2qtsuigda";

function IconArrowRight() {
  return (
    <div className="relative size-[24px]" data-name="icon-arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-arrow-right">
          <path d={svgPaths.p9206b00} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[21px] top-[113px] w-[339px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-4bd2l1 font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2d3648] text-[10px] text-nowrap tracking-[-0.1px] whitespace-pre">
            <p className="mb-0">Talitha Kapambwe</p>
            <p>203437191</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[105px]">
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-4bd2l1 font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2d3648] text-[10px] text-nowrap tracking-[-0.1px] whitespace-pre">
            <p className="mb-0">Isaiah Kapambwe</p>
            <p>C30013</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[105px]">
      <Button1 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full">
      <Frame35 />
      <Frame44 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-[#f5f4f7] box-border content-stretch flex flex-col gap-[26px] items-start left-[21px] pb-[30px] pt-[20px] px-[20px] rounded-[12px] top-[163px] w-[352px]">
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.18px] w-full">
        <p className="leading-[0.5]">Payment History</p>
      </div>
      <Frame52 />
    </div>
  );
}

function IPhone1658() {
  return (
    <div className="absolute bg-white h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="iPhone 16 - 58">
      <Frame3 />
      <Frame53 />
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] left-[180px] not-italic text-[#2d3648] text-[14px] text-center top-[525px] tracking-[-0.14px] translate-x-[-50%] w-[146px]">
        <p className="leading-[15px]">Select a Pupil to View Payment History</p>
      </div>
      <div className="absolute inset-[52.11%_45.8%_41.31%_39.95%]" data-name="Vector">
        <div className="absolute inset-[-1.786%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
            <path d={svgPaths.pe5ecc80} id="Vector" stroke="var(--stroke-0, #A7AAA7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Group35() {
  return (
    <div className="relative size-full">
      <IPhone1658 />
    </div>
  );
}