import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockPartnerships, type Partnership } from '../data/mockPartnerships';
import { CheckSquare, Square, Save, MapPin, Users } from 'lucide-react';

export function PartnershipDetail() {
  const { id } = useParams<{ id: string }>();
  const [partnership, setPartnership] = useState<Partnership | null>(null);
  const [notes, setNotes] = useState('');
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    const found = mockPartnerships.find(p => p.id === id);
    if (found) {
      setPartnership(JSON.parse(JSON.stringify(found)));
      setNotes(found.notes);
    }
  }, [id]);

  if (!partnership) return <div className="p-8 text-center text-[#595959]">Loading partnership details...</div>;

  const toggleChecklist = (itemId: string) => {
    setPartnership(prev => {
      if (!prev) return prev;
      const updated = { ...prev };
      const item = updated.checklist.find(c => c.id === itemId);
      if (item) {
        item.completed = !item.completed;
        const total = updated.checklist.length;
        const completed = updated.checklist.filter(c => c.completed).length;
        updated.progress = total > 0 ? Math.round((completed / total) * 100) : 0;
      }
      return updated;
    });
  };

  const saveReport = () => {
    console.log('Saved report for:', partnership.id, 'Notes:', notes);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-300 pb-6">
      {/* Overview Card */}
      <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 shadow-sm mb-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-serif font-bold text-[#002B49]">
            {partnership.companions.join(' & ')}
          </h2>
          <span className="bg-[#EAE9E0] text-[#002B49] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <MapPin size={12} /> Zone {partnership.zone}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs text-[#595959] mb-4">
          <Users size={14} className="text-[#8B1C4B]" />
          <span>Assigned Families: <strong className="text-[#002B49]">{partnership.assignedFamilies.join(', ')}</strong></span>
        </div>
        
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
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
      </div>

      {/* Interactive Checklist */}
      <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 shadow-sm mb-4">
        <h3 className="font-serif font-bold text-base text-[#002B49] mb-3">Ministering Checklist</h3>
        <div className="flex flex-col gap-2.5">
          {partnership.checklist.map(item => (
            <button 
              key={item.id}
              onClick={() => toggleChecklist(item.id)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                item.completed 
                  ? 'bg-[#F3F2EB]/60 border-[#E5E5E0]' 
                  : 'bg-white border-[#E5E5E0] hover:border-[#8B1C4B]/40 shadow-xs'
              }`}
            >
              {item.completed ? (
                <CheckSquare className="text-[#8B1C4B] shrink-0" size={20} />
              ) : (
                <Square className="text-[#595959] shrink-0" size={20} />
              )}
              <span className={`text-sm font-medium ${item.completed ? 'line-through text-[#595959]' : 'text-[#002B49]'}`}>
                {item.task}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-white border border-[#E5E5E0] rounded-2xl p-5 shadow-sm mb-6">
        <h3 className="font-serif font-bold text-base text-[#002B49] mb-2">Partnership & Visit Notes</h3>
        <p className="text-xs text-[#595959] mb-3">Record needs, prayer requests, or follow-up tasks</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-32 bg-[#F3F2EB]/50 border border-[#E5E5E0] rounded-xl p-3 text-sm text-[#002B49] placeholder-[#595959]/60 focus:outline-none focus:border-[#002B49] focus:bg-white transition-all resize-none"
          placeholder="Add detailed notes regarding this month's visits..."
        ></textarea>
      </div>

      {/* Save Report Button */}
      <div className="sticky bottom-20 z-40">
        <button 
          onClick={saveReport}
          className="w-full py-3.5 bg-[#8B1C4B] hover:bg-[#72153d] text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
        >
          <Save size={18} />
          {savedMessage ? 'Report Saved Successfully!' : 'Save Monthly Report'}
        </button>
      </div>
    </div>
  );
}
