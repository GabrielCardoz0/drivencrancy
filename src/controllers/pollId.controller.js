import { ObjectId } from "mongodb";
import { dbOptions, dbPolls } from "../database/db.js";

export default async function pollIdController(req,res) {
    try{
        const { id } = req.params;
        const choicesList = await dbOptions.find({pollId:ObjectId(id)}).toArray();

        if(choicesList.length === 0) return res.sendStatus(404);

        res.status(200).send(choicesList);

    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};