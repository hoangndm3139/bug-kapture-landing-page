import Image from 'next/image'
import Link from 'next/link'

function Navlinks() {
    return (
        <>
            <li className="dropdown">
                <div tabIndex={1} role="button" className="font-medium text-base">Products</div>
                <ul tabIndex={1} className="dropdown-content bg-white rounded-box z-[1] w-[800px] p-2 shadow -ml-[200px] flex flex-row justify-between gap-4">
                    <Link href='/' className='flex-col flex items-start flex-1 border rounded-lg hover:bg-slate-100'>
                        <Image alt="" src="/img_project.png" className="object-cover rounded-t-lg" width={600} height={500} />
                        <div className='flex justify-between items-center p-3 flex-1 w-full'>
                            <span className='font-semibold text-base'>
                                Snap your way
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </Link>
                    <Link href='/' className='flex-col flex items-start flex-1 border rounded-lg hover:bg-slate-100'>
                        <Image alt="" src="/img_project.png" className="object-cover rounded-t-lg" width={600} height={500} />
                        <div className='flex justify-between items-center p-3 flex-1 w-full'>
                            <span className='font-semibold text-base'>
                                Snap with team
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </Link>
                </ul>
            </li>
            <li className="dropdown">
                <div tabIndex={1} role="button" className="font-medium text-base">Use cases</div>
                <ul tabIndex={1} className="dropdown-content bg-white rounded-box z-[1] w-[800px] p-2 shadow -ml-[200px] flex flex-row justify-between gap-4">
                    <Link href='#snap-your-way' className='flex-col flex items-start flex-1 border rounded-lg hover:bg-slate-100'>
                        <Image alt="" src="/img_project.png" className="object-cover rounded-t-lg" width={600} height={500} />
                        <div className='flex justify-between items-center p-3 flex-1 w-full'>
                            <span className='font-semibold text-base'>
                                Snap your way
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </Link>
                    <Link href='#snap-with-team' className='flex-col flex items-start flex-1 border rounded-lg hover:bg-slate-100'>
                        <Image alt="" src="/img_project.png" className="object-cover rounded-t-lg" width={600} height={500} />
                        <div className='flex justify-between items-center p-3 flex-1 w-full'>
                            <span className='font-semibold text-base'>
                                Snap with team
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </Link>
                </ul>
            </li>
            <li className="mr-2 font-medium text-base"><Link href="#pricing">Pricing</Link></li>
            <li className="mr-2 font-medium text-base"><Link href="/about-us">About Us</Link></li>
        </>
    )
}

export default Navlinks