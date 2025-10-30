'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { PortfolioOverview } from './components/PortfolioOverview';
import { AgentRecommendations } from './components/AgentRecommendations';
import { PerformanceChart } from './components/PerformanceChart';
import { AgentTestimonials } from './components/AgentTestimonials';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Portfolio Overview Section */}
        <section>
          <h2 className="text-2xl font-semibold text-fg mb-4">Portfolio Overview</h2>
          <PortfolioOverview />
        </section>

        {/* Performance Chart Section */}
        <section>
          <h2 className="text-2xl font-semibold text-fg mb-4">Performance</h2>
          <PerformanceChart />
        </section>

        {/* Agent Recommendations Section */}
        <section>
          <h2 className="text-2xl font-semibold text-fg mb-4">Agent Recommendations</h2>
          <AgentRecommendations />
        </section>

        {/* Agent Testimonials Section */}
        <section>
          <h2 className="text-2xl font-semibold text-fg mb-4">Agent Performance</h2>
          <AgentTestimonials />
        </section>
      </div>
    </main>
  );
}
