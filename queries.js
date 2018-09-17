/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema.js'),
    mongoose = require('mongoose'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient:true});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  Listing.find({ name: "Library West" }, function(err, listing) {
    if (err) throw err;
    // object of the liasting
    console.log(listing);
});


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

  Listing.find({ code: 'CABL'}, function (err, listing){

    listing.remove(function(err){
      if (err) throw err;
    });

    console.log(listing);
  });


};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.findOneAndUpdate({ name: "Phelps Laboratory"}, { address: "1953 Museum Rd, Gainesville, FL 32603" }, function(err, listing){
    if (err) throw err;

    console.log(listing);
   });
};
var retrieveAllListings = function() {
  

  Listing.find({}, function (err, listings){
    if (err) throw err;

    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
