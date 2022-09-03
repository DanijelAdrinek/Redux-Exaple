import { UserContainer, Name, TriangleRight } from "./user.styles";

import RemoveButton from "../remove-button/remove-button.component";

/**
 * Returns a user
 * 
 * @param {string} name Name of the user 
 * @returns 
 */
const User = ({ name }) => {

    const RemoveUserClickHandler = () => {
        console.log("removing user!");
    }

    return (
        <UserContainer>
            <Name>{name}</Name>
            <RemoveButton clickFunctionHandler={RemoveUserClickHandler} />
            <TriangleRight>&#9654;</TriangleRight>
        </UserContainer>
    )
}

export default User;