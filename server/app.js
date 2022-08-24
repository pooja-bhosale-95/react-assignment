import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.get("/signin", (req, res) => {
  res.status(200).json({
    message: {
      access_token: "token 86ecc77628c9544:bb3daa49eab307e",
      email: "test@gmail.com",
    },
  });
});

app.get("/clientlist", (req, res) => {
  res.status(200).json({
    data: [
      {
        name: "Preston Clyde-01",
      },
      {
        name: "Melissa Dane-03",
      },
      {
        name: "Bruce Wayne-02",
      },
    ],
  });
});

app.post("/Preston%20Clyde-01", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    data: "Thank you",
  });
});

app.post("/Melissa%20Dane-03", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    data: "Thank you",
  });
});

app.post("/Bruce%20Wayne-02", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    data: "Thank you",
  });
});

const PORT = "5000";

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
});
