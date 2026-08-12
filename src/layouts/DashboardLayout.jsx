import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
