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
    $scope.visitCount = function(link){
      console.log(link);
      link.visits++;
      console.log(link);
      Links.updateVisit(link).then(function(data){
        console.log(data);
      })
      .catch(function(err){
        throw err;
      });
    };
    $scope.getLinks();
    return $scope.data.links;
  });
