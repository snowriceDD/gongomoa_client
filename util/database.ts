import { MongoClient } from "mongodb";

interface MongoClientOptions {
    useNewUrlParser?: boolean;
  }

const url:any = process.env.DB_CONN_STRING;
const options:any = { useNewUrlParser: true }
let connectDB:any

if (process.env.NODE_ENV === 'development') { //개발 단계와 배포 단계 구분을 위한 조건 분할
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }