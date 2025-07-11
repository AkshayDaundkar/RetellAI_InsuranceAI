// filepath: c:\Users\Akshay\Desktop\Main Projects\Retell AI\retell-ai-backend\src\routes\paymentReminders.js
import express from 'express';
import PaymentRemindersController from '../controllers/paymentRemindersController.js';

const router = express.Router();
const controller = new PaymentRemindersController();

router.post('/reminders', controller.createReminder.bind(controller));
router.get('/reminders', controller.getReminders.bind(controller));

export default router;