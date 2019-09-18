var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = user.body.photo;
        var userScores = userData.scores;

        var b = userScores.map(function(item) {
            return parseInt(item, 0);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User score: " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);
        console.log("++++++++++++++++======================");

        for(var i = 0; i < friends.lenght; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total match friend diff " + bestMatch.friendDifference);

            var bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);   
            console.log("Total friend scrore" + bestFriendScore);
            totalDifference += Math.abs(sum - bestFriendScore);
            console.log("-------------------------> " + totalDifference);
            
            if(totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference = " Total Difference");
        };

        console.log(bestMatch);
        friends.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(bestMatch);
    });
}

