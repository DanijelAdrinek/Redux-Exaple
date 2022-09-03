import Form from "../../components/form/form.component"
import Title from "../../components/page-title/page-title.component";

const submitFunction = (e) => {
    e.preventDefault();
    console.log("user submitted!");
}

const formGroups = [
    {
        label: "Username:",
        name: "username"
    },
    {
        label: "Password:",
        name: "password",
        type: "password"
    }
]

const AddUser = () => {
    return(
        <>
            <Title pageTitle={"Add Users"} />
            <Form submitFunction={submitFunction} formGroups={formGroups} />
        </>
    );
}

export default AddUser;