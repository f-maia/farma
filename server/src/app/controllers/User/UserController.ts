import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../../models/User';

class UserController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const pharmaciesRepository = getRepository(User);

    const pharmacy = await pharmaciesRepository.findOne(id);
    if (!pharmacy) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(pharmacy);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const updatedUser = {
      ...user,
      active_account: false,
    };

    await usersRepository.save(updatedUser);

    return res.json(updatedUser);
  }
}

export default new UserController();
