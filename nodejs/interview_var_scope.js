//https://javascript.info/closure
// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function () {
//       // create a shooter function,
//       console.log(i); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function () {
//       // shooter function
//       console.log(j); // should show its number
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// // Now the code works correctly
// army[0](); // 0
// army[5](); // 5

let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

// setTimeout(function () {
//   user.sayHi(); // Hello, John!
// }, 1000);
setTimeout(() => user.sayHi(), 1000);

setTimeout(user.sayHi, 1000);
