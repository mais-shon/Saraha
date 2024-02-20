import Joi from "joi";

export const signUpSchema=Joi.object({
    userName:Joi.string().alphanum().min(4).required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    cPassword:Joi.string().valid(Joi.ref('password')).required()
}).required()

//signup
export const signInSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
}).required()