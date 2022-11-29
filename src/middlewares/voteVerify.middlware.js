import { voteSchema } from "../models/schemas.js";

export default async function voteVerifyMiddlware(req,res,next) {
    try{
        const newOption = req.body;

        const validation = voteSchema.validate(newOption, {abortEarly:false});

        if(validation.error){
            const errorList = validation.error.details.map(d => d.message);
            return res.status(422).send(errorList);
        };

        next()


    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};


// try{
          
// }catch(err){
//     console.log(err);
//     res.sendStatus(500);
// };

// const validation = voteSchema.validate(newOption, {abortEarly:false});
        
//         if(validation.error){
//             const errorList = validation.error.details.map(d => d.message);
//             return res.status(422).send(errorList);
//         };