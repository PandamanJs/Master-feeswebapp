import svgPaths from "./svg-phl0vxy71l";

function Button() {
  return (
    <div className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[55px] items-center justify-center left-[36px] overflow-clip px-[24px] py-[10px] rounded-[12px] top-[762px] w-[321px]" data-name="Button">
      <div className="css-yrs6wc font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Select Services</p>
      </div>
    </div>
  );
}

function IconX() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.p2f9c6900} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[36px] top-[113px] w-[321px]">
      <IconX />
    </div>
  );
}

function Radio() {
  return (
    <div className="absolute left-1/2 rounded-[9999px] size-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#5f75a0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function RadioBase() {
  return (
    <div className="relative rounded-[3px] shrink-0 size-[15px]" data-name="_Radio Base">
      <Radio />
    </div>
  );
}

function Frame30148() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94px]">
      <div className="absolute font-['IBM_Plex_Sans_Condensed:SemiBold',_sans-serif] leading-[0] left-0 not-italic text-[12px] text-black text-nowrap top-0">
        <p className="leading-[normal] whitespace-pre">Talitha Kapambwe</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8px] text-black text-center w-[40px]">
        <p className="leading-[normal]">Grade 3A</p>
      </div>
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[8px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
                <line id="Line 49" stroke="var(--stroke-0, black)" strokeWidth="0.5" x2="8" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[8px] text-black text-center">
        <p className="leading-[normal]">C20012</p>
      </div>
    </div>
  );
}

function Frame30151() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[104px]">
      <Frame30148 />
      <Frame21 />
    </div>
  );
}

function Frame30153() {
  return (
    <div className="bg-[rgba(0,54,48,0.11)] h-[28px] relative rounded-[5px] shrink-0 w-[80px]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[normal] left-[40px] not-italic text-[#323432] text-[7px] text-center text-nowrap top-[14px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">{`View/Clear (0) `}</p>
        <p>Balances</p>
      </div>
    </div>
  );
}

function Frame30155() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-end relative shrink-0 w-[155px]">
      <Frame30153 />
    </div>
  );
}

function Frame30182() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex gap-[9px] h-[77px] items-center left-[26px] overflow-clip p-[20px] rounded-[12px] top-[294px] w-[333px]">
      <RadioBase />
      <Frame30151 />
      <Frame30155 />
    </div>
  );
}

export default function IPhone1695() {
  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="iPhone 16 - 95">
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[36px] leading-[0] left-[36px] not-italic text-[#a7aaa7] text-[12px] top-[226px] tracking-[-0.12px] w-[321px]">
        <p className="leading-[1.5]">Tap the boxes to select the children you want to make a payment for.</p>
      </div>
      <Button />
      <Frame3 />
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0.5] left-[36px] not-italic text-[18px] text-black text-nowrap top-[182px] tracking-[-0.18px] whitespace-pre">
        <p className="mb-[14px]">Choose the account(s) you want to</p>
        <p>pay for.</p>
      </div>
      <Frame30182 />
    </div>
  );
}