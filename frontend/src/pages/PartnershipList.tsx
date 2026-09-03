import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPartnerships } from '../data/mockPartnerships';
import { Filter, ChevronRight, Search, Users } from 'lucide-react';

export function PartnershipList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterZone, setFilterZone] = useState<string>('All');
  const navigate = useNavigate();

  const zones = ['All', ...Array.from(new Set(mockPartnerships.map(p => p.zone)))];

  const getZoneColor = (zone: string) => {
    const lower = zone.toLowerCase();
    if (lower.includes('norte')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lower.includes('sur')) return 'bg-green-100 text-green-800 border-green-200';
    if (lower.includes('este')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (lower.includes('oeste')) return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-[#EAE9E0] text-[#002B49] border-[#E5E5E0]';
  };

  const filtered = mockPartnerships.filter(p => {
    const matchesZone = filterZone === 'All' || p.zone === filterZone;
    const matchesSearch = searchQuery === '' || 
      p.companions.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.assignedFamilies.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesZone && matchesSearch;
  });

  return (
    <div className="animate-in fade-in duration-300 pb-24">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-serif font-bold text-[#002B49]">Compañerismos</h2>
        <p className="text-xs text-[#595959] mt-0.5">Track companion assignments and visit progress</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-3">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#595959]" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by companion or family..."
          className="w-full bg-white border border-[#E5E5E0] rounded-xl py-2.5 pl-10 pr-4 text-sm text-[#002B49] placeholder-[#595959]/70 focus:outline-none focus:border-[#002B49] shadow-sm transition-all"
        />
      </div>

      {/* Zone Filters & Formación */}
      <div className="flex items-center gap-1.5 mb-4 w-full pb-1">
        <Filter size={16} className="text-[#595959] shrink-0" />
        {zones.map(zone => (
          <button
            key={zone}
            onClick={() => setFilterZone(zone)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all shrink-0 ${
              filterZone === zone 
                ? 'bg-[#002B49] text-white shadow-sm' 
                : 'bg-white border border-[#E5E5E0] text-[#595959] hover:bg-[#EAE9E0] hover:text-[#002B49]'
            }`}
          >
            {zone === 'All' ? 'All' : zone.replace('Zona ', '')}
          </button>
        ))}
        
        <button 
          onClick={() => navigate('/formation')}
          className="shrink-0 flex items-center px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all bg-[#8B1C4B] text-white hover:bg-[#8B1C4B]/90 shadow-sm ml-auto"
        >
          Formación
        </button>
      </div>

      {/* Partnerships Cards */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="bg-white border border-[#E5E5E0] rounded-2xl p-8 text-center text-[#595959]">
            <Users size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm font-medium">No partnerships found matching your criteria.</p>
          </div>
        ) : (
          filtered.map(p => (
            <div 
              key={p.id} 
              onClick={() => navigate(`/partnership/${p.id}`)}
              className="bg-white border border-[#E5E5E0] rounded-2xl p-4 cursor-pointer hover:border-[#8B1C4B]/50 hover:shadow transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    {p.companions.map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#EAE9E0] border-2 border-white flex items-center justify-center text-xs font-bold text-[#002B49] shrink-0">
                        {c.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                      </div>
                    ))}
                  </div>
                  <h3 className="font-serif font-bold text-[15px] leading-tight text-[#002B49] group-hover:text-[#8B1C4B] transition-colors">
                    {p.companions.map(c => c.name).join(' & ')}
                  </h3>
                </div>
                <ChevronRight size={18} className="text-[#595959] group-hover:text-[#8B1C4B] group-hover:translate-x-0.5 transition-all mt-1" />
              </div>
              
              <div className="flex items-center justify-between text-xs text-[#595959] mb-3">
                <span>Assigned: <strong className="text-[#002B49] font-medium">{p.assignedFamilies.join(', ')}</strong></span>
                <span className={`px-2 py-0.5 rounded-full font-bold border ${getZoneColor(p.zone)} text-[10px] uppercase tracking-wide`}>
                  {p.zone}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-full bg-[#EAE9E0] rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#002B49] h-full rounded-full transition-all duration-500"
                    style={{ width: `${p.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs font-bold w-9 text-right text-[#002B49]">
                  {p.progress}%
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
