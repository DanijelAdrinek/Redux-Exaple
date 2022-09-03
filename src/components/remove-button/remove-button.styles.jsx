import styled from "styled-components";

export const RemoveButtonStyled = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px 5px 11px;
    margin-left: auto;
    margin-right: 35px;
    color: red;
    height: min-content;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: rgb(175, 175, 175);
    }
`;