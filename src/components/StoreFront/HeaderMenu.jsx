import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Croissant, Sandwich, Donut, CupSoda } from "lucide-react";
function HeaderMenu() {
  return (
    <div className="w-full rounded-xl p-6 bg-secondary flex flex-col gap-4">
      <div className="mb-8 font-dm text-2xl font-bold text-white">
        Categories
      </div>
      <button type="button" className="flex w-full items-center gap-2">
        <Squares2X2Icon className="size-7 text-white" />

        <span className="font-bold text-white">All Items</span>
      </button>
      <button type="button" className="flex w-full items-center gap-2">
        <Croissant className="size-7 text-white" />

        <span className="font-bold text-white">Pastries</span>
      </button>
      <button type="button" className="flex w-full items-center gap-2">
        <Sandwich className="size-7 text-white" />

        <span className="font-bold text-white">Sandwiches</span>
      </button>

      <button type="button" className="flex w-full items-center gap-2">
        <Donut className="size-7 text-white" />

        <span className="font-bold text-white">Donuts</span>
      </button>
      <button type="button" className="flex w-full items-center gap-2">
        <CupSoda className="size-7 text-white" />

        <span className="font-bold text-white">Drinks</span>
      </button>
    </div>
  );
}

export default HeaderMenu;
