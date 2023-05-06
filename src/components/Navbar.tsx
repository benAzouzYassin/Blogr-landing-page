function Navbar() {
    return (
        <div className="flex flex-row items-center pt-12 ">
            <span className="text-4xl font-bold text-white ">Blogr</span>
            <span className="flex gap-5 flex-row self-end ml-16 text-lg font-semibold text-white">
                <a href="/product" className="flex items-center hover:text-gray-200">Product<Arrow /></a>
                <a href="/company" className="flex items-center hover:text-gray-200">Company <Arrow /></a>
                <a href="/connect" className="flex items-center hover:text-gray-200">Connect <Arrow /></a>
            </span>
            <button className="text-white font-semibold hover:text-gray-300 ml-auto mr-5 p-3 pl-8 pr-8 rounded-3xl ">Login</button>
            <button className=" p-3 pl-8 pr-8 rounded-3xl bg-white  text-[#ff515b] font-semibold hover:bg-gray-200">Sign Up</button>
        </div>
    )
}

function Arrow() {
    return <div className="bg-[url('/images/icon-arrow-light.svg')] w-6 mt-1 h-[30%] bg-no-repeat bg-contain bg-center"></div>
}
export default Navbar