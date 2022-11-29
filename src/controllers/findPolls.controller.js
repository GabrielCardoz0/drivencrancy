import { dbPolls } from "../database/db.js";

export default async function findPollsController(req,res) {
    try{
        const pollsList = await dbPolls.find().toArray();
        res.status(200).send(pollsList);

    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};
