import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

export default async function verifyAccountActivityStatus(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> {
  const { id } = req.user;
  const usersRepository = getRepository(User);

  const userExists = await usersRepository.findOne(id);
  if (!userExists) {
    return res.status(400).json({ error: 'User not found.' });
  }

  if (!userExists.active_account) {
    return res.status(400).json({ error: 'This account has been deleted.' });
  }

  return next();
}
