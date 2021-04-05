const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
const handleEvent = (type, data) => {
  switch (type) {
    case "PostCreated":
      {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
      }
      break;
    case "CommentCreated":
      {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments.push({ id, content, status });
      }
      break;
    case "CommentUpdated": {
      const { id, content, postId, status } = data;
      const post = posts[postId];
      const comment = post.comments.find((comment) => comment.id === id);
      comment.status = status;
      comment.content = content;
    }
  }
};
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  const event = req.body;
  console.log('Received event: ', event);
  handleEvent(event.type, event.data);
  res.send({});
});

app.listen(4002, async () => {
  console.log("Listening on http://localhost:4002");
  const res = await axios.get("http://event-bus-srv:4005/events");
  for (let event of res.data) {
    console.log("Processing event:", event);
    handleEvent(event.type, event.data);
  }
});
