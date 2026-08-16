import cartLogo from "../../assets/cart/cart.png";
function CartLogo() {
  return (
    <div className="flex flex-row gap-2 items-center rounded-full bg-pink-200 pl-2 pr-4">
      <img src={cartLogo} alt="cartLogo" className="cart-logo w-10 h-10" />
      <div className="text-xl">5</div>
    </div>
  );
}
export default CartLogo;
