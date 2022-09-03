import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavbarStyled = styled.nav`
    width: 100%;
    height: 60px;
    box-shadow: 0 0 5px black;
    display: flex;
`;

export const UserIconContainer = styled.div`
    height: 100%;
    width: max-content;
    display: inline-flex;
    align-items: center;
    margin-right: auto;
    margin-left: 8px;
`;

export const NavLinksContainer = styled.div`
    height: 100%;
    margin-right: 15px;
    width: max-content;
    overflow: hidden;
`;

export const NavLink = styled(Link)`
    font-size: 15px;
    padding: 0 25px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: black;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;