import { openModal } from "@/store/modalSlice"
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil"
import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const freePointers = [
    "Feature 1",
    "Feature 2"
]

const advancePointers = [
    "Feature 1",
    "Feature 2",
    "Advance Feature 1",
    "Advance Feature 2",
    "Advance Feature 3",
    "Advance Feature 4",
]

const professionalPointers = [
    "Feature 1",
    "Feature 2",
    "Advance Feature 1",
    "Advance Feature 2",
    "Advance Feature 3",
    "Professional Feature 1",
    "Professional Feature 2",
    "Professional Feature 3",
    "Professional Feature 4",
]


function PricingPlans() {

    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const { isLoggedIn } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const openPaymentPage = async (paymentType) => {
        if (!isLoggedIn) {
            dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }))
            return 1;
        }
        setLoading(true)
        console.log("Handle payment here")
        setLoading(false)
    }

    const [price, setPrice] = useState("yearly")


    return (
        <>
            <div className="flex justify-center mt-6" >
                <div className="flex gap-8">
                    <button className={`hover:bg-slate-200 p-2 rounded-lg font-medium text-[18px] min-w-24 ${price === "yearly" && 'border bg-slate-100'}`} onClick={() => setPrice("yearly")}>Yearly</button>
                    <button className={`hover:bg-slate-200 p-2 rounded-lg font-medium text-[18px] min-w-24 ${price === "monthly" && 'border bg-slate-100'}`} onClick={() => setPrice("monthly")}>Monthly</button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-2 w-full gap-8'>
                <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
                    <div className="card-body pt-12 pb-16 items-center">
                        <h2 className="card-title text-xl">Free</h2>
                        <h2 className="font-bold mt-4 text-4xl">$0</h2>
                        <Link href='/start-designing' className="w-full"><button className="btn !hover:text-white btn-sm mt-8 w-full btn-outline normal-case ">Start Your Project</button></Link>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    freePointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" />  {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
                    <div className="card-body pt-12 pb-16 items-center  ">
                        <div className="absolute -left-1 -top-7 p-3"><Image src="/img_most_popular.png" width={100} height={150} /></div>
                        <h2 className="card-title text-xl text-center">Advance </h2>
                        <h2 className="font-bold mt-4 text-4xl text-center inline-block">{price === "yearly" ? `$5` : `$8`} {price === "yearly" && <span className="text-xl line-through text-orange align-middle mr-2">$8</span>}<span className="text-xs align-middle font-light text-slate-500">/monthly</span></h2>
                        <button className="btn btn-sm mt-8 btn-primary normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    advancePointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
                    <div className="card-body pt-12 pb-16 items-center  ">
                        <h2 className="card-title text-xl text-center">Professional </h2>
                        <h2 className="font-bold mt-4 text-4xl text-center inline-block">{price === "yearly" ? `$12` : `$15`} {price === "yearly" && <span className="text-xl line-through text-orange align-middle mr-2">$15</span>}<span className="text-xs align-middle font-light text-slate-500">/monthly</span></h2>
                        <button className="btn btn-sm mt-8 btn-outline normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
                        <div className="w-full mt-4">
                            <ul>
                                {
                                    professionalPointers.map((p, k) => {
                                        return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}


export default PricingPlans