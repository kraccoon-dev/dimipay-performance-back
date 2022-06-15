import Joi from 'joi';
import { createService } from 'routes';

import question from './question.controller';
import answer from './answer.controller';
import like from './like.controller';

export default createService({
  name: 'post',
  baseURL: '/post',
  routes: [
    {
      method: 'post',
      path: '/question',
      needAuth: true,
      validateSchema: {
        receiver: Joi.string().required(),
        post: Joi.string().min(2).max(300).required(),
        type: Joi.string()
          .regex(/^(anonymous|onymous)$/)
          .required(),
      },
      handler: question,
    },
    {
      method: 'post',
      path: '/answer',
      needAuth: true,
      validateSchema: {
        questionId: Joi.string().required(),
        post: Joi.string().min(2).max(300),
        status: Joi.string()
          .regex(/^(accepted|rejected)$/)
          .required(),
      },
      handler: answer,
    },
    {
      method: 'post',
      path: '/like',
      needAuth: true,
      handler: like,
    },
  ],
});