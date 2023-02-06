import { useContext, useEffect } from "react";
import { ContextsAll } from "../../context/contextsAll";
// import Plus from "../../../img/Plus.png";
import Plus from "../../img/Plus.png";
import api from "../../services/api";
import AddModal from "../AddModal";

import ContactList from "../contactList";
import { ContactsAdd } from "./styles";

const Home = () => {
    const { userContacts, setUserContacts, handleClickAddModal, isModalAddOn, userData } =
        useContext(ContextsAll);

    useEffect(() => {
        async function loadData() {
            const token = localStorage.getItem("@project:token");

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
    }, [setUserContacts]);

    console.log(userData)
    return (
        <>
            <div>
                <div>
                    <p>Olá {userData.fullName}</p>
                </div>
                <ContactsAdd>
                    <h4>Adicionar contato</h4>
                    <button className="homeAdd" onClick={handleClickAddModal}>
                        <img src={Plus} alt="Adicionar" />
                    </button>
                </ContactsAdd>
                <ul>
                    {userContacts.map((contact) => {
                        return (
                            <ContactList key={contact.id} contact={contact} />
                        );
                    })}
                </ul>
            </div>
            {isModalAddOn && <AddModal />}
            {/* <AddModal/> */}
        </>
    );
};
export default Home;
