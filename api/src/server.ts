import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_LINK as string)
  .then(() => {
    const port = 3001;
    app.listen(port, () => {
      console.log(`server is running on port  ${port} ...`);
    });
  })
  .catch((error: Error) => {
    console.error("check database connection..");
    process.exit(1);
  });
