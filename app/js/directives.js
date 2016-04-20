(function() {
  var app = angular.module('directives', []);

  const baseUserRoute = 'http://api.github.com/users';
  const currUser = 'lexm';
  const userRoute = baseUserRoute + '/' + currUser;

  // app.directive('listAll', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: '../html/listAll.html',
  //     controllerAs: userCtrl
  //   }
  // })


  app.directive('listFollowers', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/follower.html',
      controller: function($http) {
        this.followersData = {};
        this.getFollowerData = function() {
          $http.get(userRoute + '/' + 'followers')
          .then((res) => {
            this.followerData = res.data;
            console.log('followerData', this.followerData);
          });
        }
      },
      controllerAs: 'flwrCtrl'
    }
  });

  app.directive('listFollowed', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/following.html',
      controller: function($http) {
        this.followingData = {};
        this.getFollowingData = function() {
          $http.get(userRoute + '/' + 'following')
          .then((res) => {
            this.followingData = res.data;
            console.log('followingData', this.followingData);
          });
        }
      },
      controllerAs: 'flwngCtrl'
    }
  });

  app.directive('listRepos', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/repo.html',
      controller: function($http) {
        this.getRepoData = function() {
          $http.get(userRoute + '/' + 'repos')
          .then((res) => {
            this.repoData = res.data;
            console.log('repoData', this.repoData);
          });
        }
      },
      controllerAs: 'repoCtrl'
    }
  })

  app.directive('listUserInfo', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/user.html',
      controller: function($http) {
        this.userData = {};
        this.getUserData = function() {
          $http.get(userRoute)
          .then((res) => {
            this.userData = res.data;
            this.avatarUrl = res.data.avatar_url;
            this.starredUrl = res.data.starred_url;
            $http.get(this.starredUrl)

            this.followers = res.data.followers;
            this.followersUrl = res.data.followers_url;
            var thisUser = this;
            this.following = res.data.following;
            this.followingUrl = res.data.following_url;

            this.reposUrl = res.data.repos_url;
            $http.get(this.reposUrl)
            .then((reposRes) => {
              thisUser.reposData = reposRes.data;
            });

          },
          function(error) {
            console.error(error);
          });
        }
      },
      controllerAs: 'userCtrl'
    }
  })

  app.directive('listStarred', function() {
    return {
      restrict: 'E',
      templateUrl: '../html/starred.html',
      controller: function($http) {
        this.starData = {};
        this.getStarData = function() {
          $http.get(userRoute + '/' + 'starred')
          .then((res) => {
            this.starData = res.data;
            console.log('starData', this.starData);
          });
        }
      },
      controllerAs: 'starCtrl'
    }
  });

})()
