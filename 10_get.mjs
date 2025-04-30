import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("login2.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});

app.get("/login", (req, res) => {
  console.log("login 호출~(get)");
  console.log(req.query);

  console.log("아이디: ", req.query.userid);
  console.log("비밀번호: ", req.query.userpw);

  fs.readFile("result.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("읽기 오류");
      return;
    }

    const outputtask = data
      .replace("{{userid}}", req.query.userid || "")
      .replace("{{userpw}}", req.query.userpw || "");

    res.status(200).set({ "Content-Type": "text/html" });
    res.send(outputtask);
  });
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
