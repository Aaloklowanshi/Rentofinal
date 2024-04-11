const mongoose = require('mongoose');
const express  = require('express');
const { User } = require("./db");
const app = express();
const authRoute = require("./routes/auth");


const port = 8000;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require("cors"); 

app.use(cors());

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

mongoose.connect('mongodb+srv://om:Ye6hkj4c3OvOtNYl@cluster0.ynonr4i.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Rento-Db" });


