import Sidebar from "@/components/dashboard/sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col p-20">Welcome to the dashboard</main>
    </div>
  );
};

export default DashboardPage;
