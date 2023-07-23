22/7/2023

TASKS:
create a database
connect to database
create a model/schema for items being sent or returned from database
send and return data fom databse

register on MongoDB and create an account
create new database/cluster

choose to connect with VScode
copy database link

in api folder, install mongoose and dotenv
yarn add mongoose
yarn add dotenv   

create a .env file in api folder
create a .gitignore file in api folder

in .env file create a variable ANYNAME in all caps, for convention DATABASE or DATABASE_URL
assign the database link to that variable. DATABSE = databaselink

in the databse link change the <password> to the password you chose while creating account.

create server.ts in src folder
create model folder in src folder

import mongoose in server.ts
import dotenv in server.ts

initiallize/call dotenv "dotenv.config"
connect to databse with mongoose. "mongoose.connect()"

create listings.ts file in model folder.
in the file >>
import mongoose, {Document} from mongoose
creaate new listings schema/model. const listingsSchema = new mongoose.Schema({})
create typescript type for the modeled data. ie, export type ListingsDocument{ address: string }

export mongoose.model("name", listingsSchema)
add the type to mongoose.model

create Services folder in src folder: this folder handles communication between server and database.
