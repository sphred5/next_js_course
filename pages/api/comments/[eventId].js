import {useContext} from 'react';
import { getAllDocuments, connectDatabase, insertDocument } from "../../../helpers/db-utils";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  }
  catch (error) {
    res.status(500).json({ message: "failed to connect to db" });
    return;
  }


  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text || text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "added comment", comment: newComment })
    }
    catch (error) {
      res.status(500).json({ message: "failed to add comment" });
    }
  }

  let documents;
  if (req.method === "GET") {
    try {
      documents = await getAllDocuments(
        client,
        "events",
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    }
    catch (error) {
      res.status(500).json({ message: "getting comments failed" })
    }
  }

  client.close()
}
