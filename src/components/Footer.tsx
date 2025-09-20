import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const Footer = () => {
  const [sparkIndex, setSparkIndex] = useState(0);
  
  const currencyPairs = [
    "EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", 
    "USD/CHF", "EUR/GBP", "USD/CAD", "NZD/USD"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkIndex(prev => (prev + 1) % currencyPairs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm mt-8">
      <div className="container mx-auto px-4 py-8">
        {/* Animated Currency Pairs */}
        <div className="mb-6 overflow-hidden">
          <div className="flex items-center justify-center space-x-8 relative">
            {currencyPairs.map((pair, index) => (
              <div
                key={pair}
                className={`flex items-center space-x-2 transition-all duration-500 ${
                  index === sparkIndex ? 'currency-glow scale-110' : 'opacity-60'
                }`}
              >
                <span className="font-mono text-sm font-medium">{pair}</span>
                {index === sparkIndex && (
                  <div className="relative">
                    <Zap className="h-4 w-4 text-trading-green" />
                    <div className="absolute inset-0 animate-ping">
                      <Zap className="h-4 w-4 text-trading-green opacity-75" />
                    </div>
                  </div>
                )}
                {/* Digital Spark Effect */}
                {index === sparkIndex && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent via-trading-green to-transparent digital-spark"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h3 className="font-semibold mb-3 text-gradient-encryption">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">FX Markets</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Encrypted Swaps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gradient-encryption">Security</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">FHE Technology</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Audit Reports</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bug Bounty</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security Guide</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gradient-encryption">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-gradient-encryption">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Encrypted FX. Securing foreign exchange with FHE technology.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;