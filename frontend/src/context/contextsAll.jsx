import { createContext, useState } from "react";

export const ContextsAll = createContext({});

const ContextsProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [userContacts, setUserContacts] = useState([]);
    const [ isModalAddOn, setIsModalAddOn ] = useState(false)


    function handleClickAddModal(){
        setIsModalAddOn(!isModalAddOn)
    }

    return (
        <ContextsAll.Provider
            value={{ userData, setUserData, userContacts, setUserContacts, handleClickAddModal, isModalAddOn }}
        >
            {children}
        </ContextsAll.Provider>
    );
};

export default ContextsProvider;
