import Image from "next/image";
import React from "react";

function Usecases() {
    return (
        <div id="snap-your-way" className="grid place-items-center w-full m-auto bg-white py-10">
            <h1 className="text-3xl text-center font-bold">Use cases</h1>
            <div className="lg:w-[1200px] m-auto flex flex-col gap-10">
                <div className="mt-16 flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Snap Your Way</h3>
                    <p>
                        Create your personal dashboard with live updating snapshots of any websites
                        Video section - need to finalise UI design
                    </p>
                    <h4 className="font-bold text-xl"> How it works</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-col gap-3">
                            <p className="font-semibold">
                                Step 1: Capture snapshots of any websites
                            </p>
                            <Image alt="" src='/img_project.png' className="w-full rounded-lg" width={500} height={500} />
                        </li>
                        <li className="flex flex-col gap-3">
                            <p className="font-semibold">
                                Step 2: Create dashboard
                            </p>
                            <Image alt="" src='/img_project.png' className="w-full rounded-lg" width={500} height={500} />
                        </li>
                    </ul>
                </div>
            </div>

            <div id="snap-with-team" className="lg:w-[1200px] m-auto flex flex-col gap-10">
                <div className="mt-16 flex flex-col gap-5">
                    <h3 className="font-bold text-xl">Snap With Team</h3>
                    <p className="mt-5">
                        As a part of our streamlined project management process, you can now effortlessly create snapshots of your console network details and share them with your team. This feature helps in tracking issues and facilitates better collaboration through our project management ticketing system.
                    </p>
                    <h4 className="font-bold text-xl"> How it works</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-col gap-3">
                            <p className="font-semibold">
                                Step 1: Capture snapshots of any websites
                            </p>
                            <Image alt="" src='/img_project.png' className="w-full rounded-lg" width={500} height={500} />
                        </li>
                        <li className="flex flex-col gap-3">
                            <p className="font-semibold">
                                Step 2: Create tickets
                            </p>
                            <Image alt="" src='/img_project.png' className="w-full rounded-lg" width={500} height={500} />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Usecases;