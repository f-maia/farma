import { Router } from 'express';

import UserController from './app/controllers/User/UserController';
import UserAddressController from './app/controllers/User/UserAddressController';
import UserPersonalInfoController from './app/controllers/User/UserPersonalInfoController';
import ClientController from './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';
import PharmacyController from './app/controllers/PharmacyController';

import verifyAuthentication from './app/middlewares/verifyAuthentication';
import verifyAccountActivityStatus from './app/middlewares/verifyAccountActivityStatus';

const routes = Router();

routes.post('/users/client', ClientController.create);
routes.post('/users/pharmacy', PharmacyController.create);
// routes.get('/users/:id', UserController.show);

routes.get('/users/pharmacy', PharmacyController.index);
routes.get('/users/pharmacy/:id', PharmacyController.show);

routes.post('/sessions', SessionController.create);
routes.use(verifyAuthentication);
routes.use(verifyAccountActivityStatus);

routes.delete('/users', UserController.delete);

routes.put('/users/personal-info', UserPersonalInfoController.update);
routes.put('/users/address', UserAddressController.update);
routes.put('/users/client', ClientController.update);
routes.put('/users/pharmacy', PharmacyController.update);

export default routes;
