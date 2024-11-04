import { Syringe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const generateFakeBloodSugar = () => {
  const bloodSugarLevel = Math.floor(Math.random() * (200 - 70 + 1)) + 70;
  return bloodSugarLevel;
};

export function FollowUpCard() {
  const bloodSugarLevel = generateFakeBloodSugar();

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">
          Glicemia (mg/dL)
        </CardTitle>
        <Syringe className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <div>
          <span className="text-[#001666] justify-center items-center font-semibold flex text-2xl">{bloodSugarLevel} mg/dL</span>
        </div>
      </CardContent>
    </Card>
  );
}
