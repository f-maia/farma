import { getRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

class CreateUserService {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async run(userDTO: User): Promise<User> {
    const { email, password } = userDTO;

    const userExists = await this.ormRepository.findOne({
      where: { email },
    });
    if (userExists) {
      throw new Error('Email address already in use.');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.ormRepository.create({
      ...userDTO,
      password: hashedPassword,
      active_account: true,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default new CreateUserService();
