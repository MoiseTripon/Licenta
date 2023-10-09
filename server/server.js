const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config.js");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

const connection_string = `mongodb+srv://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.HOSTNAME}/${dbConfig.DB}?retryWrites=true&w=majority`;

db.mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



  function initial() {
    Role.estimatedDocumentCount().then((count) => {
      if ( count === 0) {
        new Role({
          name: "user"
        }).save().then(()=>{
          console.log("added 'user' to roles collection");
        }).catch(err => {
          console.log("error", err);
        });
  
        new Role({
          name: "moderator"
        }).save().then(()=>{
          console.log("added 'moderator' to roles collection");
        }).catch(err => {
            console.log("error", err);
        });
  
        new Role({
          name: "admin"
        }).save().then(()=>{
          console.log("added 'admin' to roles collection");
        }).catch(err => {
            console.log("error", err);
        });
      }
    }).catch((err) => console.error(err));
  }