import debug from "debug";
import { Joi, validate } from 'express-validation';

const log: debug.IDebugger = debug('app:users-middleware');

class PostsMiddleware {

    createValidator = validate({
        body: Joi.object({
            content: Joi.string().required(),
            user_id: Joi.number().exist().required()
        })
    })

    updateValidator = validate({
        body: Joi.object({
            idPost: Joi.number().exist().required(),
            content: Joi.string().required(),
            user_id: Joi.number().exist().required()
        })
    })

    idValidator = validate({
        params: Joi.object({
            idPost: Joi.number().exist().required()
        })
    })
}

export default new PostsMiddleware();