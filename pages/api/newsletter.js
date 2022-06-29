export default function handler(req, res) {
  if (req.method === 'POST') {
    const submittedEmail = req.body;
    res.status(200).json(submittedEmail)
  }
}
