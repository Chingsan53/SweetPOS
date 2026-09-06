import { CircleFadingPlus } from "lucide-react";
function NewOrder() {
  return (
    <button className="flex flex-row items-center justify-center gap-1 rounded-3xl bg-newOrder pl-2 pr-2">
      <CircleFadingPlus className="size-6 text-activeButton" />
      <h1 className="font-dm text-white font-bold">New</h1>
    </button>
  );
}

export default NewOrder;
