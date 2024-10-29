import "./style.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-inner">
        <div className="students-list">
          <div className="student">Student 1</div>
          <div className="student">Student 2</div>
          <div className="student">Student 3</div>
        </div>
        <div className="students-form">
          <form>
            <div>Student Form</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
