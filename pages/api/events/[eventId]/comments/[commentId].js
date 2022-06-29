export default function handler(req, res){
  const commentId = req.query.eventId;
  if (req.method === "GET"){
    res.status(200).json({data: commentId});
  }
}