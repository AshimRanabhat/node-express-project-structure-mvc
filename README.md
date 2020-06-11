# node-express-project-structure-mvc

A complete project structure for small-medium scale node app that follows the mvc pattern with some boilerplate.

All the static files go into the public folder.
Server rendered files go into views folder. Ejs is used by default but feel free to use whatever you like.
Code that interacts with database goes into the models folder. Using a seperate file for every table is recommended.
Routes folder contains application's endpoints that handle both business logic. This is fine for smaller projects but if you want to seperate business logic and route handling create a controller folder for storing all the business logic and use routes exclusively for route handling.
Configurations and tests go into config and tests respectively.