import Form from "../../components/form/form.component"

import Title from "../../components/page-title/page-title.component";

const submitFunction = (e) => {
    e.preventDefault();
    console.log("task submitted!");
}

const formGroups = [
    {
        label: "Title:",
        name: "title"
    },
    {
        label: "Text:",
        name: "text",
    }
]

const AddTasks = () => {
    return (
        <>
            <Title pageTitle={"Add Tasks"} />
            <Form submitFunction={submitFunction} formGroups={formGroups} />
        </>
    );
}

export default AddTasks;