import svgPaths from "./svg-kps2hw5dun";

function CommunicationPaperPlane() {
  return (
    <div className="absolute left-[133px] size-[127px] top-[299px]" data-name="Communication / Paper_Plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 127">
        <g id="Communication / Paper_Plane">
          <rect height="123" rx="61.5" stroke="var(--stroke-0, #003049)" strokeWidth="4" width="123" x="2" y="2" />
          <path d={svgPaths.p3d383e80} id="Vector" stroke="var(--stroke-0, #003049)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

export default function Completion() {
  return (
    <div className="bg-white relative size-full" data-name="completion">
      <CommunicationPaperPlane />
      <div className="absolute css-8uiw8r font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[72px] leading-[0] left-[196px] not-italic text-[15px] text-black text-center top-[448px] tracking-[-0.15px] translate-x-[-50%] w-[314px]">
        <p className="leading-[24px]">Confirm the Payment by entering your Pin in the pop up that will appear on your phone.</p>
      </div>
    </div>
  );
}