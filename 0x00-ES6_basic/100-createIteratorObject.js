export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      // Check if there are more departments to iterate over
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];

        // Check if there are more employees in the current department
        if (currentEmployeeIndex < currentDepartment.length) {
          return {
            value: currentDepartment[currentEmployeeIndex + 1],
            done: false,
          };
        }
        // Move to the next department
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
        return this.next(); // Recursively call next() for the next department
      }
      // No more departments to iterate over
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
