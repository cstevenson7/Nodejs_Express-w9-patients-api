const  express = require('express');

//Body Parser Import
const bodyparser = require('body-parser');

const app = express();

require('dotenv').config()

//Express Middlewhere
app.use(bodyparser.urlencoded({extended: false})) //Adding support for form values
app.use(bodyparser.json({extended: false})) //Adding support for json values
app.use(bodyparser.raw({extended: false})) //Adding support for eaw text values values

//Import for all API Routes: TODO
const patientRoute = require('./routes/patient');



//Using Route imports as Middleware: TODO
app.use('/',patientRoute)

const port = process.env.PORT || 3001;

app.listen(port,() => console.log(`Server is up at port ${port}`))
