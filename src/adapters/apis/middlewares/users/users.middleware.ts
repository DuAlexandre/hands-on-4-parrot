import debug from 'debug';
import { Joi, validate } from 'express-validation';

const log: debug.IDebugger = debug('app:users-middleware');

class UsersMiddleware {

    createValidator = validate({
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            apartment: Joi.number().required(),
            password: Joi.string().min(6).required(),
            photo: Joi.string().required()
        })
    })

    updateValidator = validate({
        body: Joi.object({
            idUser: Joi.number().exist().required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            apartment: Joi.number().required(),
            password: Joi.string().min(6).required(),
            photo: Joi.string().required()
        })
    })

    idValidator = validate({
        params: Joi.object({
            idUser: Joi.number().exist().required()
        })
    })
}

export default new UsersMiddleware();