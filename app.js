const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const sequelize = require("./utils/database");

const app = express();

const userRoutes = require('./routes/user');

app.use(cors());
app.use(bodyParser.json({extended: false}));

app.use("/user", userRoutes);

app.use((req, res, next)=>{

    res.status(404).send('<h1>Page not found</h1>')

});


sequelize
// .sync({force: true})
.sync()
.then(server => {
    console.log(server);
    app.listen(3000);
})


