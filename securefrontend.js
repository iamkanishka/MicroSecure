const db = require('./db');
var macaddress = require('macaddress');
const {
  MongoClient
} = require('mongodb')
const {
  Encryption
} = "encrypt-decrypt-library";


const config = {
  algorithm: 'BestAlgorithm',
  encryptionKey: 'AOtOoOmOlOeOsOsOmOiOnOdO',
  salt: '8951900164',
}

// macaddress.one().then(function (mac) {
//     console.log("Mac address for this host: %s", mac);  
//   });


//   macaddress.one().then( (mac)=> {
//     console.log("Mac address for this host: %s", mac);  
//   });


class initializeApp {
  constructor(Key, Url) {

    this.init(Key, Url)
  }

  async init(Key, Url) {
    this.roolUrl = Url

    //   const config = {
    //     algorithm: process.env.ALGORITHM,
    //     encryptionKey: process.env.ENCRYPTION_KEY,
    //     salt: process.env.SALT,
    //  } 
    var encryption = new Encryption(config);

    // Encoded as string
    const mongourl = encryption.decrypt(Key)
    const url = mongourl
    const client = new MongoClient(url)

    // const str = 'mongodb+srv://kanishka:kanishka@cluster0.xgbgi.mongodb.net/doctorsplaza?retryWrites=true&w=majority';

    var dbName = mongourl.substring(
      str.lastIndexOf("/") + 1,
      str.lastIndexOf("?")
    );




    // Database Name
    //const dbName = 'secureMicroAuth'

    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server')
    const db =  client.db(dbName)

    this.DB = db
    //const collection = db.collection('documents')
    //return db
  }


}


class Methods {


  secureGet(URL) {



    macaddress.one().then(function (mac) {
      console.log("Mac address for this host: %s", mac);
    });

  }
  securePost(URL, data) {

  }
  securPut(URL, data) {

  }
  securDelete(URL) {

  }


}

module.exports = {
  Methods,
  initializeApp
}