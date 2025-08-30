import { Request, Response, NextFunction } from "express";

// Centralized error handler
const errorHandling = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // full error trace for debugging

  res.status(500).json({
    status: 500,
    message: "Something went wrong!",
    error: err.message, // short error message
  });
};

export default errorHandling;