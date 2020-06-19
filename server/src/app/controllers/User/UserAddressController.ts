import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../../models/User';

class UserAddressController {
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const {
      street,
      address_details,
      building_number,
      uf,
      city,
      zip_code,
    } = req.body as User;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const updatedUser = {
      ...user,
      street,
      address_details,
      building_number,
      uf,
      city,
      zip_code,
    };

    await usersRepository.save(updatedUser);

    return res.json(updatedUser);
  }
}

export default new UserAddressController();
