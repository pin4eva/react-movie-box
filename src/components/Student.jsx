import { getAge } from "../utils/helpers";

const Student = (prop) => {
  const age = getAge(prop.dob);
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

export default Student;
