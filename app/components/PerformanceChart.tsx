'use client';

import { BarChart3 } from 'lucide-react';

export function PerformanceChart() {
  const data = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 85 },
    { month: 'May', value: 92 },
    { month: 'Jun', value: 88 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-fg">Portfolio Growth</h3>
          <p className="text-sm text-muted">Last 6 months performance</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center text-accent">
          <BarChart3 className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted font-medium">{item.month}</span>
              <span className="text-fg font-semibold">{item.value}%</span>
            </div>
            <div className="w-full bg-bg rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
