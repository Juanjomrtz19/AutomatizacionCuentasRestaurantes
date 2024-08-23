import { useEffect, useRef, useState } from "react";
import Bars from "./Bars"

const HeaderFix = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0)
    
    useEffect(() => {
        if(headerRef.current){
            setHeaderHeight(headerRef.current.clientHeight);
        }
    },[])

    return(
        <>
        <header ref={headerRef} className="fixed  top-0 w-full p-5 bg-[url('./assets/fondoHeaderFix2.jpg')] bg-cover bg-center">
            <section className="flex justify-between">
                <Bars color={'text-gray-100'} height={headerHeight}/>
                <i class="fa-solid fa-user text-gray-100"></i>
            </section>
        </header>
        </>
    );
}

export default HeaderFix;