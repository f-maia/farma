import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/upload';

import verifyAuthentication from './app/middlewares/verifyAuthentication';
import verifyAccountActivityStatus from './app/middlewares/verifyAccountActivityStatus';

import UserController from './app/controllers/User/UserController';
import UserAddressController from './app/controllers/User/UserAddressController';
import UserPersonalInfoController from './app/controllers/User/UserPersonalInfoController';
import ClientController from './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';
import PharmacyController from './app/controllers/PharmacyController';
import ProductController from './app/controllers/ProductController';
import StockController from './app/controllers/StockController';
import FavoriteController from './app/controllers/FavoriteController';
import AlarmController from './app/controllers/AlarmController';
import FileController from './app/controllers/FileController';

const routes = Router();
const upload = multer(multerConfig);

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

routes.get('/users/favorites', FavoriteController.index);
routes.get('/users/favorites/:user_id', FavoriteController.show);
routes.post('/users/favorites', FavoriteController.create);
routes.delete('/users/favorites/:user_id', FavoriteController.delete);

routes.get('/users/alarms', AlarmController.index);
routes.get('/users/alarms/:id', AlarmController.show);
routes.post('/users/alarms', AlarmController.create);
routes.put('/users/alarms/:id', AlarmController.update);
routes.delete('/users/alarms/:id', AlarmController.delete);

routes.get('/upload/:owner_id', FileController.index);
routes.delete('/upload/:owner_id/:id', FileController.delete);
routes.post('/upload', upload.single('file'), FileController.create);

export default routes;
