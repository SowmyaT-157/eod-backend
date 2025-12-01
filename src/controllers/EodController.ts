import { Request, Response } from "express";


const eodData = [{title:"event",description:"today I enjoyed the event",blockers:"I forgot my phone"}]

const getTheEod = (req:Request,res:Response)=>{
    try{
        if(eodData.length == 0){
            return res.status(404).json({message:"data is not there"})
        }else{
            return res.status(200).json({message:"fetched the data",eodData})
        }
        }catch{
            return res.status(400).json({message:"data is not fetching"})
        }
   }
export default getTheEod
