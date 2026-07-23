import { AlertCircle, Clock } from 'lucide-react';
import type { UrgentAttention } from '../data/mockDashboard';

interface UrgentAttentionListProps {
  attentions: UrgentAttention[];
}

export function UrgentAttentionList({ attentions }: UrgentAttentionListProps) {
  if (attentions.length === 0) return null;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold tracking-wider uppercase text-[#595959] flex items-center gap-2">
          <AlertCircle size={16} className="text-[#8B1C4B]" />
          Urgent Attentions ({attentions.length})
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {attentions.map((item) => (
          <div key={item.id} className="bg-white border border-[#E5E5E0] rounded-2xl shadow-sm p-4 flex items-start gap-3 cursor-pointer hover:border-[#8B1C4B]/40 hover:shadow transition-all">
            <div className={`p-2.5 rounded-full shrink-0 ${
              item.severity === 'high' || item.severity === 'pending' ? 'bg-[#F8E9F0] text-[#8B1C4B]' : 'bg-[#EAE9E0] text-[#002B49]'
            }`}>
              <AlertCircle size={20} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-serif font-bold text-[#002B49] text-base truncate">{item.familyName}</h4>
                <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                  item.severity === 'high' || item.severity === 'pending' ? 'bg-[#F8E9F0] text-[#8B1C4B]' : 'bg-[#EAE9E0] text-[#002B49]'
                }`}>
                  {item.severity}
                </span>
              </div>
              <p className="text-sm text-[#595959] mt-1 leading-snug">{item.reason}</p>
              <div className="flex items-center gap-1 text-xs text-[#595959] mt-2 font-medium">
                <Clock size={12} />
                <span>{new Date(item.dateFlagged).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
