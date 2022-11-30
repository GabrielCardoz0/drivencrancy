import { ObjectId } from "mongodb";
import { dbOptions, dbPolls } from "../database/db.js";
import dayjs from "dayjs";

export default async function newVoteController(req,res) {
    try{
          const newOption = req.body;

          if(newOption.title === "") return res.sendStatus(422);



          const pollExist = await dbPolls.findOne({_id:ObjectId(newOption.pollId)});
          if(!pollExist) return res.sendStatus(404);



          //Verificação se a enquete está expirada
          const expireAt = pollExist.expireAt;
          const today = dayjs(Date.now()).format("YYYY-MM-DD HH:MM");
          const arrVerication = [expireAt,today];
          if(arrVerication.sort()[1] === today) return res.sendStatus(403);


          
          const optionList = await dbOptions.find({pollId:ObjectId(newOption.pollId)}).toArray();
          const titleOfOptionList = optionList.map( o => o.title);
          if(titleOfOptionList.includes(newOption.title)) return res.sendStatus(409);



          const newObjOption = {...newOption, pollId:ObjectId(newOption.pollId)};
          await dbOptions.insertOne(newObjOption);


          res.status(201).send(newObjOption);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};
