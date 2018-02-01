var friends = require("../data/friends");

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        if (friends.length == true) {
            friends.push(req.body);
            res.json(true);
        } else {
            friends.push(req.body);
            res.json(false);
        }
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friends = [];

        console.log(friends);
    });
};