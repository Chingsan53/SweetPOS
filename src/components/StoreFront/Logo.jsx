import logo from "../../assets/logo/daily-donuts-logo.png";
function Logo() {
  return (
    <div>
      {/* logo */}
      <img
        src={logo}
        alt="daily-donuts-logo"
        className="logo-image w-24 h-24 rounded-full object-cover"
      />
    </div>
  );
}

export default Logo;
