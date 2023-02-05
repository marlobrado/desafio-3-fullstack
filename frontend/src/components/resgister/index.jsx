import { Container, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";
import Input from "../Input";
import api from "../../services/api";
import { toast } from "react-toastify";
// import api from "../../services/api";

const Register = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        fullName: yup.string().required("Nome obrigatório"),
        email: yup
            .string()
            .required("E-mail obrigatório")
            .email("Este e-mail náo é valido"),
        password: yup.string().required("Deve conter uma senha"),
        // .matches(
        //     /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        //     "Mensagem caso não passe na verificação."
        // ),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password")], "Confirmação deve ser iguar a senha"),
        telephone: yup.string().required("Telefone Obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onHandleSubmit(data) {
        console.log(data);
        console.log("clicou nessa budega");
        api.post("/users", data)
            .then((response) => {
                toast.success("Conta criada com sucesso!");
                console.log(response.data);
                navigate("/login");
            })
            .catch((err) => {
                toast.error(`${err.response.data.message}`);
            });
    }

    function handleClick() {
        navigate("/login");
    }

    return (
        <>
            <div className="divFormulario">
                <Container>
                    <h3> Crie sua conta</h3>
                    <FormContainer onSubmit={handleSubmit(onHandleSubmit)}>
                        <Input
                            id="fullName"
                            placeholder="Digite aqui seu nome"
                            label="Nome"
                            {...register("fullName")}
                            error={errors?.fullName}
                        />

                        <Input
                            id="email"
                            placeholder="Digite aqui seu email"
                            label="E-mail"
                            {...register("email")}
                            error={errors?.email}
                        />

                        <Input
                            id="password"
                            placeholder="Digite aqui sua senha"
                            label="Senha"
                            {...register("password")}
                            error={errors?.password}
                            type="password"
                            autoComplete=""
                        />

                        <Input
                            id="confirm_password"
                            placeholder="Digite novamente sua senha"
                            label="Confirmar Senha"
                            {...register("confirm_password")}
                            error={errors?.confirm_password}
                            type="password"
                            autoComplete=""
                        />

                        <Input
                            id="telephone"
                            placeholder="numero de telefone"
                            label="Telefone"
                            {...register("telephone")}
                            error={errors?.telephone}
                        />

                        <button type="submit">Cadastrar</button>
                        <button onClick={handleClick}>Voltar</button>
                    </FormContainer>
                </Container>
            </div>
        </>
    );
};

export default Register;
