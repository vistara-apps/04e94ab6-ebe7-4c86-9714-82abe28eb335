# Zara Agent Portfolio

AI-powered portfolio management and agent-assisted trading on Base, integrated with Farcaster.

## Features

- 🤖 **Agent-Assisted Trading**: Real-time AI recommendations with gasless execution
- 📊 **Portfolio Insights**: Personalized analytics and performance tracking
- ✅ **Verifiable Performance**: Onchain agent performance and testimonials
- 🔗 **Farcaster Integration**: Social sharing and community engagement
- ⚡ **Base Network**: Fast, low-cost transactions on Base L2

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` from `.env.local.example` and add your API keys

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Architecture

- `/app` - Next.js App Router pages and layouts
- `/app/components` - React components
- `/public/.well-known` - Farcaster manifest

## Key Integrations

- **OnchainKit**: Wallet connection, identity, transactions
- **Farcaster SDK**: Mini App integration, notifications, social features
- **Base Network**: Gasless transactions via Coinbase Paymaster

## License

MIT
