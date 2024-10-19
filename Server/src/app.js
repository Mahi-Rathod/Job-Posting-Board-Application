import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true,
//     exposedHeaders:['content-length', 'Authorization', 'Set-Cookie'],
// }));

app.use(express.json({
    limit:'16kb',
}));

app.use(express.urlencoded({
    extended:true,
    limit:'16kb',
}));

app.use(express.static("public"));

app.use(cookieParser());


import userRouter from "./routers/user.router.js";
import verifyMailRouter from "./routers/verifyEmail.router.js";
app.use('/api/users', userRouter);
app.use('/api/users', verifyMailRouter);

export default app;