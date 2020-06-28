import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Favorite from '../models/Favorite';

class FavoriteController {
  async show(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;
    const { id, pharmacy } = req.user;
    const favoritesRepository = getRepository(Favorite);

    const favorite = await favoritesRepository.findOne({
      where: {
        [pharmacy ? 'pharmacy_id' : 'client_id']: id,
        [pharmacy ? 'client_id' : 'pharmacy_id']: user_id,
      },
    });

    const statusCode = favorite ? 200 : 204;

    return res.status(statusCode).json(favorite);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { id, pharmacy } = req.user;
    const favoritesRepository = getRepository(Favorite);

    const favorites = await favoritesRepository.find({
      where: {
        [pharmacy ? 'pharmacy_id' : 'client_id']: id,
      },
    });

    return res.json(favorites);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id, pharmacy } = req.user;
    const { user_id } = req.body;
    const favoritesRepository = getRepository(Favorite);

    const favorite = favoritesRepository.create({
      [pharmacy ? 'pharmacy_id' : 'client_id']: id,
      [pharmacy ? 'client_id' : 'pharmacy_id']: user_id,
    });

    await favoritesRepository.save(favorite);

    return res.json(favorite);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;
    const { id, pharmacy } = req.user;
    const favoritesRepository = getRepository(Favorite);

    const favorite = await favoritesRepository.findOne({
      where: {
        [pharmacy ? 'pharmacy_id' : 'client_id']: id,
        [pharmacy ? 'client_id' : 'pharmacy_id']: user_id,
      },
    });
    if (!favorite) {
      return res.status(400).json({ error: 'Favorite not found' });
    }

    await favoritesRepository.remove(favorite);

    return res.json(favorite);
  }
}

export default new FavoriteController();
