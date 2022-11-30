import dayjs from "dayjs";
import { dbPolls } from "../database/db.js";

export default async function createPollController(req,res) {
    try{
        const newPoll = req.body;

        if(newPoll.expireAt === ""){
            const after30days = dayjs(Date.now()+30*86400000).format("YYYY-MM-DD HH:mm");
            newPoll.expireAt = after30days;
        };
        
        await dbPolls.insertOne(newPoll);

        return res.sendStatus(201);

    }catch(err){
        console.log(err);
        return res.sendStatus(500);
    };
};
