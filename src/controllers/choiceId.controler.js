import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import { dbOptions, dbPolls, dbVotes } from "../database/db.js";

export default async function choiceIdControler(req,res) {
    try{
        const {id} = req.params;

        const voteVerify = await dbOptions.findOne({_id:ObjectId(id)});
        if(!voteVerify) return res.sendStatus(404);


        //verificação se a equete está vencida:
        const now = dayjs(Date.now()).format("YYYY-MM-DD HH:mm");

        const {expireAt} = await dbPolls.findOne({_id:ObjectId(voteVerify.pollId)});

        const arrVerication = [expireAt,now];

        if(arrVerication.sort()[1] === now) return res.sendStatus(403);


        //Envio do voto para o database:
        const newVote = {
            createdAt: now, 
            choiceId: ObjectId(id)
        };

        const voteInsert = await dbVotes.insertOne(newVote);


        res.sendStatus(201);
        
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};
