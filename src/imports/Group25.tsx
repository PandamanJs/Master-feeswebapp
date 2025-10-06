import { useState } from "react";
import svgPaths from "./svg-glnidiwwuj";

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
    <div className="absolute box-border content-stretch flex gap-[8px] h-[69px] items-center justify-center px-[12px] py-0 top-0 translate-x-[-50%] w-[393px]" style={{ left: "calc(50% + 32px)" }}>
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
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center top-[209px] translate-x-[-50%]" style={{ left: "calc(50% + 31.5px)" }}>
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
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-transparent border-none outline-none font-['IBM_Plex_Sans:Regular',_sans-serif] text-[14px] text-black placeholder:text-[rgba(45,54,72,0.44)] tracking-[-0.14px]"
          />
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
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-start leading-[0] left-[112px] top-[302px] w-[297px]">
      <div className="font-['IBM_Plex_Sans:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[12px] text-black text-center" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Enter your registered phone number or the Student ID number to proceed.</p>
      </div>
      <Group9 value={inputValue} onChange={onInputChange} />
    </div>
  );
}

function Button({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute bg-[#003630] box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center left-[112px] overflow-clip px-[24px] py-[10px] rounded-[12px] top-[404px] w-[297px] transition-opacity disabled:opacity-50 active:scale-95 transition-transform"
      data-name="Button"
    >
      <div className="css-yrs6wc font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Proceed</p>
      </div>
    </button>
  );
}

function Frame30193() {
  return (
    <div className="absolute content-stretch flex flex-col font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] gap-[3px] items-center justify-start leading-[0] left-[169px] not-italic text-[#bdbdbd] text-[10px] text-center top-[478px] w-[183px]">
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

export default function Group25() {
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
    
    // Here you would typically redirect to the next step or show a success message
    alert(`Processing payment for: ${inputValue}`);
  };

  return (
    <div className="relative size-full">
      <Frame30192 />
      <Frame1 />
      <Frame2 inputValue={inputValue} onInputChange={handleInputChange} />
      <Button onClick={handleProceed} disabled={!inputValue.trim() || isLoading} />
      <Frame30193 />
      
      {/* Background decorative elements */}
      <div className="absolute flex h-[122.203px] items-center justify-center left-[75px] top-[709px] w-[127.493px]">
        <div className="flex-none rotate-[41.343deg]">
          <div className="h-[59.153px] relative w-[117.791px]" data-name="path60">
            <div className="absolute inset-[-29.58%_-14.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 95">
                <path d={svgPaths.p2c7c3b00} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.203px] items-center justify-center left-[15px] top-[782px] w-[127.493px]">
        <div className="flex-none rotate-[41.343deg]">
          <div className="h-[59.153px] relative w-[117.791px]" data-name="path60">
            <div className="absolute inset-[-29.58%_-14.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 95">
                <path d={svgPaths.p2c7c3b00} id="path60" stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.203px] items-center justify-center left-0 top-[574px] w-[127.493px]">
        <div className="flex-none rotate-[41.343deg]">
          <div className="h-[59.153px] relative w-[117.791px]" data-name="path60">
            <div className="absolute inset-[-29.58%_-14.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 95">
                <path d={svgPaths.p2c7c3b00} id="path60" stroke="var(--stroke-0, #F7F7F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[171.6px] items-center justify-center left-[113px] top-[610px] w-[176.89px]">
        <div className="flex-none rotate-[41.343deg]">
          <div className="h-[94.153px] relative w-[152.79px]" data-name="path60 (Stroke)">
            <div className="absolute inset-[-1.59%_-0.98%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 98">
                <path d={svgPaths.p10436d80} id="path60 (Stroke)" stroke="var(--stroke-0, #003630)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.203px] items-center justify-center left-[208px] top-[762px] w-[127.493px]">
        <div className="flex-none rotate-[41.343deg]">
          <div className="h-[59.153px] relative w-[117.791px]" data-name="path60">
            <div className="absolute inset-[-29.58%_-14.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 95">
                <path d={svgPaths.p2c7c3b00} id="path60" stroke="var(--stroke-0, #E0F7D4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="35" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}