
const uri = process.env.MONGO_DB_URI;
const dbName = process.env.DB_NAME;

const collections = {
    EVENTS : 'events',
}

const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => {
    return client.db(dbName).collection(cname);
};