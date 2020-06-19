import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../../models/User';

class UserPersonalInfoController {
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { name, email, tel } = req.body;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const checkEmailInUse = await usersRepository.findOne({ where: { email } });
    if (checkEmailInUse && user.id !== checkEmailInUse.id) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const updatedUser = {
      ...user,
      name,
      email,
      tel,
    };

    await usersRepository.save(updatedUser);

    return res.json(updatedUser);
  }
}

export default new UserPersonalInfoController();
