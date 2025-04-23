const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 회원가입
 *     description: 사용자가 회원 정보를 입력하여 가입을 처리합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 사용자 아이디
 *               userpw:
 *                  type: string
 *                  description: 사용자 비밀번호
 *               email:
 *                  type: string
 *                  format: email
 *                  description: 사용자 이메일
 *               name:
 *                  type: string
 *                  description: 사용자 이름
 *               phone:
 *                  type: string
 *                  description: 사용자 번호
 *     responses:
 *       201:
 *         description: 가입 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 *
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인
 *     description: 사용자가 입력한 정보로 로그인 합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 사용자 아이디
 *               userpw:
 *                  type: string
 *                  description: 사용자 비밀번호
 *     responses:
 *       201:
 *         description: 로그인 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: 회원정보 수정
 *     description: 사용자가 회원 정보를 수정합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                  type: string
 *                  description: 사용자 아이디
 *               email:
 *                  type: string
 *                  format: email
 *                  description: 사용할 새 이메일
 *               name:
 *                  type: string
 *                  description: 사용할 새 이름
 *               phone:
 *                  type: string
 *                  description: 사용할 새 번호
 *     responses:
 *       201:
 *         description: 정보 수정 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 *   delete:
 *     summary: 회원 탈퇴
 *     description: 계정을 삭제합니다
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 삭제할 사용자 아이디
 *     responses:
 *       200:
 *         description: 회원 탈퇴 성공
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 에러 오류
 */
router.post("/signup", (req, res) => {
  res.status(201).send("회원가입 완료");
});

router.post("/login", (req, res) => {
  res.status(201).send("로그인 성공");
});

router.put("/user", (req, res) => {
  res.status(200).send("정보수정 완료");
});

router.delete("/user", (req, res) => {
  res.status(200).send("계정 삭제 성공");
});

module.exports = router;
