import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config(() => {
  path: "./env";
});

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error)=>{
        console.error("problem in MongoDB Connection !!!", error);
    })
