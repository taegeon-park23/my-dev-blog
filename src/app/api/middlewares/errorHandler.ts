// src/app/api/helpers/error/errorHandler.ts
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../helpers/error/CustomError';

export function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction) {
  if (err) {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({ message });
  } else {
    next();
  }
}
