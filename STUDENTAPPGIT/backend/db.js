var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://antoniojoseph:antonio@cluster0.ewuhvls.mongodb.net/studentdetails?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Db connected");
})
.catch((err) => {
    console.log(err);
});