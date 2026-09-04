import { Outlet, useLocation } from 'react-router-dom';
import { TopNavigationBar } from '../components/TopNavigationBar';
import { BottomNavigationBar } from '../components/BottomNavigationBar';

export function BaseLayout() {
  const location = useLocation();
  
  // Determine title based on current path
  const getTitle = () => {
    if (location.pathname.startsWith('/formation')) return 'Formation';
    if (location.pathname.startsWith('/map')) return 'Zone Map';
    if (location.pathname.startsWith('/menu')) return '';
    if (location.pathname.startsWith('/analytics')) return 'Analytics';
    if (location.pathname.startsWith('/ai')) return 'AI Assistant';
    if (location.pathname.startsWith('/partnership/')) return 'Partnership Detail';
    return '';
  };

  const showBackButton = location.pathname.startsWith('/partnership/') || location.pathname.startsWith('/formation');

  return (
    <div className="min-h-screen bg-[#F3F2EB] flex flex-col">
      <TopNavigationBar title={getTitle()} showBack={showBackButton} />
      
      {/* Main scrollable content area */}
      <main className="flex-1 overflow-y-auto pt-14 pb-24 px-4 max-w-md w-full mx-auto">
        <Outlet />
      </main>

      <BottomNavigationBar />
    </div>
  );
}
