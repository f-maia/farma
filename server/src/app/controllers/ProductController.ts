import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Product from '../models/Product';

class ProductController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    return res.json(product);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q = '' } = req.query;
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();

    const filteredProducts = products.filter(product => {
      const name = product.name.toLocaleLowerCase();
      const query = String(q).toLocaleLowerCase();

      return name.includes(query);
    });

    return res.json(filteredProducts);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, description, needs_recipe = false } = req.body;
    const productsRepository = getRepository(Product);

    const product = productsRepository.create({
      name,
      description,
      needs_recipe,
    });

    await productsRepository.save(product);

    return res.json(product);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, description, needs_recipe } = req.body;
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    const updatedProduct = {
      ...product,
      name,
      description,
      needs_recipe,
    };

    await productsRepository.save(updatedProduct);

    return res.json(updatedProduct);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne(id);
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    await productsRepository.remove(product);

    return res.json(product);
  }
}

export default new ProductController();
