import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "../imports/svg-j863g0193q";
import { dataStore } from "../lib/data-store";
import type { Student } from "../lib/data-types";

function IconX({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon-x"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-x">
          <path d={svgPaths.p2f9c6900} fill="var(--fill-0, #2D3648)" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function Frame4({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[43px] top-[101px] w-[316px]">
      <IconX onClick={onClose} />
    </div>
  );
}

function Frame30162({ total }: { total: number }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#003630] w-[101px]">
      <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] h-[19px] relative shrink-0 text-[17px] tracking-[-0.17px] w-full">
        <p className="leading-[24px]">ZMW {total}</p>
      </div>
      <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] h-[10px] relative shrink-0 text-[8px] tracking-[-0.08px] w-full">
        <p className="leading-[12px]">Grand total</p>
      </div>
    </div>
  );
}

function Button({ onClick, total }: { onClick: () => void; total: number }) {
  const isDisabled = total === 0;
  
  return (
    <button 
      onClick={onClick}
      disabled={isDisabled}
      className={`basis-0 grow h-[46px] min-h-px min-w-px relative rounded-[8px] shrink-0 transition-all ${
        isDisabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-[#003630] hover:bg-[#004840] active:scale-95'
      }`}
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[46px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="css-ysbzhp font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">
            <p className="leading-[24px] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame30163({ onNext, total }: { onNext: () => void; total: number }) {
  return (
    <div className="absolute bg-white rounded-[12px] top-[759px] translate-x-[-50%] w-[322px]" style={{ left: "calc(50% + 0.5px)" }}>
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] relative w-[322px]">
        <Frame30162 total={total} />
        <Button onClick={onNext} total={total} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#afbacf] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame30161({ student, total }: { student: Student | undefined; total: number }) {
  if (!student) {
    return (
      <div className="absolute content-stretch flex items-start top-[123px] translate-x-[-50%] w-[283px]" style={{ left: "calc(50% - 0.5px)" }}>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207px]">
          <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-black w-[207px]">
            <p className="leading-[1.4]">No student selected</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[51px] items-center justify-end relative shrink-0 w-[80px]">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-black w-[56px]">
            <p className="leading-[1.4]">ZMW {total}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute content-stretch flex items-start top-[123px] translate-x-[-50%] w-[283px]" style={{ left: "calc(50% - 0.5px)" }}>
      {/* Student Info */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207px]">
        <div className="content-stretch flex gap-[51px] items-end relative shrink-0 w-full">
          <div className="font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[15px] text-black w-[207px]">
            <p className="leading-[1.4]">{student.name} - {student.id}</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[51px] items-end relative shrink-0">
          <div className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#2d3c48] text-[10px] w-[197px]">
            <p className="leading-[1.4]">{student.grade} - Twalumbu Education Centre</p>
          </div>
        </div>
      </div>
      
      {/* Total */}
      <div className="content-stretch flex gap-[51px] items-center justify-end relative shrink-0 w-[80px]">
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-black w-[56px]">
          <p className="leading-[1.4]">ZMW {total}</p>
        </div>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#95e36c] box-border content-stretch flex gap-[8px] h-[42px] items-center justify-center overflow-clip px-[24px] py-[10px] rounded-[10px] top-[432px] translate-x-[-50%] w-[283px] hover:bg-[#85d35c] active:scale-95 transition-all" 
      data-name="Button" 
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <div className="css-a08x9o font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#003630] text-[12px] text-nowrap tracking-[-0.12px]">
        <p className="leading-[24px] whitespace-pre">+ Add School Fees</p>
      </div>
    </button>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute box-border content-stretch flex gap-[8px] h-[38px] items-center justify-center left-1/2 overflow-clip px-[24px] py-[10px] rounded-[6px] top-[478px] translate-x-[-50%] w-[276px] hover:bg-gray-50 active:scale-95 transition-all" 
      data-name="Button"
    >
      <div className="css-pegtp6 font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#2d3c48] text-[12px] text-nowrap tracking-[-0.12px]">
        <p className="leading-[24px] whitespace-pre">Add Other Services</p>
      </div>
    </button>
  );
}

function Frame30175({ service, onAddOtherServices }: { 
  service?: { grade: string; year: string; term: string; amount: number };
  onAddOtherServices: () => void;
}) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-1/2 overflow-clip rounded-[15px] top-[175px] translate-x-[-50%] w-[278px] p-5" style={{ minHeight: '241px' }}>
      {service ? (
        <>
          {/* Service Item */}
          <div className="w-full pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[13px] text-black leading-[1.4]">
                {service.grade.split(' - ')[0]} - {service.term} {service.year}
              </div>
              <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] text-[13px] text-black">
                K{service.amount.toLocaleString()}
              </div>
            </div>
            <div className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] text-[10px] text-[#7a929e] leading-[1.4]">
              Invoice for {service.term}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] text-[11px] text-[#a7aaa7] text-center">
            No services added yet
          </div>
        </div>
      )}
    </div>
  );
}

