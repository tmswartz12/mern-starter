import express from "express";
const router = express.Router();
import attachUserToRequest from "../middleware/authMiddleware.js";
import user from "./user.js";

router.use(attachUserToRequest);
router.use("/user", user);

router.use((req, res, next) => {
  const error = new Error("Not Found Here");
  error.status = 404;
  next(error);
});

export default router;
