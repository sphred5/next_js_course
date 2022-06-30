export default function handler(req, res){

  if (req.method === "POST"){
    const {email, name, text} = req.body;

    if(!email.includes("@") || 
    !name 
    || name.trim() === "" 
    || !text 
    || text.trim() === "") {
    res.status(422).json({message: "Invalid Input"});
    return;
    }
    const newComment = {
      id : new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({message: "added comment", comment: newComment})
  }
  if (req.method === "GET"){
    const dummyList = [
      {id: 'c1', name: "steven", text: "my first comment"},
      {id: 'c2', name: "ron", text: "another comment"},
      {id: 'c3', name: "dj", text: "a different comment"},
    ]
    res.status(200).json({comments : dummyList});
  }
}