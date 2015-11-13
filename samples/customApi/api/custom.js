
var api = module.exports = {

    getAchievement: function(req, res, next){
        // var achievementName = req.params.achievementName;
        // var gameId = +req.params.gameId;
        res.status(200).end();
    },
    setAchievement: function (req, res, next){
        // var achievementName = req.params.achievementName;
        // var gameId = +req.params.gameId;
        res.status(200).end();
    },
    get: function (req, res, next) {
        res.status(200).end();
    },
    put: [function(req, res, next) {
            res.set('customapi', 'true');
            next();
        },function (req, res, next) {
            res.status(200).end();
        }],
    delete: function(req, res, next) {
        res.status(200).end();
    },
}

api.getAchievement.get = '/:gameId/get/:achievementName';
api.setAchievement.post = '/:gameId/set/:achievementName';

api.getAchievement.authorize = true;
// api.get.authorize = true;
// api.delete.authorize = true;
// api.put.authorize = true;

