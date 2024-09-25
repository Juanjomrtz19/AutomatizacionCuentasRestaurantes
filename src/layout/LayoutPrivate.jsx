import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {useUserContext} from "../context/UserContext";
import HeaderFix from "../components/HeaderFix";
import Footer from "../components/Footer";

const LayoutPrivate = () => {
    const { user } = useUserContext();

    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/');
        }
    }, [user]);

    return(
        <>
        <HeaderFix/>
        <main className="mt-16 p-4">
            {navigate.state === "loading" && (<div>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> loading...
                 </div>)}
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}