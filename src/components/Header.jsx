import { useEffect, useState } from "react";
import HeaderFix from "./HeaderFix";

const Header = () => {

const [scrollPosition, setScrollPosition] = useState(0);
useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


return(
    <>
    <header className={`bg-[url('./assets/restaurante_movil.jpg')] bg-cover bg-no-repeat flex justify-center h-96 w-full items-center text-gray-100 ${scrollPosition > 384 ? '' : 'flex'} }`}>
        <h1 className="text-3xl font-bold p-10">Automatiza las comandas de tus clientes con <span className="text-purple-700">COMANDADIRECTA</span></h1>
    </header>
    
    {scrollPosition > 384 && (<HeaderFix/>)}
    </>
);

}

export default Header;