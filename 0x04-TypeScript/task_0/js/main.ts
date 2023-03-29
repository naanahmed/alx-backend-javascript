interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};
const stud1: Student = {
  firstName: 'Wuhibe',
  lastName: 'Nigatu',
  age: 45,
  location: 'Addis',
};
const stud2: Student = {
  firstName: 'Yeabsra',
  lastName: 'Dawit',
  age: 34,
  location: 'Gondar',
};
const studentsList: Student[] = [stud1, stud2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);


studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const firstName = document.createElement('td');
  const location = document.createElement('td');

  firstName.textContent = student.firstName;
  location.textContent = student.location;
  firstName.style.border = '2px solid black';
  location.style.border = '2px solid black';
  row.appendChild(firstName);
  row.appendChild(location);
  tbody.appendChild(row);
});

document.body.appendChild(table);