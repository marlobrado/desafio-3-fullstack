import { createContext, useState } from "react";

export const ContextsAll = createContext({});

const ContextsProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [userContacts, setUserContacts] = useState([]);
    const [ isModalOn, setIsModalOn ] = useState(false)


    function handleClickAddModal(){
        setIsModalOn(!isModalOn)
    }

    return (
        <ContextsAll.Provider
            value={{ userData, setUserData, userContacts, setUserContacts, handleClickAddModal }}
        >
            {children}
        </ContextsAll.Provider>
    );
};

export default ContextsProvider;
