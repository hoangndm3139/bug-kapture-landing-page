import Link from "next/link"
import FeatureImageContainer from "../common/FeatureImageContainer"



function FeatureSection({title, leftText, showHeading}){
    return(
        <>
        {showHeading && <h2 className="text-3xl mt-12 text-center font-bold">Unveiling Our Potential</h2>}
        <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
            <div className="max-w-6xl px-4 py-12 content-center justify-center">
                <div className="grid  md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        !leftText && <FeatureImageContainer imageUrl="/img_project.png"/>
                    }
                    
                    <div className="text-center py-24">
                        <h2 className="text-2xl  text-center leading-10 font-bold"> {title}</h2>
                        <Link href="/"><button className="btn btn-primary mt-8 px-8 normal-case">Get Started</button></Link>
                    </div>

                    {
                        leftText && <FeatureImageContainer imageUrl="/img_project.png"/>
                    }
            </div>
            </div>
        </div>
        </>
    )
}

export default FeatureSection