'use client';

import { ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';

interface Recommendation {
  id: string;
  asset: string;
  action: 'buy' | 'sell';
  amount: string;
  price: string;
  confidence: number;
  rationale: string;
}

export function AgentRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      asset: 'ETH',
      action: 'buy',
      amount: '0.5',
      price: '$3,245.00',
      confidence: 92,
      rationale: 'Strong technical indicators and positive market sentiment',
    },
    {
      id: '2',
      asset: 'USDC',
      action: 'sell',
      amount: '1,000',
      price: '$1.00',
      confidence: 85,
      rationale: 'Rebalancing portfolio to increase exposure to growth assets',
    },
  ];

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <div
          key={rec.id}
          className="bg-surface rounded-lg p-6 border border-border shadow-card hover:border-accent transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  rec.action === 'buy'
                    ? 'bg-green-500 bg-opacity-10 text-green-500'
                    : 'bg-red-500 bg-opacity-10 text-red-500'
                }`}
              >
                {rec.action === 'buy' ? (
                  <ArrowUpRight className="w-6 h-6" />
                ) : (
                  <ArrowDownRight className="w-6 h-6" />
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-fg">
                  {rec.action === 'buy' ? 'Buy' : 'Sell'} {rec.asset}
                </h4>
                <p className="text-sm text-muted">
                  {rec.amount} {rec.asset} @ {rec.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-accent bg-opacity-10 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                {rec.confidence}% confidence
              </span>
            </div>
          </div>

          <p className="text-sm text-muted mb-4">{rec.rationale}</p>

          <button className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
            Execute Trade
          </button>
        </div>
      ))}
    </div>
  );
}
