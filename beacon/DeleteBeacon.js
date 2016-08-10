/**
 * @author Bluedot Innovation
 * Copyright (c) 2016 Bluedot Innovation. All rights reserved.
 * Delete Beacon client demonstrates deleting a beacon using 'request' node module.
 * If a beacon is added to the zone then it will not be deleted and an error response will be returned. 
 * A beacon can only be deleted if it is not added to any zone, in any of the applications of the user's account.
 */
var request = require('request');
 
var bdCustomerApiKey = "6ab02370-97c4-11e4-b3f3-00155d53317c"; //This key is generated by Bluedot Access UI when you register
var bdBeaconId = "29d0571f-cfb3-459f-a346-6e11a351ad31"; // This is the Id of the beacon to be deleted. This can be retrieved through the GET Beacons API.
 
var options = {
    uri: "https://api.bluedotinnovation.com/1/beacons?customerApiKey=" + bdCustomerApiKey + "&beaconId=" + bdBeaconId,
    method: "DELETE"
};
 
request ( options,
    function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log(JSON.stringify(response.body));
    }
);