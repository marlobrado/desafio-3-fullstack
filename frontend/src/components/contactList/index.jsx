import { ContainerLi } from "./styles";
import Vector from "../../img/Vector.png";
import api from "../../services/api";
import { ContextsAll } from "../../context/contextsAll";
import { useContext } from "react";


// import { toast } from "react-toastify"

const ContactList = ({ contact }) => {
    const { setUserContacts } = useContext(ContextsAll);

    function handleClick(e) {
        let idClicado = e.target.id;
        console.log(idClicado);

        api.delete(`/contacts/${idClicado}`)
            .then(() => {
                // toast.success('Deletado com sucesso')
                setUserContacts((oldSetUserContacts) =>
                    oldSetUserContacts.filter(
                        (contact) => contact.id !== idClicado
                    )
                );

                
                console.log("Deletado com sucesso");
            })
            .catch(() => {
                // toast.error('Algo deu errado')
                console.log("Algo deu errado");
            });
    }

    return (
        <>
            
            <ContainerLi>
                <div className="div-paragraph">
                    <p className="contact-list">{`Nome: ${contact.name}`}</p>
                    <p className="contact-list">{`Telefone: ${contact.telephone}`}</p>
                    <p className="contact-list">{`Email: ${contact.email}`}</p>
                </div>
                <div>
                    <button onClick={handleClick} id={contact.id}>
                        <img id={contact.id} src={Vector} alt="" />
                    </button>
                </div>
            </ContainerLi>
        </>
    );
};
export default ContactList;
