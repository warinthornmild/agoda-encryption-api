import HttpError from "../common/http-error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;
  const message = error.message;

  response.status(status).send({ code: status, message });
};