# FHE Swap Desk

A fully homomorphic encryption (FHE) powered foreign exchange swap desk that enables private FX trading with complete data protection.

## Features

- **FHE Encryption**: All trading data is encrypted using Fully Homomorphic Encryption
- **MEV Protection**: Prevents front-running and MEV attacks through encrypted order execution
- **Multi-Currency Support**: Trade between major currencies (EUR, USD, GBP, JPY, etc.)
- **Wallet Integration**: Connect with RainbowKit and other popular wallets
- **Real-time Analytics**: Monitor market conditions and trading performance
- **Private Transactions**: Execute swaps without revealing trading intentions

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Wallet**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum (Sepolia testnet)
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE support

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- MetaMask or compatible wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/LydiaPham/fhe-swap-desk.git
cd fhe-swap-desk

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env` file with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_PROJECT_ID

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_KEY
```

## Smart Contract Deployment

### Compile Contracts

```bash
npm run compile
```

### Deploy to Sepolia

```bash
npm run deploy
```

### Deploy Locally

```bash
npm run deploy:local
```

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to link your Ethereum wallet
2. **Select Currencies**: Choose your source and target currencies
3. **Enter Amount**: Specify the amount you want to swap
4. **Review Details**: Check exchange rates, fees, and encryption status
5. **Execute Swap**: Confirm the encrypted transaction

## Security Features

- **FHE Encryption**: All sensitive data is encrypted until execution
- **Private Order Book**: Orders are encrypted and only revealed when matched
- **MEV Protection**: Prevents front-running through encrypted execution
- **Audit Trail**: All transactions are recorded on-chain with privacy preservation

## Development

### Project Structure

```
fhe-swap-desk/
├── contracts/          # Smart contracts
├── scripts/           # Deployment scripts
├── src/
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── pages/        # Application pages
├── public/           # Static assets
└── hardhat.config.ts # Hardhat configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run compile` - Compile smart contracts
- `npm run deploy` - Deploy to Sepolia
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Multi-chain support
- [ ] Advanced FHE operations
- [ ] Mobile app
- [ ] API integration
- [ ] Advanced analytics
