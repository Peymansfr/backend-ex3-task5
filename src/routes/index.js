import { Router } from 'express';
import * as pages from '../controllers/pagesController.js';
const router = Router();

router.get('/', pages.home);
router.get('/courses', pages.courses);
router.get('/contact', pages.contact);
router.post('/contact', pages.submitContact);

export default router;
