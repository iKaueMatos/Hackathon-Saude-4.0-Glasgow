import { useQuery } from '@tanstack/react-query';
import { addMonths, format } from 'date-fns';
import { useMemo, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import colors from 'tailwindcss/colors';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { ptBR } from 'date-fns/locale';

interface MonthlyPrescriptionData {
  month: string;
  prescriptions: number;
}

const generateFakeMonthlyPrescriptionData = (): MonthlyPrescriptionData[] => {
  const currentDate = new Date();
  const fakeData: MonthlyPrescriptionData[] = [];
  for (let i = 0; i < 12; i++) {
    const date = addMonths(currentDate, -i);
    const monthName = format(date, 'MMMM',  { locale: ptBR });
    const prescriptionsCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    fakeData.unshift({ month: monthName, prescriptions: prescriptionsCount });
  }
  return fakeData.reverse();
};

export function PrescriptionHistoryChart() {
  const [dateRange] = useState({
    from: addMonths(new Date(), -11),
    to: new Date(),
  });

  const { data: monthlyPrescriptionData = [], isLoading } = useQuery<MonthlyPrescriptionData[]>({
    queryKey: ['metrics', 'monthly-prescription-data', dateRange],
    queryFn: () =>
      new Promise<MonthlyPrescriptionData[]>((resolve) => {
        const fakeData = generateFakeMonthlyPrescriptionData();
        setTimeout(() => resolve(fakeData), 1000);
      }),
    enabled: true,
  });

  const chartData = useMemo(
    () =>
      monthlyPrescriptionData.map((data) => ({
        month: data.month,
        prescriptions: data.prescriptions,
      })),
    [monthlyPrescriptionData]
  );

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Histórico de Prescrições de Losartana potássica
          </CardTitle>
          <CardDescription>
            Acompanhe a quantidade de prescrições de Losartana potássica ao longo dos últimos 12 meses.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Label>Período</Label>
        {isLoading ? (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                dataKey="prescriptions"
                stroke={colors.blue[500]}
                strokeWidth={2}
                dot={{ stroke: colors.blue[500], fill: '#fff', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
