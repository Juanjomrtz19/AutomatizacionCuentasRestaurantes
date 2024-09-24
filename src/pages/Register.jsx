import Logo from "../components/Logo";
import Button from "../components/Button";

const Register = () => {
    return(
        <>
            <Logo/>
            
            <section className="w-full flex flex-col justify-center items-center bg-gray-300">
                <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
                    <section className="flex flex-col lg:flex-row gap-2 font-bold">
                    <label className="pr-4">Nombre restaurante: </label>
                    <input type="text"/>
                    </section>
                    
                    <section className="flex flex-col lg:flex-row gap-2 font-bold">
                    <label className="pr-4">Correo dirigente del restaurante: </label>
                    <input type="text"/>
                    </section>

                    <section className="flex flex-col lg:flex-row gap-2 font-bold lg:col-span-2">
                    <label className="pr-4">Dirección física completa del establecimiento: </label>
                    <textarea name="" id="" className="w-full"></textarea>
                    </section>

                    <section className="flex flex-col lg:flex-row gap-2 font-bold">
                        <label className="pr-4">Contraseña:</label>
                        <input type="password" />
                    </section>

                    <section className="flex flex-col lg:flex-row gap-2 font-bold">
                        <label className="pr-4">Carta del restaurante:</label>
                        <input type="file" />
                    </section>

                    <section className="w-full flex justify-center items-center">
                        <Button msg={'Enviar'} />
                    </section>
                    
                </form>

            </section>
        </>
    )
}

export default Register;