import logo from "../assets/logo.png"

const Logo = () => {
    return(
        <>
        <section className="flex justify-center items-center bg-gray-300 p-4">
            <img src={logo} alt="" className="z-0 bg-contain h-48 w-48 rounded-full"/>
        </section>
        </>
    )
}

export default Logo;