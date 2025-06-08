import Link from "next/link";

function Hero() {
  return (
    <div className="hero py-12">
      <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-black font-bold md:leading-none leading-tight md:mt-0 mt-10">
              Clearly articulate what Snapifies offers
            </h1>
            <h2 className="text-lg text-gray-500 font-base md:leading-none leading-tight md:mt-0 mt-10">
              Capture and Monitor Live Website Snapshots Effortlessly.​
            </h2>
          </div>
          <div className="w-full bg-[#F7CABC] border-2 border-dashed border-orange p-2 flex justify-between rounded-xl items-center gap-4">
            <span className="font-semibold">
              Use our Chrome extension to take live-refreshing screenshots and
              manage them through an intuitive dashboard.
            </span>
            <Link
              href="/"
              className="text-base font-semibold px-4 normal-case bg-orange text-white flex rounded-lg p-2 items-center gap-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
