angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
    $scope.data = {};
    $scope.getLinks = function(){
      Links.getLinks().then(function(data){
        $scope.data.links = data;
      })
      .catch(function(err){
        console.error(err);
      });
    };
    $scope.getLinks();
    return $scope.data.links;
  });
