
import React from "react";


function App() {
  const [students, setStudents] = useState(["aravind", "rajesh"]);

  const addUser = () => {
    setStudents((prev) => {
      return [...prev, "Suraj Kumar"];
    })
  }

  return (
    <>
      <h1>All Users: </h1>
      <div>
        {
          students.map(student => <p>{student}</p>)
        }
      </div>
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;
