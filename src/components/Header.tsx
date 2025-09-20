import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import encryptedFxLogo from "@/assets/encrypted-fx-logo.svg";

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
            <img 
              src={encryptedFxLogo} 
              alt="Encrypted FX Logo" 
              className="h-10 w-10 glow-blue"
            />
            <div>
              <h1 className="text-2xl font-bold text-gradient-encryption">
                Encrypted FX
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                Confidential FX with FHE
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