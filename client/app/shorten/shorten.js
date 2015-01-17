angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.addLink = function(){
      console.log('I am the link!! ', url);
      Links.addLink(url)
      .then(function(data){
        return data.links;
      }).catch(function(err){
        console.error(err);
      });
    };
});
