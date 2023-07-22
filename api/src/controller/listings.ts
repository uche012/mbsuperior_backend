import { Request, Response } from "express";  //import those two which are typescript types for the request and response functions.

//req and res are predefined functions in NODE.js which are used to handle the req and res to and from server 

//mock data being sent to server 
const listingsdata = [
    { address:"address", type:"duplex"}
]


  // FUNCTION FOR RECIEVING OR REQUESTING FROM SERVER
export const getdata = async (req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
   req.body= listingsdata
   //req.body is the body of the request being sent/asked for in this case our mock data/ in other cases it may be info recived from database 
  res.status(200).json(req.body);  // what we want to be returned if our req was successful. could be any word, sentence , variable,
};







