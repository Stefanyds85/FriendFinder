var friendsArray = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray); 
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
       
        var friendMatch = [
            {
            name:"",
            photo:"",
            friendDifferences: ""
        }
    ];
         conaole.log(req.body);

        
        var totalDifference = 0;
        var clientInfo = req.body;
        var clientScore = clientInfo.scores;

        for(var i = 0; i<friendsArray.length; i++){
            console.log(friendsArray[i]);
            totalDifference=0;
        

        if (friendsArray.length == true) {
            friendsArray.push(clientInfo);
            res.json(true);
        }
    } 
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friends = [];

        console.log(friends);
    });
};