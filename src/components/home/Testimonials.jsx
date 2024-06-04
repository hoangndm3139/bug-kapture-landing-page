import Image from "next/image"

const testimonialsData = [
    { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", name: "Emily, USA", profilePic: "/img_mock_avatar.png" },
    { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", name: "Michael, USA", profilePic: "/img_mock_avatar.png" },
    { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", name: "David, Canada", profilePic: "/img_mock_avatar.png" },

]

function Testimonials() {
    return (
        <>
            <div className="grid place-items-center w-full bg-slate-50">
                <div className="max-w-6xl px-4 py-24 content-center justify-center">
                    <h1 className="text-3xl  text-center font-bold">Testimonials</h1>
                    <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            testimonialsData.map((t, k) => {
                                return (
                                    <div key={k} className="card w-full bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <Image alt="avatar" width={80} height={80} className="mask mask-circle object-cover" src={t.profilePic} />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <p>{t.text}</p>
                                            <p className="text-slate-500">-{t.name}</p>
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

export default Testimonials