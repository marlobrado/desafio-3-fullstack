import styled from "styled-components";

const ContainerAddModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;

    align-items: center;
    background-color: rgba(0, 0, 0, 0.45);
    justify-content: center;

    .modalAll {
        width: 296px;
        /* background-color: green; */
        
        
    }
    .modalTitle {
        background-color: var(--grey-2);
        padding-left: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 15px;
    }
    .modalForm {
        display: flex;
        flex-direction: column;
        background-color: var(--grey-3);
        align-items: flex-start;
        padding: 15px;
        height: 234px;
        justify-content: space-evenly;
    }
    .inputs {
        width: 264px;
        height: 38.5px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        font-weight: bold;
        border: 1px solid white;
    }
    select {
        width: 270px;
        height: 38.5px;
        background-color: var(--grey-2);
        color: var(--grey-0);
        font-weight: bold;
        border: 1px solid white;
    }
    .buttonSubmit {
        width: 270px;
        height: 38px;
        background: var(--color-primary);
        border: 1.2182px solid #ff577f;
        border-radius: 4.06066px;
        color: #ffffff;
        font-weight: bold;
    }
    .modalBack{
        background-color: var(--grey-2);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        padding: 0;
        border: 0;
    }
    .buttonX{
        width: 20px;
        height: 20px;
        color: var(--grey-0);
    }
    
`;

export default ContainerAddModal;
