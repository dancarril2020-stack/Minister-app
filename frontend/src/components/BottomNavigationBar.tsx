import { NavLink } from 'react-router-dom';
import { LayoutGrid, Users, Map as MapIcon, PieChart, Sparkles } from 'lucide-react';

export function BottomNavigationBar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutGrid },
    { name: 'Management', path: '/menu', icon: Users },
    { name: 'Map', path: '/map', icon: MapIcon },
    { name: 'Analytics', path: '/analytics', icon: PieChart },
    { name: 'AI', path: '/ai', icon: Sparkles },
  ];

  return (
    <nav className="fixed bottom-3 left-0 right-0 z-50 px-4 max-w-md mx-auto pointer-events-none">
      <div className="flex items-center justify-around bg-white border border-[#E5E5E0] rounded-3xl shadow-lg py-2.5 px-2 pointer-events-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-2 gap-1 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#8B1C4B] font-semibold' 
                    : 'text-[#595959] hover:text-[#002B49]'
                }`
              }
            >
              <Icon size={22} />
              <span className="text-[11px] leading-none">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
