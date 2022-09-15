import "./Styles/Style.css";

import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oqKzAytY0Bn5EQGADYghsism-9fYNs0SZw&usqp=CAU"
        className="note"
        alt=""
      />
      <TaskList />
    </div>
  );
}

export default App;
