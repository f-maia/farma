import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import File from '../models/File';

class FileController {
  async index(req: Request, res: Response): Promise<Response> {
    const { owner_id } = req.params;
    const filesRepository = getRepository(File);

    const files = await filesRepository.find({
      where: {
        owner_id,
      },
    });

    return res.json(files);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { owner_id } = req.body;
    const { filename } = req.file;
    const filesRepository = getRepository(File);

    let folder = 'products';

    const isAvatar = isUuid(owner_id);
    if (isAvatar) {
      folder = 'users';

      const avatar = await filesRepository.findOne({
        where: {
          owner_id,
        },
      });
      if (avatar) {
        await filesRepository.remove(avatar);
      }
    }

    const url = `${process.env.APP_URL}/files/${folder}/${filename}`;

    const file = filesRepository.create({
      owner_id,
      url,
    });

    await filesRepository.save(file);

    return res.json(file);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id, owner_id } = req.params;
    const { id: user_id } = req.user;
    const filesRepository = getRepository(File);

    if (user_id !== owner_id && Number.isNaN(owner_id)) {
      return res.status(400).json({ error: 'File not found' });
    }

    const file = await filesRepository.findOne({
      where: {
        id,
        owner_id,
      },
    });
    if (!file) {
      return res.status(400).json({ error: 'File not found' });
    }

    await filesRepository.remove(file);

    return res.json(file);
  }
}

export default new FileController();
