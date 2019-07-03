var students = ["johnny", "jenny", "elliot"];

function logName(name) {
  console.log(name);
}

// manually
logName(students[0]);
logName(students[1]);
logName(students[2]);

// for loop
for (var i = 0; i < students.length; i++) {
  logName(students[i]);
}

// forEach
students.forEach(logName);

students.forEach(function logName(name) {
  console.log(name);
});

students.forEach(function(name) {
  console.log(name);
});

function forEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

forEach(students, function(student) {
  console.log(student);
});

forEach(students, logName);
