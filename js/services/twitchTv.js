/**
 * Created by carlos on 20/08/15.
 */
app.factory('twitchTv',['$http', function($http){
    var usr = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];
    var resultado = [];

    usr.forEach(function(item){
        $http.jsonp('https://api.twitch.tv/kraken/streams/' + item + '?client_id=6ff4e7jkd2f48t25tln45w7gbnk6u9d&callback=JSON_CALLBACK')
            .success(function(data) {
                if(data.stream === null) {
                    $http.jsonp('https://api.twitch.tv/kraken/users/' + item + '?client_id=6ff4e7jkd2f48t25tln45w7gbnk6u9d&callback=JSON_CALLBACK')
                        .success(function(data) {
                            resultado.push(data);
                            return data;
                        })
                        .error(function(err) {
                            return err;
                        });
                } else {
                    resultado.push(data);
                }
                return data;
            })
            .error(function(err) {
                return err;
            })
    });

    return resultado;
}]);

app.factory('online',['$http', function($http){
    var usr = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];
    var resultado = [];

    usr.forEach(function(item){
        $http.jsonp('https://api.twitch.tv/kraken/streams/' + item + '?client_id=6ff4e7jkd2f48t25tln45w7gbnk6u9d&callback=JSON_CALLBACK')
            .success(function(data) {
                if(data.stream !== null) {
                    resultado.push(data);
                }
                return data;
            })
            .error(function(err) {
                return err;
            })
    });

    return resultado;
}]);

app.factory('offline',['$http', function($http){
    var usr = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];
    var resultado = [];

    usr.forEach(function(item){
        $http.jsonp('https://api.twitch.tv/kraken/streams/' + item + '?client_id=6ff4e7jkd2f48t25tln45w7gbnk6u9d&callback=JSON_CALLBACK')
            .success(function(data) {
                if(data.stream === null) {
                    $http.jsonp('https://api.twitch.tv/kraken/users/' + item + '?client_id=6ff4e7jkd2f48t25tln45w7gbnk6u9d&callback=JSON_CALLBACK')
                        .success(function(data) {
                            resultado.push(data);
                            return data;
                        })
                        .error(function(err) {
                            return err;
                        });
                }
                return data;
            })
            .error(function(err) {
                return err;
            })
    });

    return resultado;
}]);