function List() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
            <p className="leading-[22px]">View payment Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
            <p className="leading-[22px]">View payment Receipt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative w-full">
          <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#23272e] text-[12px]">
            <p className="leading-[22px]">Download Receipt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame47() {
  return (
    <div className="bg-white relative rounded-[10px] size-full">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(139,144,154,0.37)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <List />
          <List1 />
          <List2 />
        </div>
      </div>
    </div>
  );
}