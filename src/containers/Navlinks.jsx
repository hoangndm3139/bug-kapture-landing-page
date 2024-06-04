import Link from 'next/link'

function Navlinks(){
    return(
        <>
            <li className="mr-2 font-medium text-base"><Link href="/products">Products</Link></li>
            <li className="mr-2 font-medium text-base"><Link href="/">Use Case</Link></li>
            <li className="mr-2 font-medium text-base"><Link href="/pricing">Pricing</Link></li>
            <li className="mr-2 font-medium text-base"><Link href="/about-us">About Us</Link></li>
        </>
    )
}

export default Navlinks