import React, { useState } from 'react';

function Student(props) {
  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
    </div>
  );
}

function App() {
  const [college, setCollege] = useState("ABC College");

  const changeCollege = () => {
    setCollege("XYZ University");
  };

  return (
    <div>
      <h1>React Props and State Example</h1>
      <Student name="Aman Vedwal" course="B.Tech CSE" />
      <p><b>College:</b> {college}</p>
      <button onClick={changeCollege}>Change College</button>
    </div>
  );
}

export default App;
