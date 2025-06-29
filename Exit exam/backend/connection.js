var mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
   "mongodb+srv://antoniojoseph:antonio@cluster0.ewuhvls.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
