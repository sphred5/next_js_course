export default function handler(req, res){
   if (req.method === "POST"){
    const submittedComment = req.body;
    res.status(200).json(submittedComment);
   }
}