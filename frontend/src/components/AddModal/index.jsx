import ContainerAddModal from "./styles";
import { TiDeleteOutline } from "react-icons/ti";
// import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContextsAll } from "../../context/contextsAll";
import api from "../../services/api";
import { toast } from "react-toastify";

// import api from "../../Services/api";
// import { toast } from "react-toastify";

const AddModal = () => {
    const { handleClickAddModal, setUserContacts } = useContext(ContextsAll);

    const formSchema = yup.object().shape({
        name: yup.string().required("necessario um nome"),
        email: yup.string().required("necessario um email"),
        telephone: yup.string().required("necessario um telefone"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    function onSubmitFunction(data) {
        

        const token = localStorage.getItem("@project:token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        api.post("/contacts", data, config)
            .then((res) => {
            

                toast.success("Contato Adicionado");
                async function loadData() {
                    // const token = localStorage.getItem("@project:token");
        
                    if (token) {
                        try {
                            api.defaults.headers.authorization = `Bearer ${token}`;
        
                            const { data } = await api.get("/contacts");
        
                            setUserContacts(data);
                        } catch (error) {
                            console.log(error);
                            window.localStorage.clear();
                        }
                    }
                }
                loadData();
                
                handleClickAddModal()
            })
            .catch((res) => {
                console.log(res);
                toast.error("algo deu errado");
            });


            async function loadData() {
                // const token = localStorage.getItem("@project:token");
    
                if (token) {
                    try {
                        api.defaults.headers.authorization = `Bearer ${token}`;
    
                        const { data } = await api.get("/contacts");
    
                        setUserContacts(data);
                    } catch (error) {
                        console.log(error);
                        window.localStorage.clear();
                    }
                }
            }
            loadData();
    }

    return (
        <ContainerAddModal>
            <div className="modalAll">
                <div className="modalTitle">
                    <h3>Adicionar Contato</h3>
                    <button onClick={handleClickAddModal} className="modalBack">
                        <TiDeleteOutline className="buttonX" />
                    </button>
                </div>

                <form
                    className="modalForm"
                    onSubmit={handleSubmit(onSubmitFunction)}
                >
                    <label htmlFor="name">Nome</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Nome"
                        id="name"
                        {...register("name")}
                    />
                    {errors.name && <span>{errors.name.message}</span>}

                    <label htmlFor="email">Email</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="email"
                        id="email"
                        {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}

                    <label htmlFor="telephone">Telefone</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Telefone"
                        id="telephone"
                        {...register("telephone")}
                    />
                    {errors.telephone && (
                        <span>{errors.telephone.message}</span>
                    )}

                    <button className="buttonSubmit" type="submit">
                        Cadastrar Contato
                    </button>
                </form>
            </div>
        </ContainerAddModal>
    );
};
export default AddModal;
