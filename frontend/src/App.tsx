import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BaseLayout } from './layouts/BaseLayout';

import { DashboardView } from './pages/DashboardView';

import { PartnershipList } from './pages/PartnershipList';
import { PartnershipDetail } from './pages/PartnershipDetail';
import { FormationView } from './pages/FormationView';

// Placeholder Pages
const MapView = () => <div className="mt-4 p-6 bg-white border border-[#E5E5E0] rounded-2xl shadow-sm text-center"><h2 className="text-xl font-bold text-[#002B49]">Zone Map</h2><p className="text-sm text-[#595959] mt-2">Interactive map view coming soon.</p></div>;
const AnalyticsView = () => <div className="mt-4 p-6 bg-white border border-[#E5E5E0] rounded-2xl shadow-sm text-center"><h2 className="text-xl font-bold text-[#002B49]">Analytics</h2><p className="text-sm text-[#595959] mt-2">Charts and statistics coming soon.</p></div>;
const AiView = () => <div className="mt-4 p-6 bg-white border border-[#E5E5E0] rounded-2xl shadow-sm text-center"><h2 className="text-xl font-bold text-[#002B49]">AI Assistant</h2><p className="text-sm text-[#595959] mt-2">Smart assistant coming soon.</p></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<DashboardView />} />
          <Route path="/formation" element={<FormationView />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/menu" element={<PartnershipList />} />
          <Route path="/analytics" element={<AnalyticsView />} />
          <Route path="/ai" element={<AiView />} />
          <Route path="/partnership/:id" element={<PartnershipDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
