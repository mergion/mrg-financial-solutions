
import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

const Calculator = () => {
  const [dailyRevenue, setDailyRevenue] = useState<number>(1000);
  const [businessAge, setBusinessAge] = useState<number>(12);
  const [creditScore, setCreditScore] = useState<number>(650);
  const [fundingAmount, setFundingAmount] = useState<number | null>(null);

  const calculateFunding = () => {
    // Base calculation: Daily revenue * 30 days * multiplier based on factors
    let baseAmount = dailyRevenue * 30;
    
    // Business age multiplier (6+ months = 1.0, 12+ months = 1.2, 24+ months = 1.5)
    let ageMultiplier = 1.0;
    if (businessAge >= 24) ageMultiplier = 1.5;
    else if (businessAge >= 12) ageMultiplier = 1.2;
    else if (businessAge < 6) ageMultiplier = 0.5;

    // Credit score multiplier (700+ = 1.3, 650+ = 1.0, below 650 = 0.8)
    let creditMultiplier = 1.0;
    if (creditScore >= 700) creditMultiplier = 1.3;
    else if (creditScore < 650) creditMultiplier = 0.8;

    // Final calculation with caps
    let calculatedAmount = baseAmount * ageMultiplier * creditMultiplier;
    
    // Cap between $5,000 and $500,000
    calculatedAmount = Math.max(5000, Math.min(500000, calculatedAmount));
    
    setFundingAmount(Math.round(calculatedAmount));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-4">
            <span className="text-sm font-medium">Funding Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mrg-primary mb-4">
            Calculate Your Potential Funding
          </h2>
          <p className="text-mrg-gray max-w-2xl mx-auto">
            Get an instant estimate of how much funding your business may qualify for based on your daily revenue and business profile.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-mrg-primary">
                  <CalculatorIcon className="w-6 h-6" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="daily-revenue">Daily Revenue</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mrg-gray w-4 h-4" />
                    <Input
                      id="daily-revenue"
                      type="number"
                      value={dailyRevenue}
                      onChange={(e) => setDailyRevenue(Number(e.target.value))}
                      className="pl-10"
                      placeholder="Enter daily revenue"
                      min="0"
                    />
                  </div>
                  <p className="text-sm text-mrg-gray">Average daily revenue over the last 3 months</p>
                </div>

                <div className="space-y-3">
                  <Label>Business Age: {businessAge} months</Label>
                  <Slider
                    value={[businessAge]}
                    onValueChange={(value) => setBusinessAge(value[0])}
                    max={60}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-mrg-gray">
                    <span>3 months</span>
                    <span>5 years</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Credit Score: {creditScore}</Label>
                  <Slider
                    value={[creditScore]}
                    onValueChange={(value) => setCreditScore(value[0])}
                    max={850}
                    min={300}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-mrg-gray">
                    <span>300</span>
                    <span>850</span>
                  </div>
                </div>

                <Button 
                  onClick={calculateFunding}
                  className="w-full primary-btn"
                >
                  Calculate Funding Amount
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-mrg-primary">
                  <TrendingUp className="w-6 h-6" />
                  Funding Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                {fundingAmount ? (
                  <div className="text-center space-y-6">
                    <div className="p-8 bg-gradient-to-br from-mrg-secondary/10 to-mrg-primary/10 rounded-lg">
                      <p className="text-sm text-mrg-gray mb-2">Estimated Funding Amount</p>
                      <p className="text-4xl font-bold text-mrg-primary">
                        {formatCurrency(fundingAmount)}
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-mrg-gray">Monthly Revenue</span>
                        <span className="font-semibold">{formatCurrency(dailyRevenue * 30)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-mrg-gray">Business Age</span>
                        <span className="font-semibold">{businessAge} months</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-mrg-gray">Credit Score</span>
                        <span className="font-semibold">{creditScore}</span>
                      </div>
                    </div>

                    <div className="bg-mrg-light p-4 rounded-lg">
                      <p className="text-sm text-mrg-gray">
                        * This is an estimate based on the information provided. Actual funding amounts may vary based on additional factors and underwriting criteria.
                      </p>
                    </div>

                    <Button 
                      className="w-full learn-more-btn"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply for Funding
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CalculatorIcon className="w-16 h-16 text-mrg-gray/30 mx-auto mb-4" />
                    <p className="text-mrg-gray">
                      Enter your business information and click "Calculate" to see your potential funding amount.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
