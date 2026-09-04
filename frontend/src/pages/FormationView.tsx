// Purpose: Renders the organizational chart (Formation) of ministering companionships and their assigned families.
// This view visually maps companions to families using a tree diagram layout.

import { useState } from 'react';
import { mockPartnerships, type Partnership, type Companion, type Family } from '../data/mockPartnerships';

export function FormationView() {
  const [activeZone, setActiveZone] = useState<string>('Zona Norte');
  
  // Get all unique zones
  const zones = Array.from(new Set(mockPartnerships.map(p => p.zone)));

  // Filter partnerships by active zone
  const zonePartnerships = mockPartnerships.filter(p => p.zone === activeZone);

  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full bg-[#F3F2EB] w-full max-w-md mx-auto pt-2 pb-24">
      
      {/* Custom Header Area resembling the mockup */}
      <div className="px-6 mb-8 mt-2">
        <p className="text-[10px] font-bold text-[#8B1C4B] uppercase tracking-widest mb-1">
          FORMACIÓN • {activeZone}
        </p>
        <h2 className="text-[28px] leading-tight font-serif font-bold text-[#002B49]">
          Alineación de cuidado
        </h2>
      </div>
      
      {/* Zone Selector Pills */}
      <div className="flex overflow-x-auto gap-2 px-6 mb-10 pb-2 scrollbar-hide">
        {zones.map(z => (
          <button
            key={z}
            onClick={() => setActiveZone(z)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
              activeZone === z 
                ? 'bg-[#8B1C4B] text-white shadow-md' 
                : 'bg-white border border-[#E5E5E0] text-[#595959] hover:bg-[#EAE9E0]'
            }`}
          >
            {z.replace('Zona ', '')}
          </button>
        ))}
      </div>

      {/* Formation Tree Content */}
      <div className="flex-1 w-full overflow-y-auto px-4">
        <div className="flex flex-col gap-12 w-full pb-10">
          {zonePartnerships.map(p => (
            <PartnershipNode key={p.id} partnership={p} />
          ))}
          {zonePartnerships.length === 0 && (
            <p className="text-center text-[#595959] text-sm">No hay compañerismos en esta zona.</p>
          )}
        </div>
      </div>

      {/* Ver cuadro ampliado Button */}
      <div className="px-6 mb-6">
        <button className="w-full bg-[#EAE9E0] text-[#002B49] font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#E5E5E0] transition-colors shadow-sm text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          Ver cuadro ampliado
        </button>
      </div>
    </div>
  );
}

// Component to render a single partnership tree
function PartnershipNode({ partnership }: { partnership: Partnership }) {
  
  // Helper to get initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Companions Row */}
      <div className="flex items-center justify-center gap-8 relative z-10 bg-[#F3F2EB]">
        {partnership.companions.map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-[72px] h-[72px] rounded-full border-2 flex items-center justify-center text-xl font-bold mb-1 shadow-sm ${
              i % 2 === 0 
                ? 'bg-[#E6EDF5] text-[#002B49] border-[#002B49]/20' 
                : 'bg-[#F8E9F0] text-[#8B1C4B] border-[#8B1C4B]/20'
            }`}>
              {getInitials(c.name)}
            </div>
            <span className="text-sm font-bold text-[#002B49]">{c.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>
      
      {/* Vertical Connector from Companions */}
      <div className="w-[1px] h-8 bg-[#DCDCD0]"></div>
      
      {/* Families Row */}
      <div className="relative flex justify-center w-full px-2">
        {/* Horizontal Line spanning the families */}
        {partnership.assignedFamilies.length > 1 && (
          <div className="absolute top-0 h-[1px] bg-[#DCDCD0]" 
               style={{ 
                 left: `calc(10px + ${50 / partnership.assignedFamilies.length}%)`, 
                 right: `calc(10px + ${50 / partnership.assignedFamilies.length}%)` 
               }}>
          </div>
        )}
        
        <div className="flex justify-between w-full max-w-[340px] pt-6 gap-2">
           {partnership.assignedFamilies.map((f, i) => {
             // Cycle through colors for families
             const colors = [
               'bg-[#EAE9E0] text-[#002B49]', // Beige/Gray
               'bg-[#E6EDF5] text-[#002B49]', // Blue
               'bg-[#F8E9F0] text-[#8B1C4B]', // Pink
             ];
             const colorClass = colors[i % colors.length];
             
             return (
               <div key={f.id} className="flex flex-col items-center relative flex-1">
                 {/* Vertical drop line to family */}
                 <div className="absolute top-[-24px] left-1/2 -translate-x-1/2 w-[1px] h-6 bg-[#DCDCD0]"></div>
                 
                 <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-base font-bold mb-1.5 shadow-sm ${colorClass}`}>
                    {getInitials(f.name)}
                 </div>
                 
                 <span className="text-[10px] text-[#002B49] text-center leading-tight px-1 max-w-[70px] truncate">
                   {f.name}
                 </span>
               </div>
             );
           })}
        </div>
      </div>
    </div>
  );
}
