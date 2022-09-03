import {FormGroupStyle, FormInput} from "./form-group.styles";

/**
 * Returns a form group with a label, and a input
 * 
 * @param {string} label
 * @param {string} name
 * @param {string} inputType 
 * @returns 
 */
const FormGroup = ({ label, name, inputType="text" }) => {
    return (
    <FormGroupStyle>
        <label for="username">{ label }</label>
        <FormInput type={inputType} name={ name } />
    </FormGroupStyle>
    );
}

export default FormGroup;