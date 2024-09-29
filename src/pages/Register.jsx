import Logo from "../components/Logo";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import MsgError from "../components/MsgError";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
    
    const navigate = useNavigate();

    const initialState = {
        restaurant_name: '',
        email:'',
        address: '',
        password: '',
        path_menu: ''
    };

    const onSubmit = async (values) => {

        try{
            const response = await fetch('https://eabc-213-194-154-122.ngrok-free.app:8000/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo ha ido mal en el registro",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });  
            } else{

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                  });
        
                navigate("/login");
            }
        } catch (error) {
            let errorMessage = '';
        
            // Revisar si es un problema de red o un error de respuesta
            if (error instanceof TypeError && error.message === 'Failed to fetch') {
                errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión a Internet o si el servidor está activo.';
            } else {
                errorMessage = error.message || 'Ocurrió un error desconocido. Intenta nuevamente o contacta al soporte.';
            }
        
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
            
            console.error("Detalle del error:", error);  // Imprime más detalles en la consola
        }
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email no válido").required("Email requerido"),
        password: Yup.string().trim().min(8).required("Contraseña no puede estar en blanco"),
        restaurant_name: Yup.string().trim().required("El nombre del restaurante no puede estar vacio"),
        address: Yup.string().trim().required("La dirección no puede estar en blanco")
    })

    return(
        <>
            <Logo/> 
            
            <section className="w-full flex flex-col justify-center items-center bg-gray-300">
                <Formik onSubmit={onSubmit} initialValues={initialState} validationSchema={validationSchema}>
                    {({ values, handleChange, handleSubmit, errors, touched, handleBlur}) => (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
                        <section className="flex flex-col lg:flex-row gap-2 font-bold">
                        <label className="pr-4">Nombre restaurante: </label>
                        <input type="text" value={values.restaurant_name} onChange={handleChange} name="restaurant_name" onBlur={handleBlur}/>
                        {errors.restaurant_name && touched.restaurant_name && (<MsgError msg={errors.restaurant_name}/>)}
                        </section>
                        
                        <section className="flex flex-col lg:flex-row gap-2 font-bold">
                        <label className="pr-4">Correo dirigente del restaurante: </label>
                        <input type="text" value={values.email} onChange={handleChange} name="email" onBlur={handleBlur}/>
                        {errors.email && touched.email && (<MsgError msg={errors.email}/>)}
                        </section>

                        <section className="flex flex-col lg:flex-row gap-2 font-bold lg:col-span-2">
                        <label className="pr-4">Dirección física completa del establecimiento: </label>
                        <textarea id="" className="w-full" value={values.address} onChange={handleChange} name="address" onBlur={handleBlur}></textarea>
                        {errors.address && touched.address && (<MsgError msg={errors.address}/>)}
                        </section>

                        <section className="flex flex-col lg:flex-row gap-2 font-bold">
                            <label className="pr-4">Contraseña:</label>
                            <input type="password" value={values.password} onChange={handleChange} name="password" onBlur={handleBlur}/>
                            {errors.password && touched.password && (<MsgError msg={errors.password}/>)}
                        </section>

                        <section className="flex flex-col lg:flex-row gap-2 font-bold">
                            <label className="pr-4">Carta del restaurante:</label>
                            <input type="text" value={values.path_menu} onChange={handleChange} name="path_menu"/>
                        </section>

                        <section className="w-full flex justify-center items-center">
                            <Button msg={'Enviar'} />
                        </section>
                        
                    </form>)
                    }
                </Formik>
            </section>
        </>
    )
}

export default Register;