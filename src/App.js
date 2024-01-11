import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";

function App() {
  const apiURL =
    "https://boppotech-admin.github.io/react-task-json.github.io/joblist.json";

  const [jobsList, setJobslist] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setJobslist(response.data);
    });
  }, []);

  return (
    <div>
      <HomePage jobsList={jobsList} setSkills={setSkills} skills={skills} />
    </div>
  );
}

export default App;
