interface Student  {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "abdelhadi",
  lastName: "karbal",
  age: 34,
  location: "casablanca",
};

const student2: Student = {
  firstName: "abdelhafid",
  lastName: "raji",
  age: 37,
  location: "mohammedia",
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

thead.appendChild(document.createElement('tr')); // Create header row
const headerRow = thead.querySelector('tr'); // Get reference to the header row
// Create header cells
headerRow.appendChild(document.createElement('th')).textContent = 'Name';
headerRow.appendChild(document.createElement('th')).textContent = 'Location';


studentsList.forEach((obj) => {

  const bodyRow = document.createElement('tr');
  bodyRow.appendChild(document.createElement('td')).textContent = obj.firstName;
  bodyRow.appendChild(document.createElement('td')).textContent = obj.location;
  tbody.appendChild(bodyRow);
 
});
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
