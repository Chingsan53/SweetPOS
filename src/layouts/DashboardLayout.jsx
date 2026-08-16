import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* full-width header */}
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
