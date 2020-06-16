import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';

import User from '../../models/User';

class UserController {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const user = await this.ormRepository.findOne(id);

    const updatedUser = {
      ...user,
      active_account: false,
    };

    await this.ormRepository.save(updatedUser);

    return res.json(updatedUser);
  }
}

export default new UserController();
