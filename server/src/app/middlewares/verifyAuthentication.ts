import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  phy: boolean;
}

export default function verifyAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error('Missing JWT token');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret as string);

    const { sub, phy } = decoded as TokenPayload;

    req.user = {
      id: sub,
      pharmacy: phy,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
}
