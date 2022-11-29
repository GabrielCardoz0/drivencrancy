import { newPollSchema } from "../models/schemas.js";

export default function pollVerifyMiddleware(req,res,next) {
    try{
        const pollValidation = newPollSchema.validate(req.body,{abortEarly:false});

        if(pollValidation.error){
            const errorList = pollValidation.error.details.map(d => d.message);
            return res.status(422).send(errorList);
        };
        
        next();

    }catch(err){
        console.log(err);
        res.send(500)
    }
};
