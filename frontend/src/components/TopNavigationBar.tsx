import { User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopNavigationBarProps {
  title: string;
  showBack?: boolean;
}

export function TopNavigationBar({ title, showBack = false }: TopNavigationBarProps) {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#F3F2EB]/90 backdrop-blur-md border-b border-[#E5E5E0] z-50 flex items-center justify-between px-4 max-w-md mx-auto">
      <div className="flex items-center gap-2">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 -ml-1.5 rounded-full hover:bg-white/60 transition-colors"
          >
            <ArrowLeft size={20} className="text-[#002B49]" />
          </button>
        )}
        <h1 className="font-serif font-bold text-lg text-[#002B49] truncate max-w-[200px] sm:max-w-xs">
          {title}
        </h1>
      </div>
      
      <button className="p-2 bg-white border border-[#E5E5E0] rounded-full shadow-sm hover:bg-[#EAE9E0] transition-colors">
        <User size={18} className="text-[#8B1C4B]" />
      </button>
    </header>
  );
}
