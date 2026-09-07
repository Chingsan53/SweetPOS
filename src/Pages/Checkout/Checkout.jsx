import { useNavigate } from "react-router-dom";

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
      <h1>This is the checkout page with all payment and personal info</h1>
    </div>
  );
}

export default Checkout;
