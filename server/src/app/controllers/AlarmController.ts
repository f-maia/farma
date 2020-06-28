import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Alarm from '../models/Alarm';

class AlarmController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { id: user_id } = req.user;
    const alarmsRepository = getRepository(Alarm);

    const alarm = await alarmsRepository.findOne({
      where: {
        id,
        user_id,
      },
    });

    const statusCode = alarm ? 200 : 204;

    return res.status(statusCode).json(alarm);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q = '' } = req.query;
    const { id } = req.user;
    const alarmsRepository = getRepository(Alarm);

    const alarms = await alarmsRepository.find({
      where: {
        user_id: id,
      },
    });

    const filteredAlarms = alarms.filter(alarm => {
      const title = alarm.title.toLocaleLowerCase();
      const query = String(q).toLocaleLowerCase();

      return title.includes(query);
    });

    return res.json(filteredAlarms);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { title, description, date } = req.body;
    const alarmsRepository = getRepository(Alarm);

    const alarm = alarmsRepository.create({
      user_id: id,
      title,
      description,
      date,
    });

    await alarmsRepository.save(alarm);

    return res.json(alarm);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { id: user_id } = req.user;
    const { title, description, date } = req.body;
    const alarmsRepository = getRepository(Alarm);

    const alarm = await alarmsRepository.findOne({
      where: {
        id,
        user_id,
      },
    });
    if (!alarm) {
      return res.status(400).json({ error: 'Alarm not found' });
    }

    const updatedAlarm = {
      ...alarm,
      title,
      description,
      date,
    };

    await alarmsRepository.save(updatedAlarm);

    return res.json(updatedAlarm);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { id: user_id } = req.user;
    const alarmsRepository = getRepository(Alarm);

    const alarm = await alarmsRepository.findOne({
      where: {
        id,
        user_id,
      },
    });

    if (!alarm) {
      return res.status(400).json({ error: 'Alarm not found' });
    }

    await alarmsRepository.remove(alarm);

    return res.json(alarm);
  }
}

export default new AlarmController();
