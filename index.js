//npm init
//npm i express
//import express
var express = require("express");
//initialisation
var app = express();
//assign port
var port = 3000;
//db connection
require("./db");
//get the model
var students = require("./model/student")
//middleware
app.use(express.json());
app.get("/",(req,res) =>{
    res.send("Hai");
});
//api to get a data
app.post('/',async(req,res)=>{
    try {
        await students(req.body).save();
        res.send("Data added");
    } catch (error) {
        
    }
})
//api to get db
app.get("/view",async(req,res)  => {
    try {
        var data = await students.find();
        res.send(data)
    } catch (error) {
        console.log(error);
    }
});
//api to delete a document
app.delete("/:id",async(req,res) => {
    console.log(req.params.id);
    try {
        await students.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    } catch (error) {
        res.send(error);
    }
})
//updating a document
app.put('/:id',async (req,res) =>{
    try {
            await students.findByIdAndUpdate(req.params.id,req.body);
            res.send("Student data updated");
    } catch (error) {
        res.send(error);
    }
})
//server is listening
app.listen(port,() => {
    console.log(`Server is listening port ${port}`);
});