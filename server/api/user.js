import express from "express";
const router = express.Router();
import axios from "axios";
import { User } from "../db/index.js";
import { AuthTokenService } from "../services/index.js";

export default router;

router.get("/", async (req, res, next) => {
  console.log("req", req.useragent);
  try {
    const user = await User.create({
      firstName: "Tyler",
      lastName: "Swartz",
      password: "Password",
      email: "tmswartz12@gmail.com",
    });
    const authToken = await AuthTokenService.create(user, req.useragent);
    return res.json({ user, authToken });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
