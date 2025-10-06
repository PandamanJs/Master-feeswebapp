// SVG path data - inlined for portability
const svgPaths = {
  paperPlaneIcon: "M52.0192 76.8359L72.9965 54.4962M94.4552 40.8627L76.7483 102.148C75.1614 107.64 74.3674 110.388 72.9988 111.298C71.8116 112.088 70.3418 112.22 69.0489 111.649C67.558 110.99 66.348 108.417 63.9341 103.276L52.7188 79.3886C52.3358 78.5727 52.144 78.1665 51.8882 77.813C51.6611 77.4993 51.3991 77.2167 51.1045 76.9749C50.7801 76.7086 50.4051 76.5089 49.6731 76.1192L27.1908 64.1479C22.3631 61.5773 19.949 60.2908 19.3304 58.7031C18.7939 57.3262 18.9162 55.7595 19.658 54.4952C20.5132 53.0374 23.0929 52.1906 28.2518 50.5001L85.7993 31.6431C89.8551 30.3142 91.8838 29.6502 93.2537 30.1858C94.447 30.6523 95.3877 31.6531 95.8257 32.9239C96.3284 34.3821 95.7045 36.5415 94.4578 40.8563L94.4552 40.8627Z"
};

function CommunicationPaperPlane() {
  return (
    <div className="absolute left-[133px] size-[127px] top-[299px]" data-name="Communication / Paper_Plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 127">
        <g id="Communication / Paper_Plane">
          <rect height="123" rx="61.5" stroke="var(--stroke-0, #003049)" strokeWidth="4" width="123" x="2" y="2" />
          <path d={svgPaths.paperPlaneIcon} id="Vector" stroke="var(--stroke-0, #003049)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

interface CompletionPageProps {
  onTimeout?: () => void;
}

export default function CompletionPage({ onTimeout }: CompletionPageProps) {
  // Auto-navigate after 3 seconds to simulate payment processing
  setTimeout(() => {
    if (onTimeout) {
      onTimeout();
    }
  }, 3000);

  return (
    <div className="bg-white relative size-full" data-name="completion">
      <CommunicationPaperPlane />
      <div className="absolute css-8uiw8r font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[72px] leading-[0] left-[196px] not-italic text-[15px] text-black text-center top-[448px] tracking-[-0.15px] translate-x-[-50%] w-[314px]">
        <p className="leading-[24px]">Confirm the Payment by entering your Pin in the pop up that will appear on your phone.</p>
      </div>
    </div>
  );
}