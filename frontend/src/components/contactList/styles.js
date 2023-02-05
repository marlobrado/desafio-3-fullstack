import styled from "styled-components";

export const ContainerLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-around;
    background-color: #121214;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;

    .techTitle {
        width: 20%;
    }

    .delete {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: flex-end;
        align-items: baseline;
        justify-content: space-between;
    }
    button {
        background-color: #121214;
    }
`;
