import HeaderFix from "../components/HeaderFix";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <>
        <HeaderFix/>
        <main className="mt-16 p-4">
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}

export default LayoutPublic;