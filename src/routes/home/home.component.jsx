import { HomeContainer, ContentDisplay, ContentTitle } from "./home.styles"

import User from "../../components/user/user.component";
import Task from "../../components/task/task.component";

const USERS_LIST = ["guest", "user", "John Doe"];
const TASKS_LIST = ["ocisti stan", "programraj", "operi ves"];

const Home = () => {
    return(
        <HomeContainer>
            <ContentDisplay>
                <ContentTitle>Users</ContentTitle>
                <hr/>
                {USERS_LIST.map(user => <User key={user} name={user}/>)}
            </ContentDisplay>
            <ContentDisplay>
                <ContentTitle>Tasks</ContentTitle>
                <hr/>
                {TASKS_LIST.map(task => <Task key={task} taskName={task}/>)}
            </ContentDisplay>
        </HomeContainer>

    )
}

export default Home;