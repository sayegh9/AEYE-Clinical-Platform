import { ReactNode } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: 'normal' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  children?: ReactNode;
}

export function MetricCard({
  label,
  value,
  unit,
  status = 'normal',
  trend,
  trendValue,
  children
}: MetricCardProps) {
  const statusColors = {
    normal: 'text-green-700',
    warning: 'text-amber-700',
    critical: 'text-red-700'
  };

  const statusBgColors = {
    normal: 'bg-green-50',
    warning: 'bg-amber-50',
    critical: 'bg-red-50'
  };

  return (
    <div className={`rounded-lg border border-gray-200 p-4 ${statusBgColors[status]}`}>
      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-2 mb-3">
        <span className={`text-2xl font-bold ${statusColors[status]}`}>
          {value}
        </span>
        {unit && <span className="text-sm text-gray-600">{unit}</span>}
      </div>
      {(trend || children) && (
        <div className="space-y-2">
          {trend && trendValue && (
            <div className="flex items-center gap-2 text-sm">
              {trend === 'up' && <TrendingUp className="w-4 h-4 text-red-600" />}
              {trend === 'down' && <TrendingDown className="w-4 h-4 text-green-600" />}
              <span className="text-gray-700">{trendValue}</span>
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
