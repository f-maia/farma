import { Router } from 'express';

import UserController from './app/controllers/User/UserController';
import UserAddressController from './app/controllers/User/UserAddressController';

import verifyAuthentication from './app/middlewares/verifyAuthentication';
import verifyAccountActivityStatus from './app/middlewares/verifyAccountActivityStatus';

const routes = Router();

// routes.post('/users/client', ClientController.create);
// routes.post('/users/pharmacy', PharmacyController.create);

routes.use(verifyAuthentication);
routes.use(verifyAccountActivityStatus);

routes.delete('/users', UserController.delete);

routes.put('/users/address', UserAddressController.update);
