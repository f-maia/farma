import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Client from '../models/Client';

import CreateUserService from '../services/CreateUserService';

class ClientController {
  async create(req: Request, res: Response): Promise<Response> {
    const { cpf, ...rest } = req.body;
    const clientsRepository = getRepository(Client);

    const { id } = await CreateUserService.run(rest);

    const client = clientsRepository.create({
      id,
      cpf,
    });

    await clientsRepository.save(client);

    // Just some test, remove it afterwards
    const client2 = await clientsRepository.findOne(id);

    return res.json(client2);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { cpf } = req.body;
    const clientsRepository = getRepository(Client);

    const client = await clientsRepository.findOne(id);
    if (!client) {
      return res.status(400).json({ error: 'Client not found' });
    }

    const updatedClient = {
      ...client,
      cpf,
    };

    await clientsRepository.save(updatedClient);

    return res.json(updatedClient);
  }
}

export default new ClientController();
