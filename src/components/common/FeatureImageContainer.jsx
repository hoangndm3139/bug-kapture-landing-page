import Image from "next/image"

function FeatureImageContainer({ imageUrl }) {
    return (
        <div className="mt-6">
            <Image alt="" src={imageUrl} className="w-full rounded-lg" width={500} height={500}/>
        </div>
    )
}

export default FeatureImageContainer