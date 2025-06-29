const express = require("express");
const cors = require("cors");
require("./connection");
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//write missing code
const BlogModel = require("./model")

//Write post data
app.post('/add',async(req,res)=>{
    try {
        await BlogModel(req.body).save();
        res.send("Data added");
    } catch (error) {
        
    }
  })
app.get("/", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/:id",async(req,res) => {
    console.log(req.params.id);
    try {
        await BlogModel.findByIdAndDelete(req.params.id);
        res.send("Blog deleted");
    } catch (error) {
        res.send(error);
    }
})
app.put('/:id',async (req,res) =>{
    try {
            await BlogModel.findByIdAndUpdate(req.params.id,req.body);
            res.send("Blog data updated");
    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
