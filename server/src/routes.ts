import { Router } from 'express';

import UserController from './app/controllers/User/UserController';
import UserAddressController from './app/controllers/User/UserAddressController';
import UserPersonalInfoController from './app/controllers/User/UserPersonalInfoController';
import ClientController from './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';
import PharmacyController from './app/controllers/PharmacyController';

import verifyAuthentication from './app/middlewares/verifyAuthentication';
import verifyAccountActivityStatus from './app/middlewares/verifyAccountActivityStatus';
import ProductController from './app/controllers/ProductController';
import StockController from './app/controllers/StockController';

const routes = Router();

routes.post('/users/client', ClientController.create);
routes.post('/users/pharmacy', PharmacyController.create);

routes.get('/users/pharmacy', PharmacyController.index);
routes.get('/users/pharmacy/:id', PharmacyController.show);

routes.get('/pharmacy/:pharmacy_id/stocks', StockController.index);
routes.get('/pharmacy/:pharmacy_id/stocks/:product_id', StockController.show);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.post('/sessions', SessionController.create);
routes.use(verifyAuthentication);
routes.use(verifyAccountActivityStatus);

routes.delete('/users', UserController.delete);

routes.put('/users/personal-info', UserPersonalInfoController.update);
routes.put('/users/address', UserAddressController.update);
routes.put('/users/client', ClientController.update);
routes.put('/users/pharmacy', PharmacyController.update);

routes.post('/products', ProductController.create);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.post('/stocks', StockController.create);
routes.put('/stocks/:product_id', StockController.update);
routes.delete('/stocks/:product_id', StockController.delete);

export default routes;
