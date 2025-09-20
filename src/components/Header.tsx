import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
// Using inline SVG for logo
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#1a1a1a"/>
    <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="#00ff88"/>
    <circle cx="24" cy="8" r="3" fill="#00ff88" opacity="0.8"/>
    <path d="M22 8h4M24 6v4" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
);

const Header = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <LogoIcon />
            <div>
              <h1 className="text-2xl font-bold text-gradient-trading">
                FHE Swap Desk
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                Private FX Trading
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/markets" className="text-foreground hover:text-primary transition-colors">
              Markets
            </Link>
            <Link to="/swaps" className="text-foreground hover:text-primary transition-colors">
              Swaps
            </Link>
            <Link to="/analytics" className="text-foreground hover:text-primary transition-colors">
              Analytics
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {isConnected && (
              <div className="hidden lg:block">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Balance</p>
                  <p className="text-sm font-mono text-trading-green">
                    {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ETH` : '0.0000 ETH'}
                  </p>
                </div>
              </div>
            )}
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;