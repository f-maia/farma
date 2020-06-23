import multer, { StorageEngine } from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface UploadConfig {
  tmpFolder: string;
  storage: StorageEngine;
}

enum uploadFolders {
  'products' = 'products',
  'users' = 'users',
}

export default function upload(directory: uploadFolders): UploadConfig {
  return {
    tmpFolder,
    storage: multer.diskStorage({
      destination: path.resolve(tmpFolder, uploadFolders[directory]),
      filename(req, file, cb) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const filename = `${fileHash}-${file.originalname}`;

        return cb(null, filename);
      },
    }),
  };
}
