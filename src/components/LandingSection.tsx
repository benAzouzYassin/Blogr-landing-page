import Navbar from "./Navbar"

function LandingSection() {
    return (
        <section className=" h-[100vh]  bg-gradient-to-r from-[#ff806d] to-[#ff4759]" >
            <div className="h-full w-full lg:bg-[url('/images/bg-pattern-intro-desktop.svg')] bg-cover overflow-hidden bg-left">
                <div className="pr-64 pl-64 ">
                    <Navbar />

                </div>
            </div>
        </section>
    )
}


export default LandingSection