import "./style.css";

const Student = (prop) => {
  const age = new Date().getFullYear() - new Date(prop.dob).getFullYear();
  return (
    <div className="student">
      <p>
        {prop.name} <span>{prop.gender}</span>
      </p>
      <div>
        <small>age: {age}</small> <small>Score: {prop.score}</small>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="App-inner container">
        <div className="students-list">
          {students.map((single, i) => (
            <Student
              dob={single.dob}
              name={single.name}
              gender={single.gender}
              score={single.score}
            />
          ))}
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

const students = [
  {
    name: "Yale Lafond",
    score: 59,
    gender: "Male",
    dob: "2011-12-24 16:48:12",
  },
  {
    name: "Wang Thys",
    score: 97,
    gender: "Male",
    dob: "1979-07-22 20:16:19",
  },
  {
    name: "Conan Janny",
    score: 22,
    gender: "Male",
    dob: "1998-04-22 06:09:08",
  },
  {
    name: "Brice Brownfield",
    score: 85,
    gender: "Male",
    dob: "2009-01-07 12:59:38",
  },
  {
    name: "Ivan Hinksen",
    score: 75,
    gender: "Male",
    dob: "1979-04-02 16:45:40",
  },
  {
    name: "Riane O'Hagan",
    score: 10,
    gender: "Female",
    dob: "1990-05-15 10:23:35",
  },
  {
    name: "Maximilian Silbert",
    score: 43,
    gender: "Male",
    dob: "2011-07-23 10:40:50",
  },
  {
    name: "Whitaker Hagwood",
    score: 47,
    gender: "Male",
    dob: "2008-12-09 21:10:34",
  },
  {
    name: "Ahmad Bradwell",
    score: 88,
    gender: "Male",
    dob: "1994-05-31 05:58:08",
  },
  {
    name: "Winona Miliffe",
    score: 64,
    gender: "Female",
    dob: "2015-09-26 08:47:38",
  },
  {
    name: "Isis Kures",
    score: 13,
    gender: "Female",
    dob: "1963-01-03 05:04:35",
  },
  {
    name: "Cirstoforo Smidmore",
    score: 59,
    gender: "Male",
    dob: "1977-08-02 18:00:29",
  },
  {
    name: "Julius Schenfisch",
    score: 78,
    gender: "Male",
    dob: "2002-04-14 00:47:10",
  },
  {
    name: "Lois Selborne",
    score: 21,
    gender: "Female",
    dob: "1985-08-03 14:44:37",
  },
  {
    name: "Berenice Wallhead",
    score: 22,
    gender: "Female",
    dob: "2010-06-01 22:02:48",
  },
  {
    name: "Denis Liveley",
    score: 28,
    gender: "Male",
    dob: "1976-02-14 06:51:53",
  },
  {
    name: "Elaine Dunnan",
    score: 48,
    gender: "Female",
    dob: "1984-07-22 14:41:30",
  },
  {
    name: "Leandra Faill",
    score: 83,
    gender: "Female",
    dob: "1998-09-22 08:00:48",
  },
  {
    name: "Mata Jeanes",
    score: 99,
    gender: "Male",
    dob: "1992-09-14 03:37:35",
  },
  {
    name: "Jayne Mellhuish",
    score: 22,
    gender: "Female",
    dob: "2015-06-01 17:34:48",
  },
];
