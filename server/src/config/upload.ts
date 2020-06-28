import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { isUuid } from 'uuidv4';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const { owner_id } = req.body;

      const folder = isUuid(owner_id) ? 'users' : 'products';

      return cb(null, path.resolve(tmpFolder, folder));
    },
    filename(req, file, cb) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return cb(null, filename);
    },
  }),
};
