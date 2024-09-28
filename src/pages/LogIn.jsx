import MsgError from "../components/MsgError";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Formik } from "formik";
import * as Yup from "yup";

const LogIn = () => {

    const onSubmit = ({email, password}) => {
        console.log(email);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email no válido").required("Email requerido"),
        password: Yup.string().trim().min(8).required("Contraseña no puede estar en blanco"),
    });

    return(
        <>
        <Logo/>
        <section className="w-full flex flex-col justify-center items-center bg-gray-300">
        
        <Formik initialValues={{email:"", password: ""}} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                ({values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
                    <form className=" grid grid-cols-1 gap-10 p-4" onSubmit={handleSubmit}>
                        <section className="flex flex-col gap-2 font-bold">
                        <label className="font-bold">Email: </label>
                        <input  name="email" value={values.email} onChange={handleChange} type="text" onBlur={handleBlur}/>
                        {errors.email && touched.email && (<MsgError msg={errors.email}/>)}
                        </section>

                        <section className="flex flex-col gap-2 font-bold">
                        <label className="font-bold"> Password: </label>
                        <input type="text" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.password && touched.password && (<MsgError msg={errors.password}/>)}
                        </section>

                        <div className="w-full flex justify-center items-center">
                            <Button msg={'Enviar'} />
                        </div>
                    </form>
                )
            }
        </Formik>
        
        
        <section className="p-4">
            <Link to='/register'><p className="pt-5">Si no esta registrado, clickeé aquí</p></Link>
        </section>
        </section>
        </>
        
    )
}

export default LogIn;