import {Router} from 'express'
import * as messageController from './controller/message.controller.js';
import { auth } from '../../middleWare/auth.middleWare.js';
import { asyncHandler } from '../../../services/errorHandler.js';

const router=Router();
router.post('/sendMessage/:reciver_id',asyncHandler(messageController.sendMessage))
router.get('/getMessage',auth,asyncHandler(messageController.getMessage))
router.delete('/deleteMessage/:_Id',auth,asyncHandler(messageController.deleteMessage))

export default router;