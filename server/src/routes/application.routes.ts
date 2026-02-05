import { Router } from 'express';
import * as controller from '../controllers/application.controller';

const router = Router();

router.get("/", controller.list);
