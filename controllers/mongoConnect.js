// mongodb 연결용 => mongo 가서 복사해오는 거

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://sohyun:1236@cluster0.k9iy3rj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
