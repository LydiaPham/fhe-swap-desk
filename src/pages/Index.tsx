import Header from "@/components/Header";
import CurrencyTicker from "@/components/CurrencyTicker";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center py-12">
            <h1 className="text-5xl font-bold mb-4 text-gradient-encryption">
              Confidential FX Trading
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Execute foreign exchange swaps with full encryption until execution, 
              preventing front-running and slippage using Fully Homomorphic Encryption.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center text-trading-green">
                <div className="h-2 w-2 bg-trading-green rounded-full mr-2 pulse-trading"></div>
                Zero Front-Running
              </div>
              <div className="flex items-center text-encryption-blue">
                <div className="h-2 w-2 bg-encryption-blue rounded-full mr-2 pulse-trading"></div>
                FHE Encrypted
              </div>
              <div className="flex items-center text-trading-amber">
                <div className="h-2 w-2 bg-trading-amber rounded-full mr-2 pulse-trading"></div>
                MEV Protected
              </div>
            </div>
          </div>

          {/* Currency Ticker */}
          <CurrencyTicker />

          {/* Call to Action */}
          <div className="text-center py-8">
            <Link to="/swaps">
              <Button size="lg" className="encryption-button text-lg px-8 py-4">
                Start Trading Now
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
            <div className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-encryption-blue/20 flex items-center justify-center">
                <div className="text-encryption-blue text-2xl">🔐</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">FHE Encryption</h3>
              <p className="text-muted-foreground text-sm">
                Trade details remain encrypted throughout the entire swap process
              </p>
            </div>

            <div className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-trading-green/20 flex items-center justify-center">
                <div className="text-trading-green text-2xl">⚡</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero Slippage</h3>
              <p className="text-muted-foreground text-sm">
                Prevent front-running and MEV attacks with confidential execution
              </p>
            </div>

            <div className="terminal-card p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-trading-amber/20 flex items-center justify-center">
                <div className="text-trading-amber text-2xl">🌐</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Markets</h3>
              <p className="text-muted-foreground text-sm">
                Access major currency pairs with institutional-grade security
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
