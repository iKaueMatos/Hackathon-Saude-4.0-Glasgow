import { Helmet } from 'react-helmet-async';
import { PrescriptionHistoryChart } from './prescription-history-chart';
import { FollowUpTreenCard } from './follow-up-treen-card';
import { FollowUpTwoCard } from './follow-up-two-card';
import { FollowUpCard } from './follow-up-card';

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="flex flex-col justify-center w-full gap-4 px-4 mx-auto my-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-medium tracking-tight">Resumo da Sua Saúde</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <FollowUpCard />
          <FollowUpTwoCard />
          <FollowUpTreenCard/>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4">
            <div className="w-full">
              <PrescriptionHistoryChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
