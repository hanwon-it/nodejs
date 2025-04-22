const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home");
  } else if (url === "about") {
    res.writeHead(200, { "Content-Type": "text/plane" });
    res.end("mypage");
  } else {
    res.writeHead(404, { "Content-Type": "text/plane" });
    res.end("not found");
  }

  // req : 요청 정보 (url, method, headers 등)
  // res : 응답 처리 객체
});

//127.0.0.1 , localhost
server.listen(3000, () => {
  console.log("서버 실행 중");
});
