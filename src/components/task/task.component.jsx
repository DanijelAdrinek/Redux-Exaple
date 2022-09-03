import RemoveButton from "../remove-button/remove-button.component";
import { TaskContainer, Name } from "./task.styles";

/**
 * Returns a task
 * 
 * @param {string} taskName Takes a string thats going to be the name of the task 
 * @returns 
 */
const Task = ({ taskName }) => {

    const RemoveTaskClickHandler = () => {
        console.log("removing task!");
    }

    return (
      <TaskContainer>
        <Name>{taskName}</Name>
        <RemoveButton clickFunctionHandler={RemoveTaskClickHandler}>&#10799;</RemoveButton>
      </TaskContainer>
    );
}

export default Task;