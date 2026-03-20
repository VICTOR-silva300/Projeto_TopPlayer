import { Router } from "express"
import * as playersController from "../controllers/playersController.js"

const router = Router()

router.get("/", playersController.listar)
router.get("/:id", playersController.buscarPorId)
router.post("/", playersController.criar)
router.put("/:id", playersController.atualizar)
router.delete("/:id", playersController.deletar)

export default router