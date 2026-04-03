import connectDB from "./db/index.js";
// import dotenv from "dotenv";
// dotenv.config({
//    path:'./.env'
// })
console.log("indexSrc: 1");
await connectDB();
console.log("indexSrc: 2");