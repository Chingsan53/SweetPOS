import { ShoppingBagIcon } from "@heroicons/react/24/outline";
function Cart() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-itemized p-9">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-dm text-xl font-bold tracking-wide text-activeButton">
            CURRENT ORDER
          </span>

          <h2 className="mt-2 font-dm text-2xl font-bold text-[#10223b]">
            Your Cart
          </h2>
        </div>

        {/* Item count */}
        <div className="flex size-8 items-center justify-center rounded-full bg-activeButton">
          <span className="font-dm text-lg font-bold text-white">0</span>
        </div>
      </div>

      {/* Empty Cart */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        {/* Icon */}
        <div className="flex size-12 items-center justify-center rounded-full bg-[#fff0f0]">
          <ShoppingBagIcon className="size-6 text-activeButton" />
        </div>

        <h3 className="mt-7 font-dm text-lg font-bold text-[#10223b]">
          Your cart is empty
        </h3>

        <p className="mt-2 font-dm text-lg text-subText">
          Add an item from the menu to begin.
        </p>
      </div>

      {/* Order Summary */}
      <div className="border-t border-[#e5ded2] pt-7">
        <div className="flex items-center justify-between">
          <span className="font-dm text-lg text-subText">Subtotal</span>

          <span className="font-dm text-lg text-[#10223b]">$0.00</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-dm text-lg text-subText">Discount</span>

          <span className="font-dm text-lg text-[#10223b]">$0.00</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-dm text-lg text-subText">Tax (8.25%)</span>

          <span className="font-dm text-lg text-[#10223b]">$0.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-7 border-t border-dashed border-[#d8d0c4] pt-7">
        <div className="flex items-center justify-between">
          <span className="font-dm text-lg font-bold text-[#10223b]">
            Total
          </span>

          <span className="font-dm text-xl font-bold text-[#10223b]">
            $0.00
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-7 flex gap-4">
        <button
          type="button"
          disabled
          className="flex h-20 flex-1 items-center justify-center rounded-[22px] bg-[#f5f3ef] font-dm text-xl font-bold text-[#a5a8aa]"
        >
          Clear
        </button>

        <button
          type="button"
          disabled
          className="flex h-20 flex-[2] items-center justify-center rounded-[22px] bg-[#f7b3a7] font-dm text-xl font-bold text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
