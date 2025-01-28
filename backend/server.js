import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import stageRoutes from './routes/stageRoutes.js';
import playerRouters from './routes/playerRoutes.js';
import cors from "cors";
dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT || 4000;

// Use express.json to parse incoming JSON requests, with an increased limit
app.use(express.json({ limit: '10mb' }));  // limit issues again

app.use(cors());
app.use("/api/stages", stageRoutes);
app.use("/api/players", playerRouters);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
