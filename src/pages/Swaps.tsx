import Header from "@/components/Header";
import SwapInterface from "@/components/SwapInterface";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Swaps = () => {
  const recentSwaps = [
    { id: "0x1a2b", pair: "EUR/USD", amount: "10,000", status: "Completed", time: "2 min ago" },
    { id: "0x3c4d", pair: "GBP/USD", amount: "25,000", status: "Encrypted", time: "5 min ago" },
    { id: "0x5e6f", pair: "USD/JPY", amount: "50,000", status: "Completed", time: "8 min ago" },
    { id: "0x7g8h", pair: "USD/CHF", amount: "15,000", status: "Processing", time: "12 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold mb-4 text-gradient-encryption">
              Encrypted FX Swaps
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Execute foreign exchange swaps with full encryption protection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Swap Interface */}
            <div className="lg:col-span-2">
              <SwapInterface />
            </div>

            {/* Swap Statistics */}
            <div className="space-y-6">
              <Card className="terminal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Swap Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Volume (24h)</span>
                    <span className="font-mono text-trading-green">$2.4B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Encrypted Swaps</span>
                    <span className="font-mono text-encryption-blue">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Execution Time</span>
                    <span className="font-mono text-trading-amber">2.3s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-mono text-trading-green">99.97%</span>
                  </div>
                </div>
              </Card>

              <Card className="terminal-card p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Swaps</h3>
                <div className="space-y-3">
                  {recentSwaps.map((swap) => (
                    <div key={swap.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <div className="font-mono text-sm">{swap.pair}</div>
                        <div className="text-xs text-muted-foreground">{swap.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-sm">${swap.amount}</div>
                        <Badge 
                          variant={
                            swap.status === 'Completed' ? 'default' : 
                            swap.status === 'Encrypted' ? 'secondary' : 
                            'outline'
                          }
                          className="text-xs"
                        >
                          {swap.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* FHE Protection Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-encryption-blue/20 flex items-center justify-center">
                <div className="text-encryption-blue text-2xl">🔐</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground text-sm">
                All swap details remain encrypted from submission to execution
              </p>
            </Card>

            <Card className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-trading-green/20 flex items-center justify-center">
                <div className="text-trading-green text-2xl">⚡</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">MEV Protection</h3>
              <p className="text-muted-foreground text-sm">
                Prevent front-running and sandwich attacks with FHE
              </p>
            </Card>

            <Card className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-trading-amber/20 flex items-center justify-center">
                <div className="text-trading-amber text-2xl">🛡️</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Confidential Execution</h3>
              <p className="text-muted-foreground text-sm">
                Execute trades without revealing order details to the network
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Swaps;