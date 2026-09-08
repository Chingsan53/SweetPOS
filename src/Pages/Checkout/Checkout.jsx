import { useNavigate } from "react-router-dom";
import PersonalDetail from "./PersonalDetail";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex h-20 flex-[2] items-center justify-center rounded-[22px] bg-activeButton font-dm text-xl font-bold text-white cursor-pointer"
      >
        Back
      </button>

      <div className="flex flex-row">
        <PersonalDetail />
      </div>
    </div>
  );
}

export default Checkout;
