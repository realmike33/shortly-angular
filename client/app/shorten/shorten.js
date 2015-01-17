angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.addLink = function(){
      $scope.link['url'] = $scope.url;
      Links.addLink($scope.link)
      .then(function(data){
        console.log(data);
        $scope.url  = {
          title: data.data.title,
          base_url: data.data.base_url,
          code: data.data.code,
          url: data.data.url,
          visits: data.data.visits
        };
      }).catch(function(err){
        throw err;
      });
    };
});
