import { ObjectId } from "mongodb";
import { dbOptions, dbPolls, dbVotes } from "../database/db.js";

export default async function pollResultController(req,res) {
    try{
        const {id} = req.params;

        const pollFind = await dbPolls.findOne({_id:ObjectId(id)});

        if(!pollFind) return res.sendStatus(404);

        
        //criar um array que contabiliza os votos
        const choicesList = await dbOptions.find({pollId:ObjectId(id)}).toArray();

        let contador = 0;
        const votesArray = [];

        for(let i = 0 ; i < choicesList.length ; i++){
            const voteList = await dbVotes.find({choiceId:choicesList[i]._id}).toArray();
            voteList.map(()=> contador++);
            votesArray.push({
                title:choicesList[i].title,
                votes:contador
            });
            contador = 0;
        };

        //organiza o array de votos de forma decrescente
        const arrayOrganize = votesArray.sort((a,b) => {
            return a.votes > b.votes ? -1 : 1
        });

        const result = {
            ...pollFind,
            result:arrayOrganize[0]
        };

        res.send(result);

    }catch(err){
        console.log(err);
        res.sendStatus(500);
    };
};
