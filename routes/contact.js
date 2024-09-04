import express from 'express';
import contact from '../controllers/contact.js';

const router =express.Router();

router.post('/sendmessage',contact.createMessage)

export default router;