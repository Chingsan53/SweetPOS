import CartLogo from "../CartLogo/CartLogo";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import HeaderMenu from "../StoreFront/HeaderMenu";
import Logo from "../StoreFront/Logo";
import MerchantName from "../StoreFront/MerchantName";

function Header() {
  return (
    <header className="w-full h-16 flex flex-col items-center justify-between px-6">
      <div>Point of Sale</div>
      <div className="w-full flex items-center justify-between px-6">
        {/* Page title */}
        {/* <div className="flex items-center gap-2">
          <Logo />
          <MerchantName />
        </div> */}

        {/* User Menus */}

        <HeaderMenu />

        {/* Notification */}
        <div className="flex flex-row gap-2">
          {/* User menu */}
          <CustomerProfile />
          {/* Cart */}
          <CartLogo />
        </div>
      </div>
    </header>
  );
}

export default Header;
