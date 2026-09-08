function PersonalDetail() {
  return (
    <div className="">
      {/* Pickup Details */}
      <div className="flex flex-col gap-4 bg-secondary rounded-2xl p-4">
        <div>
          <h1 className="font-dm font-bold text-2xl text-white">
            Pickup details
          </h1>
          <p className="font-dm text-subText text-lg">
            Choose when we should have your order ready.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <label className="text-white text-lg font-bold">
              Pickup date *
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                  workcation.com/
                </div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="janesmith"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-white text-lg font-bold">
              Pickup time *
            </label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                  workcation.com/
                </div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="janesmith"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="text-white text-lg font-bold">
            Special instructions (optional)
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
              <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                workcation.com/
              </div>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="janesmith"
                class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
          <p className="text-subText">
            Let us know about the preparation preferences or pickup notes
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetail;
