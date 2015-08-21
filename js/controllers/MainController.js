/**
 * Created by carlos on 20/08/15.
 */
app.controller('MainController', ['$scope', 'twitchTv', 'userData', 'online', 'offline', function($scope, twitchTv, userData, online, offline){
    $scope.fiveDay = twitchTv;
    $scope.datas = twitchTv;
    $scope.online = online;
    $scope.offline = offline;
}]);
