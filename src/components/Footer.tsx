import React from 'react'

function Footer() {
    return (
        <footer className='h-fit mt-32 bg-[#24242c] text-center rounded-tr-[100px] gap-5 grid grid-cols-1  lg:grid-cols-4 w-full text-white
        p-10 lg:pr-64 lg:pl-64 '>
            <div className='h-full  font-bold text-3xl  ml-auto mr-auto'>Blogr</div>
            <div className='flex flex-col ml-auto mr-auto '>
                <span className='mt-5 mb-5'>Product</span>
                <div className='text-sm font-light flex ml-auto mr-auto flex-col lg:mt-5 leading-6  lg:text-left'>
                    <a href='#' className='lg:w-fit' >Oreview</a>
                    <a href='#' className='lg:w-fit' >Pricing</a>
                    <a href='#' className='lg:w-fit' >Marketplace</a>
                    <a href='#' className='lg:w-fit' >Features</a>
                    <a href='#' className='lg:w-fit' >Integrations</a>
                </div>
            </div>
            <div className='flex flex-col ml-auto mr-auto'>
                <span>Company</span>
                <div className='text-sm font-light flex flex-col mt-5 leading-6'>

                    <a href='#' className='lg:w-fit' >About</a>
                    <a href='#' className='lg:w-fit' >Team</a>
                    <a href='#' className='lg:w-fit' >Blog</a>
                    <a href='#' className='lg:w-fit' >Career</a>
                </div>
            </div>
            <div className='flex flex-col leading-6 ml-auto mr-auto'>
                <span>Connecet</span>
                <div className='text-sm font-light flex flex-col mt-5 leading-6'>

                    <a href='#' className='lg:w-fit' >Contact</a>
                    <a href='#' className='lg:w-fit' >NewsLetter</a>
                    <a href='#' className='lg:w-fit' >Linkedin</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer