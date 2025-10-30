'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Wallet, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-fg">Zara Agent Portfolio</h1>
              <p className="text-sm text-muted">AI-powered trading on Base</p>
            </div>
          </div>
          
          <ConnectWallet>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all duration-200">
              <Wallet className="w-4 h-4" />
              <span className="font-medium">Connect Wallet</span>
            </div>
          </ConnectWallet>
        </div>
      </div>
    </header>
  );
}
