
function ThirdSection() {
    return (
        <section className="flex flex-row  w-full mt-16 h-[21rem] mb-10 bg-gradient-to-br from-[#2c2d40] to-[#3d4063] rounded-bl-[150px] rounded-tr-[150px] ">
            <div className="w-[40%] bg-[url('/images/bg-pattern-circles.svg')] bg-bottom bg-cover overflow-visible flex items-center justify-end">
                <img src="/images/illustration-phones.svg" className="mt-5" height="full" width="66%" />
            </div>
            <div className="pt-16 ml-auto mr-auto w-[40%] text-white">
                <h1 className="font-semibold text-3xl mb-5">State of the Art Infrastructure</h1>
                <p className="font-light leading-7   text-md">with reliabilty and speed in mind, worldwide data centers provide the <br />backbone for ultra connectivity . This ensures your site will load instantly, <br />no matter where your readers are, keeping your site <br /> competitive.</p>
            </div>

        </section>
    )
}

export default ThirdSection