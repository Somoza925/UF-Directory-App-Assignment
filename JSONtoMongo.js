'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'),
    listingData, 
    config = require('./config');


/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient:true});


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

fs.readFile('./listings.json', function read(err, data){
  if (err){
    console.log(err);
  }
 
  listingData = JSON.parse(data);

  listingData.entries.forEach(function (listing){

    var listing =  Listing(listing);
  
    listing.save(function(err){
      if (err) {
        console.log(err);
      } else {
        console.log('User created!');
      }
    }); 
   });
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */