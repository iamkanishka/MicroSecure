// const { MongoClient } = require('mongodb')

// // or as an es module:
// // import { MongoClient } from 'mongodb'


// async function main(mongourl) {


// // Connection URL
// const url = mongourl
// const client = new MongoClient(url)

// // Database Name
// const dbName = 'secureMicroAuth'

//   // Use connect method to connect to the server
//   await client.connect()
//   console.log('Connected successfully to server')
//   const db = client.db(dbName)
//   //const collection = db.collection('documents')
// return db
// }

// module.exports = main()
//   .then()
//   .catch(console.error)
//   .finally(() => client.close())