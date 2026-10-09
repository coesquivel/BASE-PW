// admin/configs/routes.js
import { Router } from 'express';
import * as controller from '../controllers/admin_controllers.js';

const router = Router();

router.get('/', controller.home);

export default router;