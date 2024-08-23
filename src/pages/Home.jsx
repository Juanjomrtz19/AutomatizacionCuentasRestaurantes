import Header from "../components/Header";
import IconoLanding from "../components/IconoLanding";
import Eficiencia from "../assets/iconos/eficiencia-removebg-preview.png"
import Rapidez from "../assets/iconos/cronometro-removebg-preview.png"
import Innovacion from "../assets/iconos/lit_light_bulb_innovation_icon-removebg-preview.png"
import RecopilacionDatos from "../assets/iconos/magnifying_glass_icon_no_red-removebg-preview.png"
import MejorExperiencia from "../assets/iconos/mejorExperiencia-removebg-preview.png"
import Ahorro from "../assets/iconos/piggy_bank_icon_cost_reduction-removebg-preview.png"
import Footer from "../components/Footer";

const Home = () => {

    return(
        <>
        <Header/>
        <main className="p-4 text-2xl font-bold">
            <section className="bg-gray-300 p-4 rounded-lg">
                <h2 className="">Con este software su negocio hostelero mejorará en las siguientes facetas:</h2>
                <div className="grid p-4 mt-5 md:grid-cols-2">
                    <article className="flex flex-col justify-center items-center">
                        <h2 className="text-black text-center">Eficiencia</h2>
                        <IconoLanding path={Eficiencia} />
                    </article>
                    <article className="flex flex-col justify-center items-center">
                        <h2 className="text-black text-center">Rapidez</h2>
                        <IconoLanding path={Rapidez} />    
                    </article>
                    <article className="flex flex-col justify-center items-center">
                    <h2 className="text-black text-center">Innovación</h2>
                        <IconoLanding path={Innovacion} />
                    </article>
                    <article className="flex flex-col justify-center items-center">
                    <h2 className="text-black text-center">Recopilación de datos</h2>
                        <IconoLanding path={RecopilacionDatos} />    
                    </article>
                    <article className="flex flex-col justify-center items-center">
                    <h2 className="text-black text-center">Mejor experiencia</h2>
                        <IconoLanding path={MejorExperiencia} />
                    </article>
                    <article className="flex flex-col justify-center items-center">
                    <h2 className="text-black text-center">Ahorro de costes</h2>
                        <IconoLanding path={Ahorro} />
                    </article>

                </div>
            </section>
        </main>

        <Footer/>
        </>
    ) 
}

export default Home;