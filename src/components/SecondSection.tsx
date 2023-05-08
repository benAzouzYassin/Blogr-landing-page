
function SecondSection() {
    return (
        <section className="lg:h-[90vh] h-fit lg:pl-64 mt-44  flex flex-col  lg:scale-100  overflow-hidden ">
            <h1 className='text-4xl text-[#233f54] justify-self-center lg:pr-44 font-semibold text-center mb-5'>Designed for the future</h1>
            <img className="lg:hidden" src="images/illustration-editor-mobile.svg" />
            <div className='flex flex-col lg:flex-row'>
                <div className="flex flex-col items-center pl-10 pr-10 ">
                    <div className='mt-24 lg:w-[75%] leading-7 '>
                        <h3 className='text-3xl lg:text-2xl font-medium  text-[#233f54] text-center lg:text-left'>Introducting an extensible editor</h3>
                        <p className='lg:text-base text-xl     text-gray-600 mt-8 font-normal text-md lg:px-0 px-10 text-center lg:text-left'>Bloger features an exceedinglt intuitive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div className='mt-16 leading-7 lg:w-[75%]'>
                        <h3 className='text-3xl lg:text-2xl font-medium  text-[#233f54] text-center lg:text-left'>Robust content management</h3>
                        <p className='mt-8 text-gray-600 lg:px-0 px-10 text-center lg:text-left text-xl lg:text-base'>Flexible contetn management enables users to easily move through posts. Increase the usabilty of your blog by adding customized categories,sections,format,or flow. With this funtionality, you're in full control.
                        </p>
                    </div>
                </div>
                <div className='bg-[url("/images/illustration-editor-desktop.svg")]  bg-contain bg-no-repeat  bg-center w-full h-full scale-125'>
                </div>
            </div>

        </section>
    )
}
export default SecondSection