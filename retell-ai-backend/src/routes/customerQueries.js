import express from 'express';
import CustomerQueriesController from '../controllers/customerQueriesController.js';

const router = express.Router();
const customerQueriesController = new CustomerQueriesController();

router.post('/submit', customerQueriesController.submitQuery.bind(customerQueriesController));
router.get('/', customerQueriesController.getQueries.bind(customerQueriesController));

export default router;