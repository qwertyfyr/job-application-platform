import {Router} from 'express';
import * as controller from '../controllers/company.controller';

const router = Router();

router.get("/company", controller.list);
router.get("/company/:id", controller.getById);
router.post("/company/create", controller.create);