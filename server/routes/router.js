import { Router } from "express";
import controller from "../controllers/controller.js";

const router = Router();

router.get('/tasks/:tab', controller.getTasks);

router.post('/add', controller.createTask);

router.put('/tasks/:id', controller.updateTask);

export default router;