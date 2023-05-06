import React from 'react'

function SecondSection() {
    return (
        <section className="h-[100vh]  pl-64 mt-36 flex flex-col ">
            <h1 className='text-4xl text-[#233f54] ml-auto mr-auto pr-44 font-semibold '>Designed for the future</h1>
            <div className='flex '>
                <div>
                    <div className='mt-24 w-[75%] leading-7'>
                        <h3 className='text-2xl font-medium  text-[#233f54]'>Introducting an extensible editor</h3>
                        <p className='text-gray-600 mt-8 font-normal text-md'>Bloger features an exceedinglt intuitive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div className='mt-16 leading-7 w-[65%]'>
                        <h3 className='text-2xl font-medium  text-[#233f54]'>Robust content management</h3>
                        <p className='mt-8 text-gray-600'>Flexible contetn management enables users to easily move through posts. Increase the usabilty of your blog by adding customized categories,sections,format,or flow. With this funtionality, you're in full control.
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