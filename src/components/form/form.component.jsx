import { FormContainer, FormSubmit } from "./form.styles"

import FormGroup from "../form-group/form-group.component";

/**
 * Adds a form with form groups we define to it
 * 
 * @param {object[]} formGroups Form groups with a label, type, and name
 * @param {function} submitFunction Function to execute on form submit
 * @returns {}
 */
const Form = ({ submitFunction, formGroups }) => {
    return (
      <FormContainer>
        <form onSubmit={submitFunction}>

          { formGroups.map((formGroup) => <FormGroup key={formGroup.name} label={formGroup.label} name={formGroup.name} inputType={formGroup.inputType} />)}
          
          <FormSubmit type="submit" name="submit" value="Submit" />
        </form>
      </FormContainer>
    )
}

export default Form;