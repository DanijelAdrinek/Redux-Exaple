import { NavbarStyled, UserIconContainer, NavLinksContainer, NavLink } from "./navbar.styles";

import { Outlet } from "react-router";

import { Link } from "react-router-dom";

import UserIconFull from "../../assets/icons/users/user-icon-full.png";

const Navbar = () => {
    return (
        <>
        <NavbarStyled>
            <UserIconContainer>
                <Link to="/">
                    <img height="32px" src={UserIconFull} alt="userIconEmpty" />
                </Link>
            </UserIconContainer>
            <NavLinksContainer>
                <NavLink to="/">Home</NavLink>
                <NavLink to="add-user">Add User</NavLink>
                <NavLink to="add-tasks">Add Tasks</NavLink>
            </NavLinksContainer>
        </NavbarStyled>
        <Outlet />
        </>
    );
}

export default Navbar;