import { Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const generateFakeOximetryData = () => {
  const oxygenSaturation = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
  return oxygenSaturation;
};

export function FollowUpTreenCard() {
  const oxygenSaturation = generateFakeOximetryData();

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Oximetria</CardTitle>
        <Gauge className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div>
          <span className="text-[#001666] justify-center items-center font-semibold flex text-2xl">{oxygenSaturation}%</span>
        </div>
      </CardContent>
    </Card>
  );
}
