import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js"
// dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server)

app.set("port", process.env.PORT || 8000);

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" , extendent: true}))
app.use("/api/v1/users" , userRoutes);


// // Test Route
// app.get("/home", (req, res) => {
//   return res.json({ hello: "world" });
// });

const start = async () => {
  try {
    // Log environment variable to debug
    console.log("MONGO_URI:", "mongodb+srv://mariyumsiddique02:AimaankhanMariyum@meetly.egvj9.mongodb.net/");

    // Attempt MongoDB connection
    const connectionDb = await mongoose.connect("mongodb://localhost:27017/meetly", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    console.log(`MongoDB connected. Host: ${connectionDb.connection.host}`);

    // Start the server
    server.listen(app.get("port"), () => {
      console.log(`Server is running on port ${app.get("port")}`);
    });

    // Handle socket.io connections
    io.on("connection", (socket) => {
      console.log("A user connected");
      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  } catch (error) {
    console.error("Error starting the application:", error.message);
    process.exit(1);
  }
};

start();
