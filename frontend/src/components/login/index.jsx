import { Container } from "./styles";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from "react-toastify";
import { useContext } from "react";

import api from "../../services/api";
import { ContextsAll } from "../../context/contextsAll";



// import { motion } from "framer-motion";


const Login = () => {
    

    const {setUserData} = useContext(ContextsAll)

    const loginSchema = yup.object().shape({
        email: yup.string().email('Deve ser um e-mail').required('Email obrigatório'),
        password: yup.string().required('senha obrigatória')
    })



    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(loginSchema)
    })
    

    const navigate = useNavigate();

    function handleClick() {
        navigate("/register");
        // console.log("fechar")  
    }


    function onHandleSubmit(data){
        
        api.post('/login', data)
        .then((res) => {
            
            const { token} = res.data
            const { id } = res.data.user

            window.localStorage.clear()
            window.localStorage.setItem('@project:token', token)
            window.localStorage.setItem('@project:id', id)
            // setIsLoggedIn(true)
            setUserData(res.data.user)
            api.defaults.headers.authorization = `Bearer ${token}`
            navigate('/home')
            toast.success('Login realizado')
        })
        // .catch((err)=>console.log(err.response.data.message))
        // .catch(()=>toast.error(`Algo deu errado`))
        .catch((err)=>toast.error(`${err.response.data.message}`))
    }
    
    return (
        <Container>
            {/* <img src='' alt="" /> */}

            <div className="formLogin">
                <h3>Login</h3>

                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" {...register('email')}/>
                    <span>{errors.email && errors.email.message}</span>
                    
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" autoComplete="" {...register('password')}/>
                    <span>{errors.password && errors.password.message}</span>

                    <button className="button1" type="submit">Entrar</button>
                </form>
                <div className="register">
                    <span>Ainda não possui uma conta?</span>
                    <button className="button2" onClick={handleClick}>Registrar</button>
                </div>
            </div>
        </Container>
    );
};

export default Login;
