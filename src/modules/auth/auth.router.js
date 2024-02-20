import {Router} from 'express'
import * as authController from './controller/auth.controller.js'
import { asyncHandler } from '../../../services/errorHandler.js';
import validation from '../../middleWare/validation.js'
import * as validators from './auth.validate.js'
const router=Router();
router.post('/signUp',validation(validators.signUpSchema),asyncHandler(authController.signUp))
router.post('/signIn',validation(validators.signInSchema),asyncHandler(authController.signIn))
router.get('/confirmEmail/:token',asyncHandler(authController.confirmEmail))

export default router;