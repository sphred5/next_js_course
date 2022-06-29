export default function handler(req, res){
   if (req.method === "POST"){
    const reqBody = JSON.parse(req.body);
    const submittedComment = {eventId : req.query.eventId, ...reqBody};
    res.status(200).json({data: submittedComment});
   }
}