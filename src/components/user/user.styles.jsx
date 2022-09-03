import styled from "styled-components";

export const TriangleRight = styled.div`
    opacity: 0;
    font-size: 16px;
    margin-right: 10px;
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: lightgrey;
        cursor: pointer;
    }

    &:hover ${TriangleRight} {
        opacity: 1;
    }
`;

export const Name = styled.p`
    font-size: 14px;
    margin-left: 10px;
`;