import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Stock from '../models/Stock';

class StockController {
  async show(req: Request, res: Response): Promise<Response> {
    const { pharmacy_id, product_id } = req.params;
    const stocksRepository = getRepository(Stock);

    const stockProduct = await stocksRepository.findOne({
      where: {
        product_id,
        pharmacy_id,
      },
    });
    if (!stockProduct) {
      return res.status(400).json({ error: 'Stock product not found' });
    }

    return res.json(stockProduct);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q = '' } = req.query;
    const { pharmacy_id } = req.params;
    const stocksRepository = getRepository(Stock);

    const stockProducts = await stocksRepository.find({
      where: {
        pharmacy_id,
      },
    });

    const filteredStocks = stockProducts.filter(stockProduct => {
      const name = stockProduct.product_info.name.toLocaleLowerCase();
      const query = String(q).toLocaleLowerCase();

      return name.includes(query);
    });

    return res.json(filteredStocks);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { product_id, price, quantity } = req.body;
    const stocksRepository = getRepository(Stock);

    const stockProduct = stocksRepository.create({
      product_id,
      pharmacy_id: id,
      price,
      quantity,
    });

    await stocksRepository.save(stockProduct);

    return res.json(stockProduct);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;
    const { id: pharmacy_id } = req.user;
    const { price, quantity } = req.body;
    const stocksRepository = getRepository(Stock);

    const stockProduct = await stocksRepository.findOne({
      where: {
        product_id,
        pharmacy_id,
      },
    });
    if (!stockProduct) {
      return res.status(400).json({ error: 'Stock product not found' });
    }

    const updatedStock = {
      ...stockProduct,
      price,
      quantity,
    };

    await stocksRepository.save(updatedStock);

    return res.json(updatedStock);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;
    const { id: pharmacy_id } = req.user;
    const stocksRepository = getRepository(Stock);

    const stockProduct = await stocksRepository.findOne({
      where: {
        product_id,
        pharmacy_id,
      },
    });
    if (!stockProduct) {
      return res.status(400).json({ error: 'Stock product not found' });
    }

    await stocksRepository.remove(stockProduct);

    return res.json(stockProduct);
  }
}

export default new StockController();
