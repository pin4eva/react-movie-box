import Header from "./components/Header";
import Student from "./components/Student";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-inner container">
        <div className="students-list">
          <Student name="Peter" dob={"1980-10-01"} score={59} gender="Male" />
        </div>
        <div className="students-form">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label>Date Of Birth</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Score</label>
              <input type="number" placeholder="Score" />
            </div>

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
