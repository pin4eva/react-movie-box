export const addNumbers = (a, b) => a + b;

export const getAge = (dateOfBirth) => {
  return new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
};
