import express from 'express';
import usuarios from './proyectos';

const router = express.Router();

router.use('/proyectos', usuarios);

export default router;
