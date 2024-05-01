interface AdditionalAttribute {
  name: string;
  value: any;
}

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  additionalAttributes: AdditionalAttribute[];
};

interface Directors extends Teacher {
  numberOfReports: number;
}



class TeacherImpl implements Teacher {
  constructor(
    readonly firstName: string, // Use parameter properties
    readonly lastName: string, // Use parameter properties
    public fullTimeEmployee: boolean,
    public location: string,
    public yearsOfExperience?: number,
    // Allow additional attributes
    public additionalAttributes: AdditionalAttribute[] = [],
  ) {}
}

const additionalAttribute = {
  name: 'contract',
  value: false,
};

// Create a new Teacher instance
const teacher3 = new TeacherImpl(
  'yassin', // firstName
  'mozar', // lastName
  false, // fullTimeEmployee
  'London', // location
  24, // yearsOfExperience
  additionalAttribute ? [additionalAttribute] : [] // Additional attribute
);

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  additionalAttributes: [],
};
console.log(director1);
