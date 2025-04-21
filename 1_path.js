const path = require("path");

console.log(__dirname); // 현재 디렉토리
console.log(__filename); // 현재 파일

console.log(path.sep); // 디렉토리를 나누는 특수문자 (OS마다 다르게 나옴 window = \ mac = / )
console.log(path.delimiter); // 문장의 끝이 어떤 것으로 끝나야 하는지 표시

console.log(path.basename(__filename)); // 현재 파일의 이름만 추출
console.log(path.basename(__filename, ".js")); // 확장자를 제외하고 이름 추출

console.log(path.dirname(__filename)); // 디렉토리만 추출
console.log(path.extname(__filename)); // 확장명만 추출
