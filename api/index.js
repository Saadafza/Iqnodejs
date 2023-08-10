const express = require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("../models/studentModel");
const multer  = require('multer')
const fs = require("fs");
const cors = require("cors");
const path = require('path');
require('dotenv').config()
const { request } = require("http");
app.use(cors());



app.get("/api/", async (request, response) => {

    try {
        const students = await StudentModel.find();
        return response.json({
            status: true,
            students: students
        })
    } catch (error) {
        return response.json({
            status: false,
            msg: "Students not found"
        })
    }
})


app.get("/api/", async (request, response) => {

    try {
        const students = await StudentModel.find();
        return response.json({
            status: true,
            students: students
        })
    } catch (error) {
        return response.json({
            status: false,
            msg: "Students not found"
        })
    }
})

app.get("/api/students", async (request, response) => {
console.log("hitted ...");
    try {
        const students = await StudentModel.find();
        console.log(students)
        return response.json({
            status: true,
            students: students
        })
    } catch (error) {
        return response.json({
            status: false,
            msg: "Students not found"
        })
    }
})

app.get("/api/student/:id", async (request, response) => {
    const id = request.params.id;
    try {
        const student = await StudentModel.findById(id);
        return response.json({
            status: true,
            student: student
        })
    }catch (error) {
        return response.json({
            status: false,
            message: "Student not found"
        })
    }
})
app.get("/api/studentDetails/:id", async (request, response) => {
    const id = request.params.id;
    try {
        const student = await StudentModel.findById(id);
        return response.json({
            status: true,
            student: student
        })
    }catch (error) {
        return response.json({
            status: false,
            message: "Student not found"
        })
    }
})
// app.post("/api/create-student", upload.single('image'), async (request, response) => {
   
//     let ext = request.file.mimetype.split("/")[1];
//     const imageName = request.file.path + "." + ext;
//     fs.rename(request.file.path, imageName, () => {
//         console.log("done")
//     });


//     try {
//         request.body.image = imageName;
//         await StudentModel.create(request.body);
//         return response.json({
//             status: true,
//             msg: "Successfully created"
//         })
//     } catch (error) {
//         if (error.name === "ValidationError") {
//             let errors = {};
      
//             Object.keys(error.errors).forEach((key) => {
//               errors[key] = error.errors[key].message;
//             });
      
//             return response.json({
//               "status": false,
//               errors: errors
//             })
//           }
//     }
// })

app.delete("/api/student-delete/:id", async(request,response)=>{
    try{
        await StudentModel.findByIdAndDelete(request.params.id)
        return response.json({
            status : true,
            msg : "deleted"
        })
    } catch(error){
        return response.json({
            status : false,
            msg : "not deleted"
        })
    }
})



app.get("/api/search", async (request, response) => {
   
    const search = request.query.q;

    try {
        const students = await StudentModel.find( { name: {$regex: search, $options: 'i'}});
        return response.json({
            status: true,
            students: students
        });

    } catch (error) {
        return response.json({
            status: false,
            error: error.message
        })
    }

});
//mongodb+srv://iqra04327:<password>@cluster0.plnsopq.mongodb.net/
//efTQOTu7naAgCG1M
//  mongodb+srv://iqra04327:<password>@cluster0.plnsopq.mongodb.net/
mongoose.connect("mongodb+srv://iqra04327:efTQOTu7naAgCG1M@cluster0.plnsopq.mongodb.net/studentDbE").then( () => {
    // app.listen(process.env.PORT, () => {
    //     console.log("db & server is running");
    // })
} );
module.exports = app;

//mongodb://localhost:27017