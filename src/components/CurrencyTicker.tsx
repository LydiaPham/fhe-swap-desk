import { useEffect, useState } from "react";
import { Lock, TrendingUp, TrendingDown, Shield } from "lucide-react";

interface CurrencyPair {
  pair: string;
  price: number;
  change: number;
  encrypted: boolean;
  volume: string;
}

const CurrencyTicker = () => {
  const [currencyPairs, setCurrencyPairs] = useState<CurrencyPair[]>([
    { pair: "EUR/USD", price: 1.0842, change: 0.12, encrypted: true, volume: "2.4B" },
    { pair: "GBP/USD", price: 1.2654, change: -0.08, encrypted: true, volume: "1.8B" },
    { pair: "USD/JPY", price: 149.23, change: 0.45, encrypted: true, volume: "3.1B" },
    { pair: "AUD/USD", price: 0.6523, change: 0.23, encrypted: true, volume: "892M" },
    { pair: "USD/CHF", price: 0.8745, change: -0.15, encrypted: true, volume: "1.2B" },
    { pair: "EUR/GBP", price: 0.8567, change: 0.09, encrypted: true, volume: "567M" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencyPairs(prev => 
        prev.map(pair => ({
          ...pair,
          price: pair.price + (Math.random() - 0.5) * 0.01,
          change: pair.change + (Math.random() - 0.5) * 0.1,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Shield className="h-5 w-5 mr-2 text-encryption-blue" />
          Encrypted Currency Pairs
        </h2>
        <div className="flex items-center text-sm text-muted-foreground">
          <Lock className="h-4 w-4 mr-1 encrypt-flicker" />
          FHE Protected
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currencyPairs.map((pair, index) => (
          <div
            key={pair.pair}
            className="bg-secondary/50 rounded-lg p-4 border border-border hover:border-encryption-blue/50 transition-all duration-300 currency-glow"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="font-mono font-semibold">{pair.pair}</span>
                {pair.encrypted && (
                  <Lock className="h-3 w-3 ml-2 text-encryption-blue encrypt-flicker" />
                )}
              </div>
              {pair.change >= 0 ? (
                <TrendingUp className="h-4 w-4 text-trading-green" />
              ) : (
                <TrendingDown className="h-4 w-4 text-trading-red" />
              )}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold">
                  {pair.price.toFixed(4)}
                </span>
                <span 
                  className={`text-sm font-mono ${
                    pair.change >= 0 ? 'text-trading-green' : 'text-trading-red'
                  }`}
                >
                  {pair.change >= 0 ? '+' : ''}{pair.change.toFixed(2)}%
                </span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>24H Vol: {pair.volume}</span>
                <span className="flex items-center">
                  <div className="h-2 w-2 bg-trading-green rounded-full mr-1 pulse-trading"></div>
                  Live
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyTicker;