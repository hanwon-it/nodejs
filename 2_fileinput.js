const fs = require("fs"); // 동기 방식

/*
const data = fs.readFileSync("example.txt", "utf8");
//fs.readFileSync => 동기 방식
//fs.readFile => 비동기 방식
console.log("파일 내용: ", data);
// 동기 방식은 오류 처리가 없다 그래서 별도로 오류 처리를 해줘야 한다.
*/

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("오류 발생: ", err);
    return;
  }
  console.log("파일 내용: ", data);
});
console.log("프로그램을 종료합니다");
