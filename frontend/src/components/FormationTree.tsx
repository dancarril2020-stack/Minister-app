import { User, Users } from 'lucide-react';

export function FormationTree() {
  return (
    <div className="flex flex-col items-center justify-start p-4 w-full h-full min-h-[400px]">
      
      {/* Presidency Level */}
      <div className="flex flex-col items-center">
        <div className="glass-panel p-4 flex flex-col items-center border-[var(--color-accent-primary)] border-2">
          <Users size={24} className="text-[var(--color-accent-primary)] mb-2" />
          <h3 className="font-bold text-[var(--color-text-primary)]">Presidency</h3>
        </div>
        
        {/* Connector Line */}
        <div className="w-0.5 h-6 bg-[var(--color-border)]"></div>
      </div>
      
      {/* Horizontal Connector */}
      <div className="w-full max-w-sm border-t-2 border-[var(--color-border)] flex justify-between relative">
        <div className="w-0.5 h-6 bg-[var(--color-border)] absolute top-0 left-0"></div>
        <div className="w-0.5 h-6 bg-[var(--color-border)] absolute top-0 right-0"></div>
      </div>
      
      {/* Zones Level */}
      <div className="w-full max-w-sm flex justify-between mt-6">
        
        {/* Zone North */}
        <div className="flex flex-col items-center flex-1">
          <div className="glass-panel p-3 flex flex-col items-center text-center">
            <h4 className="font-semibold text-sm">Zone North</h4>
            <p className="text-xs text-[var(--color-text-secondary)]">2 Partnerships</p>
          </div>
          <div className="w-0.5 h-4 bg-[var(--color-border)]"></div>
          
          {/* Companions */}
          <div className="flex flex-col gap-2 w-full px-2">
            <div className="glass-panel p-2 flex items-center gap-2">
              <User size={14} className="text-[var(--color-text-secondary)]" />
              <span className="text-xs">John & Peter</span>
            </div>
            <div className="glass-panel p-2 flex items-center gap-2">
              <User size={14} className="text-[var(--color-text-secondary)]" />
              <span className="text-xs">David & James</span>
            </div>
          </div>
        </div>
        
        {/* Gap */}
        <div className="w-4"></div>
        
        {/* Zone South */}
        <div className="flex flex-col items-center flex-1">
          <div className="glass-panel p-3 flex flex-col items-center text-center">
            <h4 className="font-semibold text-sm">Zone South</h4>
            <p className="text-xs text-[var(--color-text-secondary)]">1 Partnership</p>
          </div>
          <div className="w-0.5 h-4 bg-[var(--color-border)]"></div>
          
          {/* Companions */}
          <div className="flex flex-col gap-2 w-full px-2">
            <div className="glass-panel p-2 flex items-center gap-2">
              <User size={14} className="text-[var(--color-text-secondary)]" />
              <span className="text-xs">Alan & Steve</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
