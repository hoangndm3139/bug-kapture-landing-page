import Link from "next/link"


function Hero() {
    return (
        <div className="hero py-12">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row">
                <div className="flex flex-col items-center">
                    <div>
                        <h1 className="text-5xl text-black font-bold md:leading-none leading-tight md:mt-0 mt-10">Lorem Ipsum</h1>
                        <p className="py-2 text-xl text-black mt-4 pr-12">is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="w-full bg-[#F7CABC] border-2 border-dashed border-orange p-2 flex justify-end rounded-xl items-center gap-4">
                        <span className="font-semibold">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </span>
                        <Link href="/" className="text-base font-semibold px-4 normal-case bg-orange text-white flex rounded-lg p-2 flex items-center gap-2">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero