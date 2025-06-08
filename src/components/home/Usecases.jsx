import Image from "next/image";
import React from "react";

function Usecases() {
  return (
    <div
      id="snap-your-way"
      className="grid place-items-center w-full m-auto bg-slate-50 py-16"
    >
      <h1 className="text-3xl text-center font-bold">Use cases</h1>
      <div className="lg:w-[1200px] m-auto flex flex-col gap-10">
        <div className="mt-16 flex flex-col gap-5">
          <h3 className="font-bold text-xl">
            Snap Your Way: Detail how individual users can benefit
          </h3>
          <p>
            Ideal for freelancers and solo developers to monitor website changes
            over time.
          </p>
          <h4 className="font-bold text-xl"> How it works</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-3">
              <p className="font-semibold">
                Step 1: Capture snapshots of any websites
              </p>
              <Image
                alt=""
                src="/img_project.png"
                className="w-full rounded-lg"
                width={500}
                height={500}
              />
            </li>
            <li className="flex flex-col gap-3">
              <p className="font-semibold">Step 2: Create dashboard</p>
              <Image
                alt=""
                src="/img_project.png"
                className="w-full rounded-lg"
                width={500}
                height={500}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Usecases;
