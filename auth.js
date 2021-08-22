const db = require('./db');
var macaddress = require('macaddress');
macaddress.one().then(function (mac) {
    console.log("Mac address for this host: %s", mac);  
  });


  macaddress.one().then(function (mac) {
    console.log("Mac address for this host: %s", mac);  
  });

//   console.log("Macaddress.networkinterfaces",JSON.stringify(macaddress.networkInterfaces(), null, 2));