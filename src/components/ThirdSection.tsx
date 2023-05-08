
function ThirdSection() {
    return (
        <section className="flex lg:flex-row  w-full lg:mt-16 h-[35rem] lg:h-[21rem] mb-10 bg-gradient-to-br from-[#2c2d40] to-[#3d4063] rounded-bl-[150px] rounded-tr-[150px]  mt-[20rem]">
            <div className="w-full flex-col relative lg:w-[40%] bg-[url('/images/bg-pattern-circles.svg')] bg-center lg:bg-bottom bg-cover overflow-visible flex items-center justify-center  lg:justify-end ">
                <img src="/images/illustration-phones.svg" className="lg:mt-5 lg:block absolute lg:static top-[-150px]" height="full" width="66%" />
                <div className="lg:hidden  lg:ml-auto lg:mr-auto w-[62%] scale-125 text-center mt-24  text-white overflow-visible ">
                    <h1 className="font-semibold text-4xl mb-5 text-center ">State of the Art Infrastructure</h1>
                    <p className="font-light leading-7 text-lg text-center">with reliabilty and speed in mind, worldwide data centers provide the backbone for ultra connectivity . This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
            <div className="pt-16 lg:ml-auto lg:mr-auto w-[40%] text-white overflow-visible hidden lg:block">
                <h1 className="font-semibold text-3xl mb-5">State of the Art Infrastructure</h1>
                <p className="font-light leading-7   text-md">with reliabilty and speed in mind, worldwide data centers provide the <br />backbone for ultra connectivity . This ensures your site will load instantly, <br />no matter where your readers are, keeping your site <br /> competitive.</p>
            </div>

        </section>
    )
}

export default ThirdSection