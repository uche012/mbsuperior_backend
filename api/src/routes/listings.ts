//ROUTER: Defines the HTTP methods to be called/used
  //http methods: 
  //GET to retrieve data from server/database.
  //POST to send/create new data to server/database
  //DELETE to delete data from server/database
  //UPDATE to update data

import Router from "express"; // import the router module from express
import  {getdata }from "../controller/listings"; // getdata function defined in controllers defines what the method should do or return. 

const router = Router(); // assign to a variable router
//defines HTTP METHOD BEING USED 
router.post("/", getdata); // define HTTP method that will be used to route/connct/reach server
// leave an empty directory because we do not want to create a new page/link, then call the function that defines what the HTTP method should do or return which has been defined in controller (listings.ts)



export default router;   //export the whole router



