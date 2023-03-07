import  express from "express"
import  mongodb, {MongoClient} from "mongodb"

const app = express();
const client = new MongoClient();