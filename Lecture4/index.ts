// Datatype

// String - string , char

let string_variable = "Hello world I am a string";

// included methods ( popular)

debugger;
// 1. toLowerCase()
console.log(string_variable.toLowerCase());

// number - integer , float, double

const number_varible = "7";

//to string
console.log(number_varible.toString());

console.log(Number.parseInt(number_varible));

// Boolean - Flag datatype

const isShivHandsome = false;

// Arrays - Array string , array number

//                                             0        1        2        3          4       5
const array_of_name_of_studetns_in_BFS69 = [
  "Yogesh",
  "Shiv",
  "Biswas",
  "Varsha",
  "Kalyan",
  "Manish",
];
let array = [...array_of_name_of_studetns_in_BFS69];

console.log(array_of_name_of_studetns_in_BFS69.length, "Before");
array.push("Sabita");
console.log(array_of_name_of_studetns_in_BFS69.length, "after");

console.log(array[2]);

console.log(array.join(","));

console.log(
  array.map(function (value, index) {
    return "Name: " + value;
  })
);

const number_array = [1, 2, 3, 4, 5, 5, 6, 7, 4, 1];

const added_five_value = number_array.map(function (value, index) {
  return value + 5;
});

console.log(added_five_value, "added value");

// functions
console.log("0---------------function--------------------------0");

function add(number1, number2) {
  console.log(`${number1} + ${number2}`, number1 + number2);

  return number1 + number2;
}

add(9, 8);
add(5, 8);
const result = add(9, 2);

console.log(result);

// Objects

// Person data

interface IPerson {
  name: string;
  age: number;
  devices: string[];
  getPhoneNumber: () => string;
  operrating_system?: string;
}

let person_1: IPerson = {
  name: "Yogesh",
  age: 25,
  devices: ["ipad", "mouse", "iphone"],
  getPhoneNumber: function () {
    return "9123414532";
  },
  operrating_system: "IOS",
};

let person_2: IPerson = {
  name: "Sabita",
  age: 23,
  devices: ["56", "2342", "123"],
  getPhoneNumber: function () {
    return "1243123123123";
  },
};

console.log(person_1.name);
console.log(person_1.age);
console.log(person_1.devices);

let Coders = [
  {
    name: "Yogesh",
    age: 25,
    devices: ["ipad", "mouse", "iphone"],
    getPhoneNumber: () => {
      return "9123414532";
    },
  },
  {
    name: "Sabita",
    age: 22,
    devices: ["Personal Computer", "Trackpaf", "iphone"],
    getPhoneNumber: () => {
      return "N/A";
    },
  },
  {
    name: "Siva",
    age: 22,
    devices: ["Personal Computer", "Trackpaf", "iphone"],
    getPhoneNumber: () => {
      return "N/A";
    },
  },
];
