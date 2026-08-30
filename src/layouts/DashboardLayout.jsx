import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* full-width header */}
      <Header />
      <ProductList />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
