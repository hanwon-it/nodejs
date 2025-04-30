import { db } from "./db.mjs";

export async function getUsers() {
  // db.query("select * from member")의 반환은 [rows,fields]
  const [rows] = await db.query("select * from member");
  //console.log(rows);
  return rows;
}

export async function createUser(
  userid,
  userpw,
  name,
  hp,
  email,
  gender,
  ssn1,
  ssn2,
  zipcode,
  address1,
  address2,
  address3
) {
  const [result] = await db.query(
    "insert into member (userid, userpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3) values (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      userid,
      userpw,
      name,
      hp,
      email,
      gender,
      ssn1,
      ssn2,
      zipcode,
      address1,
      address2,
      address3,
    ]
  );
  return result.insertId;
}
