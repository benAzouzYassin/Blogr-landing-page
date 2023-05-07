import Navbar from "./Navbar"

function LandingSection() {
    return (
        <section className=" h-[100vh]  bg-gradient-to-r from-[#ff806d] to-[#ff4759] rounded-bl-[150px]" >
            <div className="lg:bg-[url('/images/bg-pattern-intro-desktop.svg')] lg:bg-cover lg:overflow-hidden lg:bg-left">
                <div className="lg:pr-64 lg:pl-64 pl-5 pr-5 text-center">
                    <Navbar />
                    <main className=" flex flex-col h-[75vh] justify-center items-center">
                        <h1 className="text-white text-6xl font-semibold ">A modern publishing platform</h1>
                        <p className="mt-12 text-4xl lg:text-2xl font-light text-white">Grow your buisness and build your online brand</p>
                        <div className=" gap-16 lg:gap-5 flex mt-12 ">
                            <button className=" hover:bg-gray-200 bg-white p-3 pl-5 pr-5 rounded-3xl text-[#fb7662] font-bold scale-125 lg:scale-100 ">Start for free</button>
                            <button className="border-solid border-white border-2 p-3 pl-5 pr-5 rounded-3xl text-white font-bold hover:bg-[#ff806d] scale-125 lg:scale-100">Learn more </button>
                        </div>

                    </main>
                </div>
            </div>
        </section>
    )
}


export default LandingSection