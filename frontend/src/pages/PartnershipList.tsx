import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPartnerships } from '../data/mockPartnerships';
import { Filter, ChevronRight, Search, Users } from 'lucide-react';

export function PartnershipList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterZone, setFilterZone] = useState<string>('All');
  const navigate = useNavigate();

  const zones = ['All', ...Array.from(new Set(mockPartnerships.map(p => p.zone)))];

  const filtered = mockPartnerships.filter(p => {
    const matchesZone = filterZone === 'All' || p.zone === filterZone;
    const matchesSearch = searchQuery === '' || 
      p.companions.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.assignedFamilies.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesZone && matchesSearch;
  });

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-serif font-bold text-[#002B49]">Partnership Management</h2>
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

      {/* Zone Filters */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
        <Filter size={16} className="text-[#595959] shrink-0" />
        {zones.map(zone => (
          <button
            key={zone}
            onClick={() => setFilterZone(zone)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterZone === zone 
                ? 'bg-[#002B49] text-white shadow-sm' 
                : 'bg-white border border-[#E5E5E0] text-[#595959] hover:bg-[#EAE9E0] hover:text-[#002B49]'
            }`}
          >
            {zone === 'All' ? 'All Zones' : zone}
          </button>
        ))}
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
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="font-serif font-bold text-base text-[#002B49] group-hover:text-[#8B1C4B] transition-colors">
                  {p.companions.join(' & ')}
                </h3>
                <ChevronRight size={18} className="text-[#595959] group-hover:text-[#8B1C4B] group-hover:translate-x-0.5 transition-all" />
              </div>
              
              <div className="flex items-center justify-between text-xs text-[#595959] mb-3">
                <span>Assigned: <strong className="text-[#002B49] font-medium">{p.assignedFamilies.join(', ')}</strong></span>
                <span className="bg-[#EAE9E0] text-[#002B49] px-2 py-0.5 rounded-full font-medium text-[10px]">
                  Zone {p.zone}
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
