//Assign express library from package.json to a variable Express.
import Express from "express";
import cors from "cors";
//Assign Router from listings in the routes folder to a variable. ie listingsRouter
import listingsRouter from "./routes/listings";

//Define your main server variable and make it = the express library as a function
const app = Express(); // "()" followes function calls, ie Express(), the express library will be invoked/called whenever app is called.

app.use(Express.json()); // app should format/get/return all data in Json format
app.use(cors());

app.use("/listings", listingsRouter); // app should connect through the directory(listings) with the HTTP method to use..thus you call(listingsRouter) where the method was defined in.

export default app;
