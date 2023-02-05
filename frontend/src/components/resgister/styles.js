import styled from "styled-components";





export const Container = styled.div`
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    padding: 20px 18px 33px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 450px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 750px;
    align-items: flex-start;

    input {
        margin: 7px 0 7px 0;
        height: 25px;
        border-radius: 4px;
        width: 250px;
    }
    select {
        margin: 7px 0 7px 0;
        height: 25px;
        border-radius: 4px;
        width: 256px;
    }

    button {
        width: 257px;
        cursor: pointer;
        height: 30px;
        margin-top: 15px;
        background-color: var(--negative);
        border: 0;
        color: white;
        font-weight: bold;
    }
    .label {
        display: flex;
    }
`;
