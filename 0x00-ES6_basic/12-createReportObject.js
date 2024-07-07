export default function createReportObject(employeeList) {
  return {
    allEmployees: { ...employeeList },
    getNumberofDepartments() {
      return Object.keys(employeeList).length;
    },
  };
}
