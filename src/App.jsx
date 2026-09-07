import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 ">
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
