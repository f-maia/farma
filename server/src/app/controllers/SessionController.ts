import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email: String(email) },
    });
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Incorrect email/password combination.' });
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      return res
        .status(401)
        .json({ error: 'Incorrect email/password combination.' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const isPharmacy = String(user.type_account) === 'pharmacy';

    const token = sign(
      {
        phy: isPharmacy,
      },
      secret,
      {
        subject: user.id,
        expiresIn,
      },
    );

    return res.json({ user, token });
  }
}

export default new SessionsController();
