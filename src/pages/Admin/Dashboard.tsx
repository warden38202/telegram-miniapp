import StatsCards from '../../components/StatsCard';
import CasesTable from './CasesTable';

function Dashboard() {
  return (
    <div className="w-4/5 p-8">
      <StatsCards />
      <CasesTable />
    </div>
  );
}

export default Dashboard;
