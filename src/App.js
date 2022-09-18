import "./Styles/Style.css";

import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App-container">
      <img
        src="https://cdn2.iconfinder.com/data/icons/social-media-8/512/note3.png"
        className="note"
        alt=""
      />
      <TaskList />
    </div>
  );
}

export default App;
