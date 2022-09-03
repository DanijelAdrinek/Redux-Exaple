import { Routes, Route } from "react-router";

import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import AddUser from "./routes/add-user/add-user.component";
import AddTasks from "./routes/add-tasks/add-task.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="add-user" element={<AddUser/>} />
        <Route path="add-tasks" element={<AddTasks/>} />
      </Route>
    </Routes>
  );
}

export default App;
