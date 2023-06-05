import { Request, Response, Router } from 'express';
import { IMaterial } from '../../../shared/types';
import * as materialRepo from '../repo/material.repo';
import {
  dateValidation,
  colorValidation,
  stringValidation,
  numberValidation
} from '../../utils/validation';

// Validation middleware
const validateMaterials = (
  req: Request<any, any, IMaterial>,
  res: Response,
  next: Function
) => {
  const { color, name, cost, deliveryDate, volume } = req.body;

  if (
    !colorValidation(color) ||
    !stringValidation(name) ||
    !numberValidation(volume) ||
    !numberValidation(cost) ||
    !dateValidation(deliveryDate)
  )
    return res.json({ success: false, msg: 'Invalid data' });
  else next();
};

const router = Router();

router.get('/', async (req: Request<any, any, IMaterial>, res: Response) => {
  try {
    const materials = await materialRepo.getAll();
    res.json({ success: true, materials });
  } catch (error: any) {
    res.json({ success: false, msg: error.message });
  }
});

router.post(
  '/',
  validateMaterials,
  async (req: Request<any, any, IMaterial>, res: Response) => {
    try {
      const newId = await materialRepo.insert(req.body);
      res.json({ success: true, newId });
    } catch (error: any) {
      res.json({ success: false, msg: error.message });
    }
  }
);

router.put(
  '/',
  validateMaterials,
  async (req: Request<any, any, IMaterial>, res: Response) => {
    try {
      await materialRepo.update(req.body);
      res.json({ success: true });
    } catch (error: any) {
      res.json({ success: false, msg: error.message });
    }
  }
);

router.delete(
  '/:id',
  async (req: Request<any, any, IMaterial>, res: Response) => {
    try {
      const { id } = req.params;

      await materialRepo.remove(id);
      res.json({ success: true });
    } catch (error: any) {
      res.json({ success: false, msg: error.message });
    }
  }
);

export default router;
