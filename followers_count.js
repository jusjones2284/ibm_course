let count = 0;
let counts = 2

function displayCount(){

  document.getElementById('countDisplay').innerHTML=count

}

function displayCounts(){
  document.getElementById('countDisplays').innerHTML = counts 
}

function checkCountValue(){
  if (count == 10){
    alert("Your Instagram post gained 10 followers! Congrads")
  } else if (count == 20){
    alert("Your Instagram post gained 20 followers! keep it up")
  }
}

function increaseCount() {
  count++; 
  counts--;
  displayCount(); 
  displayCounts();
  checkCountValue(); 
  
}

const fruits = ["apple", "banana", "cherry"]
fruits[2] = "strawberry"
fruits.push("orange");
fruits.pop()


const matrix = [[1,2,3], [4,5,6], [7,8,9]]
const removedElement = matrix[2].shift()
fruits.unshift("yellow","green")
fruits.splice(1,1,"goodbye")
fruits.indexOf("apple")
fruits.reverse()
fruits.sort()

matrix.sort((a, b)=> a *b)


for(let i = 0; i < fruits.length; i++){
  console.log(matrix[i]);
  
}

for(let j = 0; j < matrix.length; j++){
  for(let k = 0; k < matrix.length; k++){
    console.log(matrix[j][k]);
    

  }
}

function sendWelcomeEmail(email){
  console.log(`Welcome email sent to ${email}`);
  
}

function sendAllNames(name){
  console.log(`Welcome to the company ${name}`);
}

const users = [
  {name: 'Alice', email: 'alice@yahoo.com'},
  {name: 'Justin', email: 'jusjones@me.com'},
  {name: 'Ashley', email: 'ashleyburton@burtontransit.com'}
]

users.forEach((user)=> {
  sendWelcomeEmail(user.email)
})

users.forEach((users)=> {

  sendAllNames(users.name)

})

const products = [
  {name: 'Laptop', price: 1000},
  {name: 'Smartphone', price: 300},
  {name: 'Tablet', price: 700}
]

products.map((item)=>{
  console.log(`The price of ${item.name} is $${item.price}`);
  const data = `The price of ${item.name} is $${item.price}`
  return data
  
})


function displayCounts(){
  document.getElementById('countDisplays').innerHTML = counts 
}

function displayProducts(data){
  document.getElementById('products'.innerHTML = data)
}

displayProducts()

function filterProductsByPriceRange(products, minPrice, maxPrice){
  return products.filter((product) =>  product.price >= minPrice && product.price <= maxPrice)

}

const minPrice = 100

const maxPrice = 900

const filteredPrice = filterProductsByPriceRange(products, minPrice, maxPrice)

filteredPrice.forEach((product)=> {
  console.log(`${product.name} is ${product.price}`);
  
})

const employees = [
  {id: 1, name: 'Alice', Eid: 'EMP001', 'Contact details': 'alice@example.com', Role: 'Manager', Designation: 'Project Manager', years: 8}, 
  {id: 2, name: 'Bob', Eid: 'EMP002', 'contact details': 'bob@example.com', Role: 'Engineer', Designation: 'Software Engineer', years: 5},
  {id: 3, name: 'Charlie', Eid: 'EMP003', 'contact details': 'charlie@example.com', Role: 'Analyst', Designation: 'Software Engineer', years: 1}

]

const employee = employees.find((e)=> e.id == 3)

console.log(`${employee.name}`);
console.log(employee);

const person = {

  firstName: "Alice",
  lastName: "Johnson",
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person.getFullName());

function Car(make, model){
  this.make = make
  this.model = model
}

const car1 = new Car("honda", "accord")
const car2 = new Car("Lexus", "rx350")

console.log('car1 details', car1);
console.log('car2 details', car2);



console.log(employees[2].name);

for(let i = 0; i < employees.length; i++){
  console.log(employees[i].name);
  
}

employees.forEach((student)=> console.log(student.id));


const names = [
  {name: 'Alice', 
    age: 30, 
    skills: ['JavaScript', 'React', 'Node.js'], 
    projects: [
      {title: 'Project A', completed: 'True'},
      {title: 'Project B', completed: 'False'}
    ]
  }, {name: 'Justin', 
    age: 40

  }
]

  console.log(names[1].age);
  