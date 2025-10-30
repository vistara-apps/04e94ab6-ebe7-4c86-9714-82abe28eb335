'use client';

import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

interface PortfolioStat {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export function PortfolioOverview() {
  const stats: PortfolioStat[] = [
    {
      label: 'Total Value',
      value: '$24,582.50',
      change: '+12.5%',
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      label: '24h Change',
      value: '+$1,245.30',
      change: '+5.3%',
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      label: 'Total Return',
      value: '+$8,420.15',
      change: '+52.1%',
      isPositive: true,
      icon: <Percent className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface rounded-lg p-6 border border-border shadow-card hover:border-accent transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted text-sm font-medium">{stat.label}</span>
            <div className="w-10 h-10 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center text-accent">
              {stat.icon}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-fg">{stat.value}</p>
            <div className="flex items-center gap-2">
              {stat.isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-muted">vs last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
