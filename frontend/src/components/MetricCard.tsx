import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Metric } from '../data/mockDashboard';

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const percentage = Math.round((metric.value / metric.total) * 100);
  
  const TrendIcon = 
    metric.trend === 'up' ? TrendingUp : 
    metric.trend === 'down' ? TrendingDown : Minus;

  const trendColor = 
    metric.trend === 'up' ? 'text-green-600' : 
    metric.trend === 'down' ? 'text-red-600' : 'text-[#595959]';

  return (
    <div className="bg-white border border-[#E5E5E0] rounded-2xl shadow-sm p-3.5 flex flex-col justify-between hover:shadow transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xs font-semibold text-[#595959] uppercase tracking-wide">{metric.title}</h3>
        <TrendIcon size={15} className={trendColor} />
      </div>
      
      <div className="flex items-baseline justify-between mt-1">
        <div>
          <span className="text-2xl font-bold font-serif text-[#002B49]">{metric.value}</span>
          <span className="text-xs font-medium text-[#595959] ml-1">/ {metric.total}</span>
        </div>
        <div className="text-sm font-bold text-[#8B1C4B]">
          {percentage}%
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-[#E5E5E0] rounded-full h-1.5 mt-3 overflow-hidden">
        <div 
          className="bg-[#002B49] h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
