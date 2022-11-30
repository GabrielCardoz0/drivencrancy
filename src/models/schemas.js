import Joi from "joi";


export const newPollSchema = Joi.object({
    title:Joi.string().required().min(3),
    expireAt:Joi.string().min(16).required()
});

export const voteSchema = Joi.object({
    title: Joi.string().required(),
	pollId: Joi.string().required()
});