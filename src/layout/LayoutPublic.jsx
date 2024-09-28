import HeaderFix from "../components/HeaderFix";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const LayoutPublic = () => {

    const navigation = useNavigation();

    return (
        <>
        <HeaderFix/>
        <main className="mt-16 p-4">
            {navigation.state === "loading" && (<div>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> loading...
                 </div>)}
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}

export default LayoutPublic;