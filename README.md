# Patient API Documentation

### Day 1 - TODOS
- Create Routes for API
- Install Middelware for Express
- Install  Database ORM Package (Knex)

# GET STARTED HERE:
 - Clone the repo
 - Once dowmload is finished - cd into the parient-api directory
 - THen run `npm `install  to install dependencies
 - To Run: `npm run start` 

### API Routes
#### Patient API ENDPOINTS
- /patients/create => POST request --Create a new patient
 -/patients => GET request -- Show All patients
 -/patients/:id => GET Request -- Show 1 patient vbased on ID
 -/patients/update/:id => Post request == Update patient based on ID
 - /patients/create => Post erequest --Create a new patient
 -/patients/delete/:id => DELETE request ==Delete a patient based on ID

#### USER AUTH ENDPOINTS:
-/api/user/register => POST request =-- Create a new User
-/api/user/login => POST request -- Login user with creds and produce a signed API key

### Project Dependencies
- bcryptjs
- body-parser
- cors
- dotenv
- express
- jsonwebtoken( node version)
- knex (ORM)
- nodemon ( hot-reload server on saves)
- pg (POSTGRES)
