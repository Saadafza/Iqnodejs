
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json())

app.get("/", (request, response) => {


  const obj =
  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  }
  response.json(obj)
})

// app.get("/search", (request, response) => {
//   const queryIndex = request.query.index;



//   const fruits = ["cherry", "mango", "grapes"];
//   const fruit = fruits[queryIndex];
//   console.log("index::", fruit);

//   if (fruit == undefined) {
//     response.json({
//       status: "false",
//     })
//   }

//   else {
//     response.json({
//       status: "true",
//       fruit: fruit
//     })
//   };
// })


app.get("/student/:id",(request, response) =>{
const id = request.params.id
const data = [
	{
		"email": "dictum.placerat.augue@hotmail.net",
		"name": "Lilah Terry",
		"country": "Netherlands"
	},
	{
		"email": "nonummy@hotmail.edu",
		"name": "Unity Branch",
		"country": "United Kingdom"
	},
	{
		"email": "sit.amet.faucibus@outlook.com",
		"name": "Uma Williamson",
		"country": "Netherlands"
	},
	{
		"email": "pretium.et@icloud.org",
		"name": "Ivy Coleman",
		"country": "Germany"
	},
	{
		"email": "lacus@aol.couk",
		"name": "Lucas Spence",
		"country": "Russian Federation"
	}
]

response.json({
  id:id, 
  data:data[id]
})
})

const students = [];
app.post("/create-user",(request, response)=>{
	console.log(request.body)
	students.push(request.body)
	response.json({
		result:students
	})
})

app.delete("/delete-user/:id",(request,response)=>{
	const index = request.params.id;
	students.splice(index,1);
	response.json({
		students:students
	})
})


app.get("/user-get/:id", (request, response) => {
	const index = request.params.id;
	response.json({
	  student: students[index]
	})
  });
  
  
app.put("/user-update/:id", (request, response) => {
	const index = request.params.id;

	students[index] = request.body

	response.json({
	  students: students
	})

})



app.listen(3003, () => {
  console.log("server is running");
})