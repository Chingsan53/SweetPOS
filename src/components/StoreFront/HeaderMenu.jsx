import { Squares2X2Icon } from "@heroicons/react/24/outline";
function HeaderMenu() {
  return (
    <div className="flex flex-col gap-4 border-1 rounded-2xl p-4 bg-secondary">
      <div className="text-xl font-bold text-white">Categories</div>
      <div className="flex flex-row gap-2 items-center">
        <Squares2X2Icon className="size-6 text-white" />
        <div className="text-sm font-bold text-white">All Items</div>
      </div>
      <div>
        <div className="text-sm font-bold text-white">Pastries</div>
      </div>

      <div className="text-sm font-bold text-white">Sandwiches</div>
      <div className="text-sm font-bold text-white">Donuts</div>
      <div className="text-sm font-bold text-white">Smoothies</div>
    </div>
  );
}

export default HeaderMenu;