function Frame30170({ onAddSchoolFees, onAddOtherServices, total, students, activeStudentId, onStudentSelect, activeService }: { 
  onAddSchoolFees: () => void; 
  onAddOtherServices: () => void; 
  total: number;
  students: Student[];
  activeStudentId: string;
  onStudentSelect: (id: string) => void;
  activeService?: { grade: string; year: string; term: string; amount: number };
}) {
  const activeStudent = students.find(s => s.id === activeStudentId);
  
  return (
    <div className="absolute bg-[#f5f4f7] h-[524px] overflow-hidden rounded-[15px] top-[225px] translate-x-[-50%] w-[322px]" style={{ left: "calc(50% - 0.5px)" }}>
      <Frame30161 student={activeStudent} total={total} />
      <Button1 onClick={onAddSchoolFees} />
      <Button2 onClick={onAddOtherServices} />
      
      {/* Dynamic Student Tabs - Scrollable */}
      <div 
        className="absolute left-[14px] top-[25px] w-[294px] overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ 
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
          overscrollBehavior: 'contain'
        }}
      >
        <div className="flex gap-[12px] items-start pb-2 flex-nowrap" style={{ width: 'max-content' }}>
          {students.map((student) => (
            <div key={student.id} className="flex-shrink-0 relative w-[100px]">
              <button
                onClick={() => onStudentSelect(student.id)}
                className="relative rounded-[10px] hover:bg-gray-100 active:scale-95 transition-all px-[16px] py-[8px] w-full cursor-pointer"
              >
                <div className={`leading-[15px] not-italic text-[10px] text-nowrap tracking-[-0.1px] whitespace-pre text-center ${
                  activeStudentId === student.id 
                    ? "font-['IBM_Plex_Sans_Devanagari:Bold',_sans-serif] text-[#003630]" 
                    : "font-['IBM_Plex_Sans_Devanagari:Light',_sans-serif] text-black"
                }`}>
                  <p className="mb-0">{student.name}</p>
                  <p>{student.id}</p>
                </div>
              </button>
              {activeStudentId === student.id && (
                <div className="absolute bg-[#95e36c] h-[3px] left-[9px] bottom-0 right-[9px]" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <Frame30175 service={activeService} onAddOtherServices={onAddOtherServices} />
    </div>
  );
}

interface ServicesSelectPageProps {
  userName: string;
  selectedStudentIds: string[];
  onClose: () => void;
  onAddSchoolFees: () => void;
  onAddOtherServices: () => void;
  onNext: () => void;
  total: number;
  setTotal: (total: number) => void;
  setStudentServices: (services: Array<{ studentName: string; amount: number }>) => void;
  setDetailedStudentServices: (services: Array<{ studentName: string; studentId: string; feeTitle: string; term: string; amount: number }>) => void;
}

export default function ServicesSelectPage({ userName, selectedStudentIds, onClose, onAddSchoolFees, onAddOtherServices, onNext, total, setTotal, setStudentServices, setDetailedStudentServices }: ServicesSelectPageProps) {
  // Get selected students from data store
  const selectedStudents = selectedStudentIds.map(id => dataStore.getStudentById(id)).filter(Boolean) as Student[];
  
  
  // Fallback: If no students selected, get all students for this user
  const fallbackStudents = selectedStudents.length === 0 ? dataStore.getStudentsByGuardian(userName) : selectedStudents;
  
  const [showSchoolFeesModal, setShowSchoolFeesModal] = useState(false);
  const [activeStudentId, setActiveStudentId] = useState(fallbackStudents[0]?.id || '');
  const [selectedGrade, setSelectedGrade] = useState("Grade 3 - K1,500 (Per term)");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedTerm, setSelectedTerm] = useState("Term 1");
  // Store only one service per student (replaces on update)
  const [addedServices, setAddedServices] = useState<Record<string, { grade: string; year: string; term: string; amount: number }>>({});

  // Calculate total for active student
  const calculateStudentTotal = (studentId: string): number => {
    const service = addedServices[studentId];
    return service ? service.amount : 0;
  };

  // Calculate grand total for all students
  const calculateGrandTotal = (): number => {
    const services = Object.values(addedServices) as { grade: string; year: string; term: string; amount: number }[];
    return services.reduce((sum, service) => sum + service.amount, 0);
  };

  // Update totals
  const studentTotal = calculateStudentTotal(activeStudentId);
  const grandTotal = calculateGrandTotal();

  /**
   * Sync service data with parent component
   * Updates total and builds service breakdowns for checkout and partial payment
   */
  useEffect(() => {
    setTotal(grandTotal);
    
    // Build simple student services breakdown for checkout page
    const servicesBreakdown = fallbackStudents
      .map(student => {
        const service = addedServices[student.id];
        return service ? { studentName: student.name, amount: service.amount } : null;
      })
      .filter(Boolean) as Array<{ studentName: string; amount: number }>;
    
    // Build detailed services breakdown for partial payment page
    const detailedBreakdown = fallbackStudents
      .map(student => {
        const service = addedServices[student.id];
        if (!service) return null;
        
        return {
          studentName: student.name,
          studentId: student.id,
          feeTitle: `School Fees - ${service.grade.split(' - ')[0]}`,
          term: `${service.term} ${service.year}`,
          amount: service.amount
        };
      })
      .filter(Boolean) as Array<{ studentName: string; studentId: string; feeTitle: string; term: string; amount: number }>;
    
    setStudentServices(servicesBreakdown);
    setDetailedStudentServices(detailedBreakdown);
  }, [grandTotal, setTotal, addedServices, fallbackStudents, setStudentServices, setDetailedStudentServices]);

  const handleAddSchoolFees = () => {
    setShowSchoolFeesModal(true);
  };

  const handleDone = () => {
    // Extract price from selected grade (e.g., "Grade 3 - K1,500 (Per term)" -> 1500)
    const priceMatch = selectedGrade.match(/K([\d,]+)/);
    const amount = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 0;
    
    // Replace service for the active student (not append)
    setAddedServices(prev => ({
      ...prev,
      [activeStudentId]: {
        grade: selectedGrade,
        year: selectedYear,
        term: selectedTerm,
        amount: amount
      }
    }));
    
    setShowSchoolFeesModal(false);
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="services">
      <Frame4 onClose={onClose} />
      <Frame30163 onNext={onNext} total={total} />
      <div className="absolute css-vjqj40 font-['IBM_Plex_Sans_Devanagari:Medium',_sans-serif] leading-[0] left-[48px] not-italic text-[18px] text-black top-[146px] tracking-[-0.18px] w-[311px]">
        <p className="leading-[24px]">Add Services to pay for</p>
      </div>
      <div className="absolute font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] h-[36px] leading-[0] left-[48px] not-italic text-[#a7aaa7] text-[12px] top-[170px] tracking-[-0.12px] w-[297px]">
        <p className="leading-[1.5]">{`Select the services that you would like to pay for and proceed to checkout to make payment. `}</p>
      </div>
      <Frame30170 
        onAddSchoolFees={handleAddSchoolFees} 
        onAddOtherServices={onAddOtherServices} 
        total={studentTotal}
        students={fallbackStudents}
        activeStudentId={activeStudentId}
        onStudentSelect={setActiveStudentId}
        activeService={addedServices[activeStudentId]}
      />
      
      {/* Only show instruction text when no services added */}
      {!addedServices[activeStudentId] && (
        <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic text-[#a7aaa7] text-[10px] text-center top-[511px] tracking-[-0.1px] translate-x-[-50%] w-[146px]" style={{ left: "calc(25% + 102.75px)" }}>
          <p className="leading-[15px]">Select a Pupil to View Payment History</p>
        </div>
      )}

      {/* School Fees Modal */}
      <AnimatePresence>
        {showSchoolFeesModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSchoolFeesModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] p-8 w-[340px] z-50 shadow-2xl flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] text-[18px] text-black mb-6 text-center w-full">
                + Add School Fees
              </div>

              {/* Select Grade */}
              <div className="mb-5 w-full">
                <label className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[13px] text-[#2d3648] mb-2 block text-left">
                  Select Grade
                </label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-[10px] px-4 py-3.5 font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[15px] text-black focus:outline-none focus:border-[#95e36c] appearance-none bg-white cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option>Grade 1 - K1,300 (Per term)</option>
                  <option>Grade 2 - K1,400 (Per term)</option>
                  <option>Grade 3 - K1,500 (Per term)</option>
                  <option>Grade 4 - K1,600 (Per term)</option>
                  <option>Grade 5 - K1,700 (Per term)</option>
                  <option>Grade 6 - K1,800 (Per term)</option>
                  <option>Grade 7 - K1,900 (Per term)</option>
                </select>
              </div>

              {/* Enter Year of Service */}
              <div className="mb-5 w-full">
                <label className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[13px] text-[#2d3648] mb-2 block text-left">
                  Enter Year of Service
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-[10px] px-4 py-3.5 font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[15px] text-black focus:outline-none focus:border-[#95e36c] appearance-none bg-white cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option>2025</option>
                  <option>2024</option>
                  <option>2026</option>
                </select>
              </div>

              {/* Select Term */}
              <div className="mb-7 w-full">
                <label className="font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[13px] text-[#2d3648] mb-2 block text-left">
                  Select the Term (You can choose to pay for more than one term)
                </label>
                <select
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-[10px] px-4 py-3.5 font-['IBM_Plex_Sans_Devanagari:Regular',_sans-serif] text-[15px] text-black focus:outline-none focus:border-[#95e36c] appearance-none bg-white cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  <option>Term 1</option>
                  <option>Term 2</option>
                  <option>Term 3</option>
                </select>
              </div>

              {/* Done Button */}
              <button
                onClick={handleDone}
                className="w-full bg-[#95e36c] hover:bg-[#7bc954] active:scale-95 transition-all rounded-[10px] py-4 font-['IBM_Plex_Sans_Devanagari:SemiBold',_sans-serif] text-[16px] text-[#003630]"
              >
                Done
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}