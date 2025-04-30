import { getUsers } from "./userRepository.mjs";
import { db } from "./db.mjs";
import { createUser } from "./userRepository.mjs";

async function main() {
  //   select
  //   const users = await getUsers();
  //   console.log("사용자 목록: ", users);

  //   insert
  //   userid, userpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3
  const newUserId = await createUser(
    "test",
    "1111",
    "테스트",
    "010-1111-1111",
    "test@test.com",
    "남자",
    "000000",
    "0000000",
    "12345",
    "서울 서초구",
    "11-11",
    "6층"
  );
  console.log("새 사용자 ID: ", newUserId);
  await db.end(); // 풀 종료(보통은 사용하지 않음)
}

main();
