import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardSummary from "./components/DashboardSummary";
import StudentCard from "./components/StudentCard";
import DailyPracticeChart from "./components/Charts/DailyPracticeChart";
import AccuracyTrendChart from "./components/Charts/AccuracyTrendChart";
import StudentTable from "./components/StudentTable";
import AddActivityModal from "./components/AddActivityModal";
import AddMaterialForm from "./components/AddMaterialForm";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 space-y-6 bg-gray-50">
          <DashboardSummary />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DailyPracticeChart />
            <AccuracyTrendChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StudentCard />
            <AddActivityModal />
          </div>

          <AddMaterialForm />
          <StudentTable />
        </main>
      </div>
    </div>
  );
}
