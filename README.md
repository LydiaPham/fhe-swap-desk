# 🔐 FHE Swap Desk

> **Private Foreign Exchange Trading with Homomorphic Encryption**

A revolutionary decentralized exchange platform that leverages Fully Homomorphic Encryption (FHE) to enable completely private foreign exchange trading while protecting against MEV attacks and front-running.

## ✨ Key Features

- 🔒 **Zero-Knowledge Trading**: All sensitive data encrypted until execution
- ⚡ **MEV Protection**: Advanced encryption prevents sandwich attacks
- 🌍 **Global Currency Support**: Trade 8+ major currencies privately
- 💼 **Multi-Wallet Support**: Seamless integration with popular wallets
- 📊 **Real-time Analytics**: Live market data with privacy preservation
- 🛡️ **Anti-Frontrunning**: Encrypted order execution prevents manipulation

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| 🎨 **Frontend** | React 18, TypeScript, Vite, Tailwind CSS |
| 💳 **Wallet** | RainbowKit, Wagmi, Viem |
| ⛓️ **Blockchain** | Ethereum (Sepolia Testnet) |
| 🔐 **Encryption** | FHE (Fully Homomorphic Encryption) |
| 📜 **Smart Contracts** | Solidity with FHE Libraries |

## 🚀 Quick Start

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [Git](https://git-scm.com/) version control
- [MetaMask](https://metamask.io/) or compatible Web3 wallet
- [Sepolia ETH](https://sepoliafaucet.com/) for testing

### ⚙️ Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/LydiaPham/fhe-swap-desk.git
cd fhe-swap-desk

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure environment
cp .env.example .env
# Edit .env with your API keys

# 4️⃣ Start development server
npm run dev
```

> 💡 **Tip**: Make sure to add Sepolia network to your wallet for testing!

### 🔧 Environment Configuration

Create a `.env` file with your own API keys:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration  
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_PROJECT_ID

# Infura Configuration
VITE_INFURA_API_KEY=YOUR_INFURA_KEY
VITE_RPC_URL_ALT=https://1rpc.io/sepolia
```

> ⚠️ **Security**: Never commit your `.env` file with real API keys!

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
