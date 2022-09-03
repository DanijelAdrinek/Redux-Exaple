import styled from "styled-components";

export const FormContainer = styled.div`    
    width: 80%;
    margin: auto;
    margin-top: 30px;
`;

export const FormSubmit = styled.input`
    display: block;
    border: 1px solid black;
    background-color: blue;
    color: white;
    padding: 15px 30px;
    margin: 20px auto;
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
        background-color: rgb(0, 0, 232);
    }
`;