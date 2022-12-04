// 모듈 가져와서 사용

// mongo 소문자로 써야됨
const mongoClient = require("./mongoConnect");

const db = {
  getAllMembers: async () => {
    // mongodb 아틀라스에 접속
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    // 어디에 있는지만 알려주는거라 시간 안걸림 await 걸 필요 없음
    const userCursor = user.find({});
    // 시간 걸리니까 await 써줘야됨
    const allUser = await userCursor.toArray();
    if (allUser.length === 0) return false;
    return allUser;
  },
};

module.exports = db;
