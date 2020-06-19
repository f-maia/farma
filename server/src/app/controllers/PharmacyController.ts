import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Pharmacy from '../models/Pharmacy';

import CreateUserService from '../services/CreateUserService';

class PharmacyController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const pharmaciesRepository = getRepository(Pharmacy);

    const pharmacy = await pharmaciesRepository.findOne(id);
    if (!pharmacy) {
      return res.status(400).json({ error: 'Pharmacy not found' });
    }

    return res.json(pharmacy);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const pharmaciesRepository = getRepository(Pharmacy);

    const pharmacies = await pharmaciesRepository.find();

    return res.json(pharmacies);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { description, cnpj, ...rest } = req.body;
    const pharmaciesRepository = getRepository(Pharmacy);

    const { id } = await CreateUserService.run(rest, 'pharmacy');

    const pharmacy = pharmaciesRepository.create({
      id,
      description,
      cnpj,
    });

    await pharmaciesRepository.save(pharmacy);

    return res.json(pharmacy);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { description, cnpj } = req.body;
    const pharmaciesRepository = getRepository(Pharmacy);

    const pharmacy = await pharmaciesRepository.findOne(id);
    if (!pharmacy) {
      return res.status(400).json({ error: 'Pharmacy not found' });
    }

    const updatedPharmacy = {
      ...pharmacy,
      cnpj,
      description,
    };

    await pharmaciesRepository.save(updatedPharmacy);

    return res.json(updatedPharmacy);
  }
}

export default new PharmacyController();
