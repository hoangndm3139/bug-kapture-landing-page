import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import ArrowDownOnSquareIcon from '@heroicons/react/24/outline/ArrowDownOnSquareIcon'
import ArrowUpOnSquareIcon from '@heroicons/react/24/outline/ArrowUpOnSquareIcon'

const generationStepData = [
    { icon: <ArrowUpOnSquareIcon className='w-10 h-10 inline-block mr-2' />, description: "Step 1 Desciption" },
    { icon: <DocumentTextIcon className='w-10 h-10 inline-block mr-2' />, description: "Step 2 Desciption" },
    { icon: <ArrowDownOnSquareIcon className='w-10 h-10 inline-block mr-2' />, description: "Step 3 Desciption" },
]

function GenerationStep() {
    return (
        <>
            <div className="grid place-items-center bg-slate-50 w-full ">
                <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
                    <h2 className="text-3xl  text-center font-bold">Simple Steps</h2>
                    <div className='mt-12 lg:flex justify-evenly hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="29" viewBox="0 0 82 29" fill="none" class="mdl-js">
                            <path d="M78.7579 13.679L79.8989 20.8159C79.8989 20.8159 81.2497 28.2987 80.624 28.0357M80.624 28.0357C80.624 28.0357 77.4568 25.9551 75.4412 25.0561C72.967 23.9525 69.3096 22.685 69.3096 22.685M80.624 28.0357C75.726 18.0645 60.8342 3.08096 42.9984 1.99997C24.4935 0.878426 10.3243 8.75092 1.50161 25.0558" stroke="#CCCCCC" stroke-width="1.92963" stroke-linecap="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="29" viewBox="0 0 82 29" fill="none" class="mdl-js">
                            <path d="M78.7579 13.679L79.8989 20.8159C79.8989 20.8159 81.2497 28.2987 80.624 28.0357M80.624 28.0357C80.624 28.0357 77.4568 25.9551 75.4412 25.0561C72.967 23.9525 69.3096 22.685 69.3096 22.685M80.624 28.0357C75.726 18.0645 60.8342 3.08096 42.9984 1.99997C24.4935 0.878426 10.3243 8.75092 1.50161 25.0558" stroke="#CCCCCC" stroke-width="1.92963" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="grid mt-3 md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            generationStepData.map((i, k) => {
                                return (
                                    <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                        <div className="grid -mt-4 place-items-center">
                                            <div className="w-8 h-8  rounded-full  bg-[#D94B3B] text-slate-100 flex font-bold justify-center items-center">
                                                <p>{k + 1}</p>
                                            </div>
                                        </div>
                                        <div className="card-body items-center text-center">
                                            <p>{i.icon}</p>
                                            <p className='mt-2'> {i.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerationStep