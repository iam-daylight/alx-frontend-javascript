export default function iterateThroughObject(reportWithIterator) {
  // Extract employee names from the reportWithIterator
  const { allEmployees } = reportWithIterator;
  const employeeNames = [];

  // Iterate through each category of employees
  for (const category in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, category)) {
      // Iterate through each employee in the category
      allEmployees[category].forEach((employee) => {
        employeeNames.push(employee);
      });
    }
  }

  // Join the employee names with ' | ' separator and return as a single string
  return employeeNames.join(' | ');
}
