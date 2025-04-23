import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  console.log("user에 존재하는 미들웨어");
  next();
});

router.get("/", (req, res) => {
  res.status(200).send("GET: /users 회원 정보 보기");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /users 회원가입");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /users/:id 정보수정");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /users/:id 삭제");
});

export default router;
