interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string] : any;
};
const teach: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};
console.log(teach);

interface Directors extends Teacher {
  numberOfReports: number;
};
const dir: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
  numberOfReports: 17
};
console.log(dir);

function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName[0]}. ${lastName}}`;
}
interface printTeacherFunction{
  printTeacher(firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface; 
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this.firstName;
  }
}

