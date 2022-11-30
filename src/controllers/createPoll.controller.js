import dayjs from "dayjs";
import { dbPolls } from "../database/db.js";

export default async function createPollController(req,res) {
    try{
        const newPoll = req.body;

        if(newPoll.expireAt === ""){
            const after30days = dayjs(Date.now()+30*86400000).format("YYYY-MM-DD HH:mm");
            newPoll.expireAt = after30days;
        };
        
        const pollInsert = await dbPolls.insertOne(newPoll);

        const newPollObj = {_id:pollInsert.isertedId, ...newPoll};
        
        return res.status(201).send(newPollObj);

    }catch(err){
        console.log(err);
        return res.sendStatus(500);
    };
};
