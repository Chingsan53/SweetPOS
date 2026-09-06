import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Cart from "../Pages/POS/Cart";
import Orders from "../Pages/Orders/Orders";
import NewOrder from "../Pages/Orders/NewOrders";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-mainBackground">
      <div className="w-[90%] mx-auto flex flex-col gap-4 pt-4">
        {/* Terminal Header */}
        <div className="flex flex-row items-center justify-between bg-itemized p-2 rounded-2xl gap-4">
          <div className="flex flex-row items-center gap-4 p-2">
            <BuildingStorefrontIcon className="size-12 text-activeButton" />

            <div className="flex flex-col">
              <h1 className="font-dm text-xl font-bold text-subText">
                DAILY DONUTS TERMINAL
              </h1>
              <h1 className="font-dm text-4xl font-bold">Point of Sale</h1>
            </div>
          </div>
          <div className="flex flex-row gap-2 pr-4">
            <Orders />
            <NewOrder />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 md:flex-row">
          {/* Navigation Header */}
          <aside className="w-52 shrink-0">
            <Header />
          </aside>

          {/* Products */}
          <section className="flex-1 min-w-0 pl-2 pr-2">
            <ProductList />
          </section>
          <section className="w-80 shrink-0">
            <Cart />
          </section>
        </div>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
