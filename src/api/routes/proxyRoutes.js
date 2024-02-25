import express from 'express';
import ProxyController from '../controllers/ProxyController.js';

const router = express.Router();

router.get('/', ProxyController.list);
router.get('/:id', ProxyController.getById);
router.post('/', ProxyController.create);
router.put('/update/:id', ProxyController.update);
router.delete('/delete/:id', ProxyController.delete);

export default router;