(function() {
  var app = angular.module('directives', []);

  app.directive('listFollowers', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/follower.html'
    }
  });

  app.directive('listFollowed', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/following.html'
    }
  });

  app.directive('listRepos', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/repo.html'
    }
  })

  app.directive('listUserInfo', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/user.html'
    }
  })

  app.directive('listStarred', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/starred.html'
    }
  });

})()
