import Header from "@/components/Header";
import CurrencyTicker from "@/components/CurrencyTicker";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Markets = () => {
  const marketData = [
    { pair: "EUR/USD", price: "1.0542", change: "+0.0012", changePercent: "+0.11%", volume: "24.5B" },
    { pair: "GBP/USD", price: "1.2456", change: "-0.0023", changePercent: "-0.18%", volume: "18.2B" },
    { pair: "USD/JPY", price: "149.32", change: "+0.45", changePercent: "+0.30%", volume: "22.1B" },
    { pair: "USD/CHF", price: "0.9123", change: "+0.0008", changePercent: "+0.09%", volume: "12.8B" },
    { pair: "AUD/USD", price: "0.6789", change: "-0.0034", changePercent: "-0.50%", volume: "8.9B" },
    { pair: "USD/CAD", price: "1.3456", change: "+0.0019", changePercent: "+0.14%", volume: "9.7B" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold mb-4 text-gradient-encryption">
              Global FX Markets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time foreign exchange rates with encrypted trading capabilities
            </p>
          </div>

          {/* Currency Ticker */}
          <CurrencyTicker />

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketData.map((market) => (
              <Card key={market.pair} className="terminal-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{market.pair}</h3>
                  <Badge variant={market.change.startsWith('+') ? 'default' : 'destructive'}>
                    {market.changePercent}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-mono text-lg font-semibold">{market.price}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Change</span>
                    <span className={`font-mono ${market.change.startsWith('+') ? 'text-trading-green' : 'text-destructive'}`}>
                      {market.change}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Volume (24h)</span>
                    <span className="font-mono text-sm">{market.volume}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="terminal-card p-6 text-center">
              <div className="text-2xl font-bold text-trading-green mb-2">156.7B</div>
              <div className="text-sm text-muted-foreground">Daily Volume</div>
            </Card>
            
            <Card className="terminal-card p-6 text-center">
              <div className="text-2xl font-bold text-encryption-blue mb-2">42</div>
              <div className="text-sm text-muted-foreground">Active Pairs</div>
            </Card>
            
            <Card className="terminal-card p-6 text-center">
              <div className="text-2xl font-bold text-trading-amber mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </Card>
            
            <Card className="terminal-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">1,245</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Markets;