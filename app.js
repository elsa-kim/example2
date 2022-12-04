const express = require("express");

// 컨트롤러로 만들어둔 모듈 가져오기
const db = require("./controllers/memberController");

const app = express();
const PORT = 8000;

// 뷰엔진 설정; views 폴더 고정값
app.set("view engine", "ejs");

// 요청들어오면 index.ejs에서 그려라
app.get("/", (req, res) => {
  res.render("index");
});

// 멤버 페이지 들어가면 member.ejs 열어라
app.get("/member", async (req, res) => {
  const MEMBERS = await db.getAllMembers();
  console.log(MEMBERS);
  res.render("member", { MEMBERS });
});

// 서버 연결 됐을때 콘솔에 찍어주는 역할
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행중`);
});
