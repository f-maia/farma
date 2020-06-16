import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';

import User from '../../models/User';

class UserAddressController {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

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

    const user = await this.ormRepository.findOne(id);

    const updatedUser = {
      ...user,
      street,
      address_details,
      building_number,
      uf,
      city,
      zip_code,
    };

    await this.ormRepository.save(updatedUser);

    return res.json(updatedUser);
  }
}

export default new UserAddressController();
