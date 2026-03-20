import { Router } from "express";
import * as partidasController from '../controllers/partidasController.js';

const router = Router();

router.get('/', partidasController.listar);
router.post('/', partidasController.criar);
router.delete('/:id', partidasController.remover);

export default router;