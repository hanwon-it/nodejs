const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.json());

/*
    secret: 세션 ID 서명용 키
    resave: 매 요청시 세션 저장 여부
    saveUninitialized: 초기 빈 세션 저장 여부
    cookie.secure: HTTPS에서만 전송
*/

app.use(
  session({
    secret: "!@#$%^&*()",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.post("/login", (req, res) => {
  const { userid, password } = req.body;

  // 로그인 성공 시
  req.session.user = { userid };
  res.send(`로그인 성공: ${userid}`);
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
