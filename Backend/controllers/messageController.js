const { getAllMessages, createMessage } = require('../models/messageModel');

async function getMessage(req, res){
    try {
        const messages = await getAllMessages();
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not fetch messages" });
    }
}

async function sendMessage(req, res){
     try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Message content required" });
    }

    const message = await createMessage(req.user.id, content);
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not send message" });
  }
}

module.exports = { getMessage, sendMessage };