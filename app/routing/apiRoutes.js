var friendsArray = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray); 
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        if (friendsArray.length == true) {
            friendsArray.push(req.body);
            res.json(true);
        } else {
            friendsArray.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friends = [];

        console.log(friends);
    });
};