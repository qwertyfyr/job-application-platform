import { Router } from 'express';
import * as controller from '../controllers/application.controller';

const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.get("/:id", controller.getById);
router.get("/:company", controller.getByCompany);