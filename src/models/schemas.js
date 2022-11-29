import Joi from "joi";


export const newPollSchema = Joi.object({
    title:Joi.string().required(),
    expireAt:Joi.required()
}) 