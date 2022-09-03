import { RemoveButtonStyled } from "./remove-button.styles";

/**
 * 
 * @param {function} clickFunctionHandler Takes in a function to execute on user click on the element
 * @returns 
 */
const RemoveButton = ({ clickFunctionHandler }) => {
    return (
        <RemoveButtonStyled onClick={clickFunctionHandler}>&#10799;</RemoveButtonStyled>
    );
}

export default RemoveButton;