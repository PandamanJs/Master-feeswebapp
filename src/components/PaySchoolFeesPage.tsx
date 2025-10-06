import { useState } from "react";
import { dataStore } from "../lib/data-store";
import type { Student } from "../lib/data-types";

// SVG path data - inlined for portability
const svgPaths = {
  closeIcon: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
  checkIcon: "M20 6L9 17L4 12"
};

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.closeIcon} fill="var(--fill-0, black)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function BackButtonSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[36px] top-[113px] w-[321px]">
      <CloseButton onClick={onBack} />
    </div>
  );
}

function RadioButton({ isSelected, onChange }: { isSelected: boolean; onChange: () => void }) {
  return (
    <button 
      onClick={onChange}
      className="relative rounded-[3px] shrink-0 size-[15px] cursor-pointer transition-all" 
      data-name="_Radio Base"
    >
      <div className={`absolute left-1/2 rounded-[9999px] size-[15px] top-1/2 translate-x-[-50%] translate-y-[-50%] transition-all ${isSelected ? 'bg-[#95e36c]' : 'bg-white'}`} data-name="Radio">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[9999px] ${isSelected ? 'border-[#95e36c]' : 'border-[#5f75a0]'}`} />
        {isSelected && (
          <svg className="absolute inset-0 size-full" viewBox="0 0 24 24" fill="none">
            <path d={svgPaths.checkIcon} stroke="#003630" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

function StudentInfo({ name, grade, id }: { name: string; grade: string; id: string }) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[104px]">
      <div className="h-[16px] relative shrink-0 w-full">
        <div className="absolute font-['IBM_Plex_Sans_Condensed:SemiBold',_sans-serif] leading-[0] left-0 not-italic text-[12px] text-black text-nowrap top-0 truncate max-w-full">
          <p className="leading-[normal] whitespace-pre truncate">{name}</p>
        </div>
      </div>
      
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[8px] text-black text-center w-[40px]">
          <p className="leading-[normal]">{grade}</p>
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
          <p className="leading-[normal]">{id}</p>
        </div>
      </div>
    </div>
  );
}

function ViewBalancesButton({ balanceCount }: { balanceCount: number }) {
  return (
    <div className="bg-[rgba(0,54,48,0.11)] h-[28px] relative rounded-[5px] shrink-0 w-[80px]">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[normal] left-[40px] not-italic text-[#323432] text-[7px] text-center text-nowrap top-[14px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">{`View/Clear (${balanceCount}) `}</p>
        <p>Balances</p>
      </div>
    </div>
  );
}

function StudentCard({ 
  student, 
  isSelected, 
  onToggle, 
  balanceCount 
}: { 
  student: Student; 
  isSelected: boolean; 
  onToggle: () => void; 
  balanceCount: number;
}) {
  return (
    <div 
      className={`bg-neutral-100 box-border content-stretch flex gap-[9px] h-[77px] items-center overflow-clip p-[20px] rounded-[12px] w-full transition-all cursor-pointer border-2 shadow-md hover:shadow-lg ${isSelected ? 'border-[#95E36C] bg-[#95E36C] shadow-lg' : 'border-transparent hover:bg-gray-200'}`}
      onClick={onToggle}
    >
      <RadioButton isSelected={isSelected} onChange={onToggle} />
      <StudentInfo name={student.name} grade={student.grade} id={student.id} />
      <div className="content-stretch flex gap-[6px] items-start justify-end relative shrink-0 w-[155px]">
        <ViewBalancesButton balanceCount={balanceCount} />
      </div>
    </div>
  );
}

function SelectServicesButton({ onClick, hasSelection }: { onClick: () => void; hasSelection: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={!hasSelection}
      className={`box-border content-stretch flex gap-[8px] h-[55px] items-center justify-center overflow-clip px-[24px] py-[10px] rounded-[12px] w-full transition-all ${hasSelection ? 'bg-[#003630] hover:bg-[#004840] active:scale-95' : 'bg-gray-400 cursor-not-allowed'}`}
      data-name="Button"
    >
      <div className="css-yrs6wc font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.16px]">
        <p className="leading-[24px] whitespace-pre">Select Services</p>
      </div>
    </button>
  );
}

interface PaySchoolFeesPageProps {
  userName: string;
  onBack: () => void;
  onSelectServices: (studentIds: string[]) => void;
}

export default function PaySchoolFeesPage({ userName, onBack, onSelectServices }: PaySchoolFeesPageProps) {
  // Get all students for this guardian/parent
  const students = dataStore.getStudentsByGuardian(userName);
  
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const handleStudentToggle = (studentId: string) => {
    setSelectedStudents(prev => 
      prev.includes(studentId) 
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectServices = () => {
    if (selectedStudents.length > 0) {
      onSelectServices(selectedStudents);
    }
  };

  // Calculate balance count for each student
  const getBalanceCountForStudent = (studentId: string): number => {
    const balances = dataStore.getBalancesForStudent(studentId);
    return balances.filter(b => b.amount > 0).length;
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-screen w-full" data-name="iPhone 16 - 95">
      <BackButtonSection onBack={onBack} />
      
      {/* Title */}
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0.5] left-[36px] not-italic text-[18px] text-black text-nowrap top-[182px] tracking-[-0.18px] whitespace-pre">
        <p className="mb-[14px]">Choose the account(s) you want to</p>
        <p>pay for.</p>
      </div>

      {/* Instructions */}
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[36px] leading-[0] left-[36px] not-italic text-[#a7aaa7] text-[12px] top-[226px] tracking-[-0.12px] w-[321px]">
        <p className="leading-[1.5]">Tap the boxes to select the children you want to make a payment for.</p>
      </div>

      {/* Student Cards - Dynamic List */}
      <div className="absolute left-[26px] top-[294px] w-[333px] flex flex-col gap-[16px]">
        {students.length === 0 ? (
          <div className="bg-neutral-100 box-border content-stretch flex items-center justify-center p-[20px] rounded-[12px] w-full h-[100px]">
            <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] text-[14px] text-gray-500 text-center">
              No students found for this account
            </div>
          </div>
        ) : (
          students.map((student) => {
            const balanceCount = getBalanceCountForStudent(student.id);
            return (
              <StudentCard
                key={student.id}
                student={student}
                isSelected={selectedStudents.includes(student.id)}
                onToggle={() => handleStudentToggle(student.id)}
                balanceCount={balanceCount}
              />
            );
          })
        )}
      </div>

      {/* Select Services Button */}
      <div className="absolute left-[36px] top-[762px] w-[321px]">
        <SelectServicesButton 
          onClick={handleSelectServices}
          hasSelection={selectedStudents.length > 0}
        />
      </div>
    </div>
  );
}
