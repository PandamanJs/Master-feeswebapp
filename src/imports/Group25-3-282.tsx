import { useState } from "react";
import svgPaths from "./svg-rel3yctftx";

function Group15() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 15">
          <path d={svgPaths.p30d17b00} fill="var(--fill-0, #003630)" id="rect84" />
          <path d={svgPaths.p13dd2b00} id="path60" stroke="var(--stroke-0, #95E36C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame30192() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[66px] items-center justify-center left-1/2 px-[12px] py-0 top-0 translate-x-[-50%] w-[393px]">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Group15 />
      <div className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">master-fees</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[78px] items-center justify-center top-[201px] translate-x-[-50%]" style={{ left: "calc(50% - 0.5px)" }}>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[0px] text-black text-center w-[286px]">
        <p className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] mb-0 text-[12px]">Pay School fees for</p>
        <p className="font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] text-[24px]">Twalumbu Education Centre</p>
      </div>
    </div>
  );
}

function TextInput({ value, onChange, placeholder }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#003049] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-start p-[12px] relative size-full">
          {value ? (
            <input
              type="text"
              value={value}
              onChange={onChange}
              className="w-full bg-transparent border-none outline-none font-['IBM_Plex_Sans:Regular',_sans-serif] text-[14px] text-black tracking-[-0.14px]"
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full bg-transparent border-none outline-none css-s62rxt flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic text-[14px] text-[rgba(45,54,72,0.44)] tracking-[-0.14px] placeholder:leading-[1.5]"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TextAreaBase({ value, onChange }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="_Text Area Base">
      <TextInput value={value} onChange={onChange} placeholder="e.g. 09xx-xxx-xxx" />
    </div>
  );
}

function TextArea({ value, onChange }) {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start justify-start ml-0 mt-0 relative w-[297px]" data-name="Text Area">
      <TextAreaBase value={value} onChange={onChange} />
    </div>
  );
}

function Group9({ value, onChange }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <TextArea value={value} onChange={onChange} />
    </div>
  );
}

function Frame2({ inputValue, onInputChange }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[91px] items-center justify-start leading-[0] left-[48px] top-[291px] w-[297px]">
      <div className="font-['IBM_Plex_Sans:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[12px] text-black text-center" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Enter your registered phone number or the Student ID number to proceed.</p>
      </div>
      <Group9 value={inputValue} onChange={onInputChange} />
    </div>
  );
}

function Button({ onClick, disabled, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[48px] overflow-clip px-[24px] py-[10px] rounded-[12px] top-[389px] w-[297px] transition-opacity disabled:opacity-50 active:scale-95 transition-transform"
      data-name="Button"
    >
      <div className="css-yrs6wc font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">{isLoading ? "Processing..." : "Proceed"}</p>
      </div>
    </button>
  );
}

function Frame30193() {
  return (
    <div className="absolute content-stretch flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] gap-[3px] h-[31px] items-center justify-start leading-[0] left-[105px] not-italic text-[#bdbdbd] text-[10px] text-center top-[461px] w-[183px]">
      <div className="relative shrink-0 w-full">
        <p className="leading-[normal] text-[#bdbdbd] whitespace-pre-wrap">
          <span>{`view the `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#95E36C] transition-colors">terms</span>
          <span>{` and `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#95E36C] transition-colors">conditions</span>
          <span>{`  of service`}</span>
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[normal]">All rights reserved ©</p>
      </div>
    </div>
  );
}

function IPhone1646({ inputValue, onInputChange, onProceed, isLoading }) {
  return (
    <div className="absolute bg-white h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="iPhone 16 - 46">
      <Frame30192 />
      <Frame1 />
      <Frame2 inputValue={inputValue} onInputChange={onInputChange} />
      <Button onClick={onProceed} disabled={!inputValue.trim()} isLoading={isLoading} />
      <Frame30193 />
      <div className="absolute flex h-[117.757px] items-center justify-center left-[11px] top-[683.17px] w-[127.501px]">
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[57.948px] relative w-[115.938px]" data-name="path60">
            <div className="absolute inset-[-30.2%_-15.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 94">
                <path d={svgPaths.p3d2f8c00} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[165.354px] items-center justify-center left-[49px] top-[587.77px] w-[176.895px]">
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[92.235px] relative w-[150.386px]" data-name="path60 (Stroke)">
            <div className="absolute inset-[-1.63%_-1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 96">
                <path d={svgPaths.p253f0a00} id="path60 (Stroke)" stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[117.757px] items-center justify-center left-[144px] top-[734.24px] w-[127.501px]">
        <div className="flex-none rotate-[40.291deg] skew-x-[357.893deg]">
          <div className="h-[57.948px] relative w-[115.938px]" data-name="path60">
            <div className="absolute inset-[-30.2%_-15.09%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 94">
                <path d={svgPaths.p3d2f8c00} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group25({ onProceed }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleProceed = async () => {
    if (!inputValue.trim()) return;
    
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    // Navigate to services page
    onProceed(inputValue);
  };

  return (
    <div className="relative size-full">
      <IPhone1646 
        inputValue={inputValue} 
        onInputChange={handleInputChange}
        onProceed={handleProceed}
        isLoading={isLoading}
      />
    </div>
  );
}