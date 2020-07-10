import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Pharmacy from '../models/Pharmacy';

import CreateUserService from '../services/CreateUserService';

class PharmacyController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const pharmaciesRepository = getRepository(Pharmacy);

    const pharmacy = await pharmaciesRepository.findOne(id);
    if (!pharmacy || !pharmacy.user.active_account) {
      return res.status(400).json({ error: 'Pharmacy not found' });
    }

    return res.json(pharmacy);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q = '' } = req.query;
    const pharmaciesRepository = getRepository(Pharmacy);

    const pharmacies = await pharmaciesRepository.find({
      relations: ['user'],
    });

    const filteredPharmacies = pharmacies.filter(pharmacy => {
      const { active_account } = pharmacy.user;
      const name = pharmacy.user.name.toLocaleLowerCase();
      const query = String(q).toLocaleLowerCase();

      return name.includes(query) && active_account;
    });

    return res.json(filteredPharmacies);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { description, cnpj, ...rest } = req.body;
    const pharmaciesRepository = getRepository(Pharmacy);

    try {
      const user = await CreateUserService.run(rest, 'pharmacy');

      const pharmacy = pharmaciesRepository.create({
        id: user.id,
        description,
        cnpj,
      });

      await pharmaciesRepository.save(pharmacy);

      return res.json({
        ...user,
        pharmacy,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
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
