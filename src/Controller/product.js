
// const btn = document.querySelector("");


////////////////////////////////////////////////

// const request = new XMLHttpRequest();
// request.open('GET', "../Navigation/nav.html");
// request.send();
// console.log(request.responseText);

// request.addEventListener('load', function () {
//  console.log(this.responseText);
// })



//////////////////////////////////////////////////
// const fs = require('fs');

// //load json file
// const data = JSON.parse(fs.readFileSync('../../data/Client/product.json'));

// //save data functions
// const item = [{
//  id = 1,
//  name = 'Roasted Duck',
//  type =['main', 'second'],
//  description = "This one is grilled food that make sense to all people and everyone. It's also high-rated food on this environment."
// },
// {
//  id = 2,
//  name = 'Fresh Fruits',
//  type =['dessert'],
//  description = "This one is grilled food that make sense to all people and everyone. It's also high-rated food on this environment."
// }
// ]


// const clientController = (obj) => {
//  const finished = (error) => {
//   if (error) {
//    console.error(error);
//    return;
//   }
//  }

//  const jsonData = JSON.stringify(obj, null, 2);
//  fs.writeFile('product.json', jsonData, finished);
//  console.log(jsonData);
// }

// clientController(item);