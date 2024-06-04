import Image from "next/image"
import Link from "next/link"


function Hero() {
    return (
        <div className="hero py-12 bg-gradient-to-t from-[#ffbc2c] to-[#D94B3B]">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">Lorem Ipsum</h1>
                    <p className="py-2 text-xl text-slate-100 mt-4 pr-12">is simply dummy text of the printing and typesetting industry.</p>
                    <Link href="/"><button className="btn text-lg lg:mt-16 px-12 btn-primary normal-case">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button></Link>
                </div>
                <Image src="/img_project.png" className="object-cover rounded-lg shadow-2xl mt-10 lg:mt-0" width={600} height={500} />
            </div>
        </div>
    )
}

export default Hero