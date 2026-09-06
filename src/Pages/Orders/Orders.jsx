function Orders() {
  const orderNumber = 248;
  return (
    <div>
      {/* Order Number Display */}
      <div className="font-dm  bg-orderStatus rounded-3xl p-2 pl-3 pr-3">
        <div>Order #0{orderNumber}</div>
      </div>
    </div>
  );
}

export default Orders;
