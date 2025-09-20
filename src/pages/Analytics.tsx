import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Analytics = () => {
  const tradingMetrics = [
    { metric: "Total Volume (7d)", value: "$16.8B", change: "+12.4%", trend: "up" },
    { metric: "Encrypted Transactions", value: "8,742", change: "+8.7%", trend: "up" },
    { metric: "Average Spread", value: "0.08%", change: "-2.1%", trend: "down" },
    { metric: "Network Uptime", value: "99.97%", change: "+0.02%", trend: "up" },
  ];

  const topPairs = [
    { pair: "EUR/USD", volume: "$4.2B", share: "25.1%", trades: "2,847" },
    { pair: "GBP/USD", volume: "$3.1B", share: "18.4%", trades: "2,156" },
    { pair: "USD/JPY", volume: "$2.8B", share: "16.7%", trades: "1,923" },
    { pair: "USD/CHF", volume: "$1.9B", share: "11.3%", trades: "1,347" },
    { pair: "AUD/USD", volume: "$1.6B", share: "9.5%", trades: "1,128" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gradient-encryption">
                Trading Analytics
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive insights into encrypted FX trading performance
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select defaultValue="7d">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">24 Hours</SelectItem>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="encryption-button">
                Export Data
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingMetrics.map((metric) => (
              <Card key={metric.metric} className="terminal-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-muted-foreground">{metric.metric}</h3>
                  <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Trading Pairs */}
            <Card className="terminal-card p-6">
              <h3 className="text-lg font-semibold mb-6">Top Trading Pairs (7d)</h3>
              <div className="space-y-4">
                {topPairs.map((pair, index) => (
                  <div key={pair.pair} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-mono font-semibold">{pair.pair}</div>
                        <div className="text-sm text-muted-foreground">{pair.trades} trades</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-semibold">{pair.volume}</div>
                      <div className="text-sm text-muted-foreground">{pair.share}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Encryption Statistics */}
            <Card className="terminal-card p-6">
              <h3 className="text-lg font-semibold mb-6">Encryption Analytics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">FHE Encrypted Volume</span>
                  <span className="font-mono text-encryption-blue font-semibold">$12.4B</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Encryption Success Rate</span>
                  <span className="font-mono text-trading-green font-semibold">99.98%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg. Encryption Time</span>
                  <span className="font-mono text-trading-amber font-semibold">0.8ms</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">MEV Attacks Prevented</span>
                  <span className="font-mono text-destructive font-semibold">247</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Front-runs Blocked</span>
                  <span className="font-mono text-destructive font-semibold">1,834</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold">Total Protection Value</span>
                    <span className="font-mono text-primary font-bold">$89.2M</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Network Performance */}
          <Card className="terminal-card p-6">
            <h3 className="text-lg font-semibold mb-6">Network Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-trading-green mb-2">2.1s</div>
                <div className="text-sm text-muted-foreground">Average Execution Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-encryption-blue mb-2">0.02%</div>
                <div className="text-sm text-muted-foreground">Network Fee</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-trading-amber mb-2">14,732</div>
                <div className="text-sm text-muted-foreground">Daily Active Users</div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;