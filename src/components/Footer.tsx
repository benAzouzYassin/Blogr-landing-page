import React from 'react'

function Footer() {
    return (
        <footer className='h-[30vh] mt-24 bg-[#24242c] rounded-tr-[100px] grid grid-cols-4 w-full text-white
        p-10 pr-64 pl-64'>
            <div className='h-full font-bold text-3xl'>Blogr</div>
            <div className='flex flex-col'>
                <span>Product</span>
                <div className='text-sm font-light flex flex-col mt-5 leading-6'>
                    <a href='#' className='w-fit' >Oreview</a>
                    <a href='#' className='w-fit' >Pricing</a>
                    <a href='#' className='w-fit' >Marketplace</a>
                    <a href='#' className='w-fit' >Features</a>
                    <a href='#' className='w-fit' >Integrations</a>
                </div>
            </div>
            <div className='flex flex-col'>
                <span>Company</span>
                <div className='text-sm font-light flex flex-col mt-5 leading-6'>

                    <a href='#' className='w-fit' >About</a>
                    <a href='#' className='w-fit' >Team</a>
                    <a href='#' className='w-fit' >Blog</a>
                    <a href='#' className='w-fit' >Career</a>
                </div>
            </div>
            <div className='flex flex-col leading-6'>
                <span>Connecet</span>
                <div className='text-sm font-light flex flex-col mt-5 leading-6'>

                    <a href='#' className='w-fit' >Contact</a>
                    <a href='#' className='w-fit' >NewsLetter</a>
                    <a href='#' className='w-fit' >Linkedin</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer