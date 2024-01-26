import jwt from "jsonwebtoken";
import { errorHandler } from "./errror.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "User not logged in"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(errorHandler(401, "UnAuthorized"));
    }
    req.user = user; //req.user means getting the token from the browser
    next();
  });
};
