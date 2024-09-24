import { useState } from "react";
import MsgError from "../components/MsgError";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const LogIn = () => {
    
    const [loginFields, setloginFields] = useState({
        email: '',
        password:''
    });

    const [emailError, setEmailError] = useState(true);

    const addField = (e) => {
        setloginFields({
            ...loginFields,
            [e.target.name]: e.target.value
        });        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regexEmial = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regexEmial.test(loginFields.email)){
            setEmailError(true);
        } else{
            setEmailError(false);
        }

        if(emailError){

        }
    }

    console.log(loginFields.password);


    return(
        <>
        <Logo/>
        <section className="w-full flex flex-col justify-center items-center bg-gray-300">
        <form className=" flex flex-col w-3/4" onSubmit={handleSubmit}>
            <label className="font-bold">Email: </label>
            <input className="mb-4" name="email" value={loginFields.email} onChange={addField} type="text" />
            {emailError ? '' : <MsgError msg="Esto no es un email valido, ingrese otro" />}


            <label className="font-bold"> Password: </label>
            <input type="text" name="password" value={loginFields.password} onChange={addField}  />
            
            <div className="w-full flex justify-center items-center">
                <Button msg={'Enviar'} />
            </div>
        </form>
        <section className="p-4">
            <Link to='/register'><p className="pt-5">Si no esta registrado, clickeé aquí</p></Link>
        </section>
        </section>
        </>
        
    )
}

export default LogIn;