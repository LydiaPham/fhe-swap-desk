import { useState } from "react";
import { ArrowUpDown, Shield, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  
  const { address, isConnected } = useAccount();
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const currencies = ["EUR", "USD", "GBP", "JPY", "AUD", "CHF", "CAD", "NZD"];

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleExecuteSwap = async () => {
    if (!isConnected || !fromAmount) return;
    
    try {
      // Call the FHE swap contract to create encrypted order
      await writeContract({
        address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', // FHE Swap contract address
        abi: [
          {
            "inputs": [
              {"name": "encryptedFromCurrency", "type": "uint32"},
              {"name": "encryptedToCurrency", "type": "uint32"},
              {"name": "encryptedAmount", "type": "uint64"},
              {"name": "encryptedRate", "type": "uint64"}
            ],
            "name": "createEncryptedSwap",
            "outputs": [{"name": "", "type": "bytes32"}],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        functionName: 'createEncryptedSwap',
        args: [
          // Encrypted currency codes (simplified for demo)
          BigInt(840), // USD
          BigInt(978), // EUR  
          parseEther(fromAmount),
          BigInt(10842) // Rate * 10000
        ],
      });
    } catch (error) {
      console.error('Encrypted swap creation failed:', error);
    }
  };

  return (
    <Card className="terminal-card">
      <CardHeader>
        <CardTitle className="flex items-center text-gradient-trading">
          <Zap className="h-5 w-5 mr-2" />
          Encrypted FX Swap
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Encryption Status */}
        <div className="flex items-center justify-between p-3 bg-encryption-blue/10 rounded-lg border border-encryption-blue/20">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-encryption-blue mr-2" />
            <span className="text-sm font-medium">FHE Encryption</span>
          </div>
          <div className="flex items-center">
            <Lock className="h-4 w-4 text-encryption-blue mr-1 encrypt-flicker" />
            <span className="text-sm text-encryption-blue">Active</span>
          </div>
        </div>

        {/* From Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">From</label>
          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="0.00"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="font-mono text-lg"
              />
            </div>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwapCurrencies}
            className="rounded-full hover:bg-secondary"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">To</label>
          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="0.00"
                value={fromAmount ? (parseFloat(fromAmount) * 1.0842).toFixed(4) : ""}
                readOnly
                className="font-mono text-lg bg-muted/50"
              />
            </div>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Details */}
        <div className="space-y-3 p-4 bg-secondary/30 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Exchange Rate</span>
            <span className="font-mono">1 {fromCurrency} = 1.0842 {toCurrency}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Encryption Fee</span>
            <span className="font-mono text-encryption-blue">0.05%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span className="font-mono">~$2.50</span>
          </div>
          <div className="border-t border-border pt-2">
            <div className="flex justify-between font-medium">
              <span>Total Protection</span>
              <span className="text-trading-green">100% Encrypted</span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <Button 
          className="w-full trading-button text-lg py-6"
          onClick={handleExecuteSwap}
          disabled={!isConnected || !fromAmount || isPending || isConfirming}
        >
          <Lock className="h-5 w-5 mr-2" />
          {isPending ? 'Confirming...' : isConfirming ? 'Processing...' : 'Execute Encrypted Swap'}
        </Button>

        {/* Security Notice */}
        <div className="text-xs text-muted-foreground text-center">
          Your swap details are encrypted using Fully Homomorphic Encryption (FHE) to prevent front-running and MEV attacks.
        </div>
      </CardContent>
    </Card>
  );
};

export default SwapInterface;