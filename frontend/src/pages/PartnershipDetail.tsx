import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockPartnerships, type Partnership, type Family } from '../data/mockPartnerships';
import { CheckSquare, Square, Save, MapPin, BookOpen, HandHeart, Home, Building2, ChevronDown, ChevronUp } from 'lucide-react';

export function PartnershipDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [partnership, setPartnership] = useState<Partnership | null>(null);
  const [savedMessage, setSavedMessage] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [expandedFamilies, setExpandedFamilies] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const found = mockPartnerships.find(p => p.id === id);
    if (found) {
      setPartnership(JSON.parse(JSON.stringify(found)));
    }
  }, [id]);

  useEffect(() => {
    if (hasChanges) {
      setTimeout(() => {
        const btn = document.getElementById('save-report-btn');
        if (btn) {
          btn.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 300);
    }
  }, [hasChanges]);

  if (!partnership) return <div className="p-8 text-center text-[#595959]">Loading partnership details...</div>;

  const toggleFamilyExpand = (familyId: string) => {
    setExpandedFamilies(prev => {
      const isExpanding = !prev[familyId];
      if (isExpanding) {
        setTimeout(() => {
          const el = document.getElementById(`family-${familyId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
      return {
        ...prev,
        [familyId]: isExpanding
      };
    });
  };

  const toggleChecklist = (e: React.MouseEvent, familyId: string, itemKey: keyof Family['checklist']) => {
    e.stopPropagation();
    setHasChanges(true);
    setPartnership(prev => {
      if (!prev) return prev;
      // Deep clone to ensure React detects changes in nested objects
      const updated = JSON.parse(JSON.stringify(prev)) as Partnership;
      const family = updated.assignedFamilies.find(f => f.id === familyId);
      if (family) {
        family.checklist[itemKey] = !family.checklist[itemKey];
      }
      return updated;
    });
  };

  const toggleVisit = (e: React.MouseEvent, familyId: string) => {
    e.stopPropagation();
    setHasChanges(true);
    setPartnership(prev => {
      if (!prev) return prev;
      const updated = JSON.parse(JSON.stringify(prev)) as Partnership;
      const family = updated.assignedFamilies.find(f => f.id === familyId);
      if (family) {
        family.visited = !family.visited;
        
        let completed = 0;
        const total = updated.assignedFamilies.length;
        updated.assignedFamilies.forEach(f => {
          if (f.visited) completed++;
        });
        updated.progress = total > 0 ? Math.round((completed / total) * 100) : 0;
      }
      return updated;
    });
  };

  const updateNotes = (familyId: string, text: string) => {
    setHasChanges(true);
    setPartnership(prev => {
      if (!prev) return prev;
      const updated = JSON.parse(JSON.stringify(prev)) as Partnership;
      const family = updated.assignedFamilies.find(f => f.id === familyId);
      if (family) {
        family.notes = text;
      }
      return updated;
    });
  };

  const saveReport = () => {
    console.log('Saved report for:', partnership.id);
    setSavedMessage(true);
    setTimeout(() => {
      setSavedMessage(false);
      navigate('/menu');
    }, 1500);
  };

  const checklistMeta = [
    { key: 'scriptures' as const, label: 'Lectura de Escrituras', icon: BookOpen },
    { key: 'prayer' as const, label: 'Oración', icon: HandHeart },
    { key: 'homeEvening' as const, label: 'Noche de Hogar', icon: Home },
    { key: 'temple' as const, label: 'Asistencia al Templo', icon: Building2 },
  ];

  return (
    <div className="animate-in fade-in duration-300 px-4">
      {/* Header Area */}
      <div className="mb-6 pt-2">
        <p className="text-[10px] font-bold text-[#8B1C4B] uppercase tracking-widest mb-1">{partnership.zone}</p>
        <h2 className="text-3xl font-serif font-bold text-[#002B49] mb-4">Compañerismo</h2>
        
        {/* Companionship Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {partnership.companions.map((c, i) => {
                const initials = c.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
                // Alternating colors for avatar background
                const bgColor = i % 2 === 0 ? 'bg-[#E5E9EC]' : 'bg-[#F2E5E8]';
                const textColor = i % 2 === 0 ? 'text-[#002B49]' : 'text-[#8B1C4B]';
                return (
                  <div key={i} className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-sm shadow-sm ${bgColor} ${textColor} shrink-0`}>
                    {initials}
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#002B49] leading-tight">
                {partnership.companions.map(c => c.name.split(' ')[0]).join(' & ')}
              </h3>
              <p className="text-xs text-[#595959] mt-0.5">
                {partnership.companions.map(c => c.name).join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Progress Indicator */}
      <div className="mb-6 px-1">
        <div className="flex justify-between text-xs font-semibold mb-2">
          <span className="text-[#595959] uppercase tracking-wide">Overall Progress</span>
          <span className="text-[#8B1C4B]">{partnership.progress}%</span>
        </div>
        <div className="w-full bg-[#EAE9E0] rounded-full h-2 overflow-hidden">
          <div 
            className="bg-[#002B49] h-full transition-all duration-300"
            style={{ width: `${partnership.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Assigned Families Heading */}
      <div className="mb-3 px-1 mt-8">
        <h3 className="text-[10px] font-bold text-[#595959] tracking-widest uppercase">
          Familias Asignadas • {partnership.assignedFamilies.length}
        </h3>
      </div>

      {/* Family Detail Cards */}
      <div className="flex flex-col gap-4 mb-0">
        {partnership.assignedFamilies.map(family => {
          const isExpanded = expandedFamilies[family.id];
          return (
            <div id={`family-${family.id}`} key={family.id} className="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
              {/* Header: Avatar, Name, Address (Clickable for expand/collapse) */}
              <button 
                onClick={() => toggleFamilyExpand(family.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-[#F3F2EB]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {family.avatarUrl ? (
                    <img src={family.avatarUrl} alt={family.name} className="w-12 h-12 rounded-full object-cover shadow-sm border border-white shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#EAE9E0] flex items-center justify-center font-bold text-[#002B49] text-base shadow-sm border border-white shrink-0">
                      {family.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#002B49] leading-tight">{family.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-[#595959] mt-0.5">
                      <MapPin size={12} className="text-[#8B1C4B] shrink-0" />
                      <span className="truncate max-w-[180px]">{family.address}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={(e) => toggleVisit(e, family.id)}
                    className="shrink-0 transition-transform hover:scale-110"
                  >
                    {family.visited ? (
                      <CheckSquare className="text-[#8B1C4B]" size={22} />
                    ) : (
                      <Square className="text-[#595959] opacity-40" size={22} />
                    )}
                  </button>
                  <div className="shrink-0 text-[#595959]">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="border-t border-[#E5E5E0] animate-in slide-in-from-top-2 duration-200">
                  {/* Checklist */}
                  <div className="p-4 pt-5">
                    <h4 className="text-[10px] font-bold text-[#595959] tracking-wider uppercase mb-3">Ministering Checklist</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {checklistMeta.map(item => {
                        const isCompleted = family.checklist[item.key];
                        const Icon = item.icon;
                        return (
                          <button 
                            key={item.key}
                            onClick={(e) => toggleChecklist(e, family.id, item.key)}
                            className={`flex items-center justify-between p-3.5 rounded-2xl transition-all text-left bg-[#F3F2EB] hover:bg-[#EAE9E0] ${
                              isCompleted 
                                ? 'text-[#8B1C4B]' 
                                : 'text-[#002B49]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon size={16} className={isCompleted ? 'text-[#8B1C4B]' : 'text-[#8B1C4B] opacity-80'} />
                              <span className="text-sm font-semibold">
                                {item.label}
                              </span>
                            </div>
                            {isCompleted ? (
                              <CheckSquare className="text-[#8B1C4B] shrink-0" size={18} />
                            ) : (
                              <Square className="text-[#595959] shrink-0 opacity-40" size={18} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="px-4 pb-5">
                    <h4 className="text-[10px] font-bold text-[#595959] tracking-wider uppercase mb-2">Notes & Follow-up</h4>
                    <textarea
                      value={family.notes}
                      onChange={(e) => updateNotes(family.id, e.target.value)}
                      className="w-full h-24 bg-[#F3F2EB] rounded-2xl p-3.5 text-sm text-[#002B49] placeholder-[#595959]/60 focus:outline-none focus:ring-1 focus:ring-[#8B1C4B] transition-all resize-none"
                      placeholder={`Notes for ${family.name}...`}
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Save Report Button */}
      {hasChanges && (
        <div id="save-report-btn" className="mt-6 animate-in slide-in-from-bottom-4 duration-300">
          <button 
            onClick={saveReport}
            className="w-full py-4 bg-[#8B1C4B] hover:bg-[#72153d] text-white rounded-2xl font-bold shadow-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
          >
            <Save size={20} />
            {savedMessage ? 'Report Saved Successfully!' : 'Save Report'}
          </button>
        </div>
      )}
    </div>
  );
}
