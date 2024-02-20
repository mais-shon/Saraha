import {Router} from 'express'
import * as userController from './controller/user.controller.js';
import { auth } from '../../middleWare/auth.middleWare.js';
import { asyncHandler } from '../../../services/errorHandler.js';
import findUpload from '../../../services/multer.js';
import { HME } from '../../../services/multer.js';


const router=Router();

router.patch('/profilePic',findUpload().single('image'),auth,HME,userController.profilePic)

export default router;