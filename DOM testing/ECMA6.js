let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = person; //  newPerson references person
  newPerson.name = 'Bob'; 
  
  console.log(person.name); // Bob
  console.log(newPerson.name); // Bob


  //use Object.assign() to create a new object.
  let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person); 
  newPerson.name = 'Bob';
  
  console.log(person.name); // Jack
  console.log(newPerson.name); // Bob

  //you can assign a value to an object property in the Object.assign() statement

  let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person, {name: 'Bob'});



setTimeout(function() {
    console.log("Work 1");
    setTimeout(function() {
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");


function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End");