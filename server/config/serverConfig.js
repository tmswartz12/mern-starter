let mongoURL;
import dotenv from "dotenv";
dotenv.config();

if (process.env.NODE_ENV === "development") {
  mongoURL = "mongodb://localhost:27017/mern-starter";
} else {
  mongoURL = process.env.MONGO_URL;
}

export default { mongoURL };
