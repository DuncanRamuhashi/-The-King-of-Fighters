import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import stageRoutes from './routes/stageRoutes.js';
import playerRouters from './routes/playerRoutes.js';
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

app.use("/api/stages", stageRoutes);
app.use("/api/players", playerRouters);

export default app;