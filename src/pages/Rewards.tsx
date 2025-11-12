import { useLoyalty } from "@/contexts/LoyaltyContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, Star, Crown } from "lucide-react";

const Rewards = () => {
  const { points, tier, getDiscount, redeemPoints } = useLoyalty();

  const tierInfo = {
    Bronze: { icon: Star, color: "text-orange-600", bgColor: "bg-orange-100", minPoints: 0 },
    Silver: { icon: Star, color: "text-gray-600", bgColor: "bg-gray-100", minPoints: 200 },
    Gold: { icon: Trophy, color: "text-yellow-600", bgColor: "bg-yellow-100", minPoints: 500 },
    Platinum: { icon: Crown, color: "text-purple-600", bgColor: "bg-purple-100", minPoints: 1000 },
  };

  const TierIcon = tierInfo[tier].icon;

  const rewards = [
    { points: 50, reward: "Free Cookie" },
    { points: 100, reward: "Free Small Coffee" },
    { points: 200, reward: "Free Pastry" },
    { points: 300, reward: "Free Large Latte" },
    { points: 500, reward: "Free Any Drink" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rewards Program</h1>
            <p className="text-muted-foreground text-lg">Earn points with every purchase and unlock exclusive rewards!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Your Status</CardTitle>
                  <div className={`p-3 rounded-full ${tierInfo[tier].bgColor}`}>
                    <TierIcon className={`w-8 h-8 ${tierInfo[tier].color}`} />
                  </div>
                </div>
                <CardDescription>Current membership tier and benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Current Tier</span>
                    <Badge className={tierInfo[tier].bgColor}>{tier}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Points</span>
                    <span className="text-2xl font-bold">{points}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium">Current Discount</span>
                    <span className="text-xl font-bold text-primary">{getDiscount()}%</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold">Tier Benefits</h3>
                  {Object.entries(tierInfo).map(([tierName, info]) => (
                    <div key={tierName} className={`flex items-center justify-between p-3 rounded-lg ${tier === tierName ? info.bgColor : 'bg-muted/50'}`}>
                      <div className="flex items-center gap-3">
                        <info.icon className={`w-5 h-5 ${tier === tierName ? info.color : 'text-muted-foreground'}`} />
                        <span className={tier === tierName ? 'font-semibold' : ''}>{tierName}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {tierName === 'Bronze' ? '5%' : tierName === 'Silver' ? '10%' : tierName === 'Gold' ? '15%' : '20%'} off
                        </div>
                        <div className="text-xs text-muted-foreground">{info.minPoints}+ pts</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gift className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Redeem Rewards</CardTitle>
                </div>
                <CardDescription>Use your points for exclusive rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rewards.map((reward, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border hover:border-primary transition-colors">
                      <div>
                        <p className="font-semibold">{reward.reward}</p>
                        <p className="text-sm text-muted-foreground">{reward.points} points</p>
                      </div>
                      <Button
                        onClick={() => redeemPoints(reward.points)}
                        disabled={points < reward.points}
                        size="sm"
                      >
                        Redeem
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Earn Points</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Earn 10 points for every $1 spent</li>
                    <li>• Double points on your birthday</li>
                    <li>• Bonus points for reviews and referrals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
