import { Gauge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const generateFakeBloodPressure = () => {
  const systolic = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
  const diastolic = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
  return { systolic, diastolic };
};

export function FollowUpTwoCard() {
  const { systolic, diastolic } = generateFakeBloodPressure();

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Pressão arterial</CardTitle>
        <Gauge className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div>
          <span className="text-[#001666] justify-center items-center font-semibold flex text-2xl">{systolic} mmHg X {diastolic} mmHg</span>
        </div>
      </CardContent>
    </Card>
  );
}
