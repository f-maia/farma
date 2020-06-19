import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { TypeAccount } from '../../utils/TypeAccounts';
import User from '../models/User';

class CreateUserService {
  async run(userDTO: User, type = 'client'): Promise<User> {
    const { email, password } = userDTO;
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({
      where: { email },
    });
    if (userExists) {
      throw new Error('Email address already in use.');
    }

    const hashedPassword = await hash(password, 10);

    const type_account = type as unknown;

    const user = await usersRepository.create({
      ...userDTO,
      password: hashedPassword,
      active_account: true,
      type_account: type_account as TypeAccount,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default new CreateUserService();
