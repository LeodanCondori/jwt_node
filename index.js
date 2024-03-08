import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import usersRouter from "./routes/users-routes.js";
import authRouter from "./routes/auth-routes.js";
import morgan from "morgan";
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = { credentials: true, origin: process.env.URL || "*" };
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/", express.static(join(__dirname, "public")));
// app.use(express.static(join(__dirname, "public"))); //this code line works the same as the prior one
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () =>
{
  `Server is listening on port:${PORT}`
})
