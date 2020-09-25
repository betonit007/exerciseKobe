const express = require("express");
const mongoose = require("mongoose");


const app = express();

//Port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://kobie:tree2211@cluster0.gutfb.mongodb.net/exercise?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// routes
// app.use(require("./Develop/public/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
