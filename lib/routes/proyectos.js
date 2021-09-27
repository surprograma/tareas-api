import { index, show } from '../controllers/proyecto_controller';
import { errorAwareRouter } from './utils';

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', show);

export default router;
