import { Router } from 'express';
import * as controller from '../controllers/listing.controller';

const router = Router();

router.get("/listing", controller.list);
router.post("/listing", controller.create);
router.get("/listing/:id", controller.getById);
router.get("/listing/:company", controller.getByCompany);

export default router;