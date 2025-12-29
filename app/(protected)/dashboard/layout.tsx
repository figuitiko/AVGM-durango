import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col p-20 max-w-5xl w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
