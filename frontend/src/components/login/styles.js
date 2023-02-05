import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    img {
        height: 14.00307559967041px;
        width: 101px;
        border-radius: 0px;
        margin-bottom: 19px;
    }
    .formLogin {
        /* background-color: black; */
        padding: 17px 18px 33px 18px;
        background: #212529;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
        border-radius: 3.20867px;
        width: 300px;
    }
    form {
        display: flex;
        flex-direction: column;
        max-width: 750px;
        align-items: center;
        justify-content: center;

    }
    .button1 {
        width: 257px;
        cursor: pointer;
        height: 30px;

        background-color: var(--negative);
        border: 0;
        color: #000;
        border-radius: 4px;
        color: white;
        font-weight: bold;
    }
    .button2 {
        width: 257px;
        cursor: pointer;
        height: 30px;
        margin-top: 15px;
        background-color: var(--grey-1);
        border: 0;
        color: #000;
        border-radius: 4px;
        color: white ; 
        font-weight: bold;
    }
    input {
        margin: 7px 0 7px 0;
        height: 25px;
        border-radius: 4px;
        width: 250px;
    }
    .register{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span{
        margin-top: 18px;
    }
`;
