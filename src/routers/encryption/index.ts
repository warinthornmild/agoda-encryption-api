/**
 * Required External Modules and Interfaces
 */

import { Request, Response, NextFunction, Router } from "express";
import EncryptService, { IEncryptService } from "../../services/encrypt";
import DecryptService, { IDecryptService } from "../../services/decrypt";
import { Text } from "../../entities/text.interface";
import { Encrypted } from "../../entities/encrypted.interface";

export default function itemRouter(): Router {
  const router = Router();
  const encryptService: IEncryptService = new EncryptService();
  const decryptService: IDecryptService = new DecryptService();

  /**
   * Encryption Endpoints
   */

  // POST /encrypt

  router.post("/encrypt", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Encrypted[] = await encryptService.encryptTextList(req.body?.data);

      res.status(200).send({ data });
    } catch (err) {
      next(err);
    }
  });

  // POST /decrypt

  router.post("/decrypt", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Text[] = await decryptService.decryptTextList(req.body?.data);

      res.status(200).send({ data });
    } catch (err) {
      next(err);
    }
  });

  return router;
}

