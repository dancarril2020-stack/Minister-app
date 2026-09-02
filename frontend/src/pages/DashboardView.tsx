import { mockMetrics, mockUrgentAttentions } from '../data/mockDashboard';
import { MetricCard } from '../components/MetricCard';
import { UrgentAttentionList } from '../components/UrgentAttentionList';

export function DashboardView() {
  return (
    <div className="animate-in fade-in duration-300 pb-12">
      {/* Header Section */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-[#595959] tracking-wider uppercase">General Summary</p>
        <h2 className="text-2xl font-serif font-bold text-[#002B49] mt-0.5">Good morning, Daniel</h2>
      </div>

      {/* 2x2 Grid for Metrics */}
      <div className="grid grid-cols-2 gap-3">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      
      <UrgentAttentionList attentions={mockUrgentAttentions} />
    </div>
  );
}
